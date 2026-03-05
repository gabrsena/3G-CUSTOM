import { MetadataRoute } from 'next'
import { servicesList } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://3gcustoms.com.br'

    // Home
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ]

    // Dynamic Service Routes
    const serviceRoutes = servicesList.map((service) => ({
        url: `${baseUrl}/servicos/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...staticRoutes, ...serviceRoutes]
}
