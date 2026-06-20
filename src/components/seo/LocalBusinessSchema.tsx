import { site } from '@/data/site'
import { cities } from '@/data/cities'
import { services } from '@/data/services'

export default function LocalBusinessSchema({ cityName }: { cityName?: string }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.baseUrl}/#business`,
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: site.baseUrl,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: cityName ?? site.address.city,
      addressRegion: site.address.stateCode,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: cities.map((c) => ({
      '@type': 'City',
      name: c.name,
      '@id': `https://en.wikipedia.org/wiki/${encodeURIComponent(c.name)},_Texas`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Services',
      itemListElement: services.slice(0, 5).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
        },
      })),
    },
  }

  if (site.sameAs.length > 0) {
    schema.sameAs = site.sameAs
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
