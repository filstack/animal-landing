import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import AppSSG from './AppSSG.vue'

export async function render(): Promise<string> {
  const app = createSSRApp(AppSSG)
  return await renderToString(app)
}
