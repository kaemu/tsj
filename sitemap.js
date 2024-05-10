// usage: node sitemap.js

import { DateTime } from 'luxon'
import { availableLocales } from './src/i18n.js'
import { siteUrl, routes } from './src/routes.js'
import { open } from 'node:fs/promises'

const lastmod = DateTime.now().toFormat('yyyy-MM-dd')
const urls = new Map()
for (const lang of availableLocales) {
  for (const route of routes) {
    if (!route.redirect) {
      const r = route.path.replace(/^\/:lang/, `/${lang}`)
      urls.set(`${siteUrl}${r}`, {
        loc: `${siteUrl}${r}`,
        lastmod
      })
    }
  }
}

urls.set('billeterie', {
  loc: 'https://boutique.toursaintjacques.fr',
  lastmod
})

let urlsetStr = ''
urls.forEach(({ loc, lastmod }) => {
  console.log(loc, lastmod)
  urlsetStr += `<url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
})

const sitemapStr = `<?xml version='1.0' encoding='UTF-8'?>
  <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
  ${urlsetStr}
  </urlset>`

const robotsStr = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`

let filehandle = null
try {
  filehandle = await open('./public/sitemap.xml', 'w');
  await filehandle.write(sitemapStr);
  console.log('sitemap.xml generated in /public')
} finally {
  await filehandle?.close();
}

try {
  filehandle = await open('./public/robots.txt', 'w');
  await filehandle.write(robotsStr);
  console.log('robots.txt generated in /public')
} finally {
  await filehandle?.close();
} 
