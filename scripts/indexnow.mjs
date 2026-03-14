const API_KEY = 'cd9de16da04347b8a34c3d0bafe06c25'
const HOST = 'www.austintarotreader.com'
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`

async function submitUrls() {
  // Static routes from sitemap.ts
  const staticRoutes = [
    '',
    'about',
    'services',
    'blog',
    'faq',
    'contact'
  ].map(route => `https://${HOST}${route === '/' ? '' : route}`)

  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: staticRoutes
  }

  console.log(`Submitting URLs for ${HOST} to IndexNow...`)
  console.log('Payload:', JSON.stringify(payload, null, 2))

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      console.log('Successfully submitted URLs to IndexNow!')
    } else {
      console.error(`Failed to submit URLs. Status: ${response.status} ${response.statusText}`)
      const text = await response.text()
      console.error('Response:', text)
    }
  } catch (error) {
    console.error('Error submitting to IndexNow:', error)
  }
}

submitUrls()
