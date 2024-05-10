import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'

const replacements = [
  [/« /g, '«&nbsp;'],
  [/ »/g, '&nbsp;»'],
  [/ ([\?\!:;])/g, '&nbsp;$1'],
]
const fancyize = (text) => replacements.reduce((text, rep) => text.replace(rep[0], rep[1]), text)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
      },
      transforms: {
        after: (code) => fancyize(code)
      }
    })
  ]
})
