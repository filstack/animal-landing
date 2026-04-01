import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

async function prerender() {
  // Import the SSR bundle (pathToFileURL required on Windows)
  const ssrPath = resolve(root, 'dist-ssr/entry-server.js')
  const { render } = await import(pathToFileURL(ssrPath).href)

  // Render Vue app to HTML string
  const appHtml = await render()

  // Read the SPA index.html
  const indexPath = resolve(root, 'dist/index.html')
  let html = readFileSync(indexPath, 'utf-8')

  // Inject rendered HTML into the app div
  html = html.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)

  // Write back
  writeFileSync(indexPath, html)
  console.log('✅ Prerendered HTML injected into dist/index.html')

  // Clean up SSR bundle
  rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
  console.log('🗑️  Cleaned up dist-ssr/')
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err)
  process.exit(1)
})
