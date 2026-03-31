const RSS_URL = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(
  'https://www.vedomosti.ru/esg/rss/protection_nature/issue'
)

export interface RssItem {
  title: string
  link: string
  image: string | null
  description: string | null
  pubDate: Date
}

function formatRussianDate(date: Date): string {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ]
  const d = date.getDate().toString().padStart(2, '0')
  const m = months[date.getMonth()]
  const h = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  return `${d} ${m} / ${h}:${min}`
}

export async function fetchRssCards(limit = 10): Promise<{
  image: string
  title: string
  date: string
  readTime: string
  href: string
}[]> {
  try {
    const res = await fetch(RSS_URL)
    const text = await res.text()
    const parser = new DOMParser()
    const xml = parser.parseFromString(text, 'text/xml')
    const items = xml.querySelectorAll('item')

    const result: RssItem[] = []
    items.forEach((item) => {
      const title = item.querySelector('title')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const enclosure = item.querySelector('enclosure')
      const image = enclosure?.getAttribute('url') || null
      const description = item.querySelector('description')?.textContent || null
      const pubDateStr = item.querySelector('pubDate')?.textContent || ''
      const pubDate = new Date(pubDateStr)

      result.push({ title, link, image, description, pubDate })
    })

    return result.slice(0, limit).map((item) => ({
      image: item.image || '',
      title: item.title,
      date: formatRussianDate(item.pubDate),
      readTime: '',
      href: item.link ? `${item.link}${item.link.includes('?') ? '&' : '?'}from=100vidov` : '',
    }))
  } catch (e) {
    console.error('RSS fetch failed:', e)
    return []
  }
}
