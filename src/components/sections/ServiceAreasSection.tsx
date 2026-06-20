import { cities } from '@/data/cities'
import CityCard from '@/components/ui/CityCard'

export default function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          Service Areas
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          We serve homeowners and businesses across the Dallas–Fort Worth
          metroplex, including these cities and surrounding communities.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </div>
    </section>
  )
}
