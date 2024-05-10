export const siteUrl = 'https://www.toursaintjacques.fr'
export const baseUrl = ''

export const routes = [
    {
        path: '/', redirect: () => {
            const locale = navigator.language.substring(0, 2) === 'fr' ? 'fr' : 'en'
            return `/${locale}`
        }
    },
    {
        path: '/:lang(fr|en)',
        component: () => import('./pages/HomePage.vue')
    },
    {
        path: '/(.*)', redirect: () => {
            return `/`
        }
    }
]
