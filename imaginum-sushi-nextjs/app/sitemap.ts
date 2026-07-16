import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.imaginumsushi.com.br'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/cardapio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/delivery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reservas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
