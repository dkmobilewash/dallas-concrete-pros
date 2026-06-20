import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          Our Concrete Services
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          From residential driveways to commercial foundations, we handle every
          type of concrete project in the Dallas–Fort Worth area.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
