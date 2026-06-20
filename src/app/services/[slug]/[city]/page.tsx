import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import Button from '@/components/ui/Button'
import ServiceSchema from '@/components/seo/ServiceSchema'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

export function generateStaticParams() {
  const params: { slug: string; city: string }[] = []
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: service.slug, city: city.slug })
    }
  }
  return params
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; city: string }
}): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  const city = cities.find((c) => c.slug === params.city)
  if (!service || !city) return {}

  const title = `${service.name} ${city.name} TX | ${site.name}`
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, TX — quality concrete work for residential and commercial properties. Call ${site.phone} for a free estimate.`

  return buildMetadata({
    title,
    description,
    canonical: `${site.baseUrl}/services/${service.slug}/${city.slug}`,
  })
}

export default function ServiceCityPage({
  params,
}: {
  params: { slug: string; city: string }
}) {
  const service = services.find((s) => s.slug === params.slug)
  const city = cities.find((c) => c.slug === params.city)
  if (!service || !city) notFound()

  const related = services
    .filter((s) => service.relatedSlugs.includes(s.slug))
    .slice(0, 3)

  const nearbyCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4)

  return (
    <>
      <ServiceSchema
        name={`${service.name} in ${city.name}`}
        description={`Professional ${service.name.toLowerCase()} services in ${city.name}, TX by ${site.name}.`}
      />
      <LocalBusinessSchema cityName={city.name} />

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/#services' },
              { name: service.name, href: `/services/${service.slug}` },
              {
                name: city.name,
                href: `/services/${service.slug}/${city.slug}`,
              },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            {service.name} in {city.name}, TX
          </h1>
          <p className="text-lg text-brand-gray">
            Professional {service.name.toLowerCase()} for homeowners and
            businesses in {city.name} and {city.county}.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            {service.name} Services in {city.name}
          </h2>
          <p className="text-brand-gray mb-4 leading-relaxed">
            Looking for a reliable {service.name.toLowerCase()} contractor in{' '}
            {city.name}, TX? {site.name} provides expert{' '}
            {service.name.toLowerCase()} services throughout {city.name} and the
            surrounding {city.county} area. Our crews are experienced with the
            local soil conditions, building codes, and weather patterns that
            affect concrete work in this part of North Texas.
          </p>
          <p className="text-brand-gray mb-4 leading-relaxed">
            {city.intro}
          </p>
          <p className="text-brand-gray mb-4 leading-relaxed">
            Whether your project is near{' '}
            {city.landmarks.slice(0, 2).join(' or ')} or in the{' '}
            {city.neighborhoods.slice(0, 2).join(' or ')} area, our team
            delivers quality {service.name.toLowerCase()} that stand up to years
            of use. We handle every step from site preparation through final
            cleanup, and we back our work with the attention to detail that{' '}
            {city.name} property owners expect.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Why {city.name} Residents Choose {site.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Local Expertise
              </h3>
              <p className="text-brand-gray text-sm">
                We understand the soil conditions and climate in {city.name} and{' '}
                {city.county} that impact how concrete performs long-term.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Quality Materials
              </h3>
              <p className="text-brand-gray text-sm">
                Every pour uses the right concrete mix, reinforcement, and
                finishing techniques for your specific project.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Free Estimates
              </h3>
              <p className="text-brand-gray text-sm">
                We provide detailed, no-obligation quotes for all{' '}
                {service.name.toLowerCase()} projects in {city.name}.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Licensed & Insured
              </h3>
              <p className="text-brand-gray text-sm">
                Full insurance coverage and compliance with all {city.name}{' '}
                building requirements and permit processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            {city.name} Neighborhoods We Serve
          </h2>
          <p className="text-brand-gray mb-4">
            Our concrete crews work throughout {city.name}, including:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {city.neighborhoods.map((n) => (
              <li key={n} className="text-brand-gray flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                {n}
              </li>
            ))}
          </ul>
          <p className="text-brand-gray text-sm">
            Don&apos;t see your neighborhood? We likely serve your area too.{' '}
            <Link
              href="/contact"
              className="text-brand-orange hover:underline"
            >
              Contact us
            </Link>{' '}
            to confirm service availability.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Related Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}/${city.slug}`}
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <span className="font-semibold text-brand-charcoal hover:text-brand-orange transition-colors">
                  {r.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${service.slug}/${c.slug}`}
                className="text-sm text-brand-orange hover:underline"
              >
                {service.name} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free {service.name} Estimate in {city.name}
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a no-obligation quote on your{' '}
            {service.name.toLowerCase()} project in {city.name}, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get Free Estimate</Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
