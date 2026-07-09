import Link from 'next/link'
import { cities } from '@/data/cities'
import { additionalServiceAreas } from '@/data/areas'
import CityCard from '@/components/ui/CityCard'

export default function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          Concrete Contractors Serving Dallas, TX and Beyond
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          As trusted{' '}
          <Link href="/service-areas/dallas" className="text-brand-orange hover:underline">
            concrete contractors in Dallas, TX
          </Link>
          , we also serve homeowners and businesses across the
          Dallas–Fort Worth metroplex, including these cities and
          surrounding communities.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
        <p className="text-brand-gray text-center max-w-3xl mx-auto mt-10 leading-relaxed">
          We provide concrete services across all of Dallas and the surrounding
          Dallas–Fort Worth metroplex, including{' '}
          {additionalServiceAreas.join(', ')}, and nearby communities.
        </p>
      </div>
    </section>
  )
}
