import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import { isRedirectedServiceCityCombo } from '@/data/redirects'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import FaqAccordion from '@/components/ui/FaqAccordion'
import Button from '@/components/ui/Button'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) return {}
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `${site.baseUrl}/service-areas/${city.slug}`,
  })
}

function getCityFaqs(city: { name: string }) {
  return [
    {
      question: `What concrete services do you offer in ${city.name}?`,
      answer: `We offer a full range of concrete services in ${city.name}, including driveways, patios, walkways, foundations, retaining walls, stamped concrete, and commercial concrete work.`,
    },
    {
      question: `How much does concrete work cost in ${city.name}?`,
      answer: `Costs vary depending on the project type, size, and finish. We provide free on-site estimates for all concrete projects in ${city.name} so you get accurate pricing for your specific needs.`,
    },
    {
      question: `Do you offer free estimates in ${city.name}?`,
      answer: `Yes, we provide free, no-obligation estimates for all residential and commercial concrete projects in ${city.name}. Call us or fill out our contact form to schedule yours.`,
    },
    {
      question: `How long does a typical concrete project take in ${city.name}?`,
      answer: `Most residential projects like driveways and patios are completed within 2–5 days, depending on size and complexity. We provide a timeline during your estimate.`,
    },
  ]
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) notFound()

  const faqs = getCityFaqs(city)

  return (
    <>
      <LocalBusinessSchema cityName={city.name} />

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Service Areas', href: '/#service-areas' },
              { name: city.name, href: `/service-areas/${city.slug}` },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            {city.headline}
          </h1>
          <p className="text-lg text-brand-gray">{city.subhead}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-brand-gray mb-4 leading-relaxed">{city.intro}</p>
          <p className="text-brand-gray leading-relaxed">
            Whether your property is near {city.landmarks[0]} or in the heart of{' '}
            {city.neighborhoods[0]}, our crews bring the same commitment to
            quality on every concrete project. We understand the local soil
            conditions, permitting requirements, and building standards that
            apply to concrete work in {city.name} and {city.county}.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            Concrete Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={
                  isRedirectedServiceCityCombo(s.slug, city.slug)
                    ? `/services/${s.slug}`
                    : `/services/${s.slug}/${city.slug}`
                }
                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                <span className="font-medium text-brand-charcoal hover:text-brand-orange transition-colors">
                  {s.name} in {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Concrete Work in {city.name} Neighborhoods
          </h2>
          <p className="text-brand-gray mb-4 leading-relaxed">
            We regularly work in neighborhoods throughout {city.name}, including{' '}
            {city.neighborhoods.join(', ')}. Common projects in these areas
            include driveway replacements, patio additions, walkway
            installations, and foundation work for new construction.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Each neighborhood has its own character and requirements. Whether you
            need a simple driveway repair in {city.neighborhoods[1]} or a
            full stamped concrete patio in {city.neighborhoods[0]}, we tailor
            our approach to fit your property and your goals.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            Frequently Asked Questions — {city.name}
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free Concrete Estimate in {city.name}
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a no-obligation quote on your concrete project
            in {city.name}, {site.address.stateCode}.
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
