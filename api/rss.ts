import type { VercelRequest, VercelResponse } from '@vercel/node'

const RSS_URL = 'https://www.vedomosti.ru/esg/rss/protection_nature/issue'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Vedomosti100vidov/1.0)',
      },
    })

    if (!response.ok) {
      return res.status(502).json({ error: `RSS fetch failed: ${response.status}` })
    }

    const xml = await response.text()

    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    return res.status(200).send(xml)
  } catch (e) {
    return res.status(502).json({ error: 'RSS fetch failed' })
  }
}
