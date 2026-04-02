import type { VercelRequest, VercelResponse } from '@vercel/node'

interface FormPayload {
  email: string
  agreedPolicy: boolean
  subscribedToNews: boolean
  utm: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
    utm_term?: string
  }
  pageUrl: string
}

async function bitrixCall(method: string, params: Record<string, unknown>): Promise<unknown> {
  const baseUrl = process.env.BITRIX_WEBHOOK_URL
  if (!baseUrl) {
    throw new Error('BITRIX_WEBHOOK_URL not configured')
  }

  const url = baseUrl.replace(/\/$/, '') + '/' + method

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new Error(`Bitrix API HTTP ${response.status}`)
  }

  const data = await response.json() as { error?: string; error_description?: string; result?: unknown }

  if (data.error) {
    throw new Error(`Bitrix API error: ${data.error_description || data.error}`)
  }

  return data.result
}

function mergeProjectValue(currentValues: unknown, newValue: number): number[] {
  const arr: number[] = []

  if (Array.isArray(currentValues)) {
    for (const v of currentValues) {
      arr.push(Number(v))
    }
  }

  if (!arr.includes(newValue)) {
    arr.push(newValue)
  }

  return arr
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { email, agreedPolicy, subscribedToNews, utm, pageUrl } = req.body as FormPayload

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Некорректный email' })
    }

    // 1. Search for duplicate by email
    const duplicateResult = await bitrixCall('crm.duplicate.findbycomm', {
      type: 'EMAIL',
      values: [email],
    }) as { CONTACT?: number[] } | null

    const contactIds = duplicateResult?.CONTACT || []

    if (contactIds.length > 0) {
      // 2a. Contact found — update
      const contactId = contactIds[0]

      // Read current UF_CRM_1774536137 to merge
      const contact = await bitrixCall('crm.contact.get', {
        id: contactId,
        select: ['UF_CRM_1774536137'],
      }) as Record<string, unknown>

      const mergedProject = mergeProjectValue(contact?.UF_CRM_1774536137, 235)

      await bitrixCall('crm.contact.update', {
        id: contactId,
        fields: {
          UF_CRM_1774536210: agreedPolicy ? '1' : '0',
          UF_CRM_1774536236: subscribedToNews ? '1' : '0',
          UF_CRM_1774536137: mergedProject,
        },
      })
    } else {
      // 2b. No duplicate — create new contact
      const fields: Record<string, unknown> = {
        NAME: email,
        EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
        UF_CRM_1774536210: agreedPolicy ? '1' : '0',
        UF_CRM_1774536236: subscribedToNews ? '1' : '0',
        UF_CRM_1774536137: [235],
        UF_CRM_69930EC8DC8C1: 'Голосование животные',
        SOURCE_DESCRIPTION: pageUrl || '',
      }

      // UTM fields (UPPER_CASE for crm.contact.add)
      if (utm) {
        if (utm.utm_source) fields.UTM_SOURCE = utm.utm_source
        if (utm.utm_medium) fields.UTM_MEDIUM = utm.utm_medium
        if (utm.utm_campaign) fields.UTM_CAMPAIGN = utm.utm_campaign
        if (utm.utm_content) fields.UTM_CONTENT = utm.utm_content
        if (utm.utm_term) fields.UTM_TERM = utm.utm_term
      }

      await bitrixCall('crm.contact.add', { fields })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Form submission error:', err)
    return res.status(502).json({
      success: false,
      error: 'Произошла ошибка. Попробуйте позже.',
    })
  }
}
