import Link from 'next/link'
import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          Concrete Contractor Services in Dallas, TX
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          As experienced concrete contractors in Dallas, we handle every type
          of project, from{' '}
          <Link href="/services/concrete-driveways" className="text-brand-orange hover:underline">
            concrete driveway installation
          </Link>{' '}
          to{' '}
          <Link href="/services/concrete-patios" className="text-brand-orange hover:underline">
            concrete patio construction
          </Link>{' '}
          and{' '}
          <Link href="/services/concrete-foundations" className="text-brand-orange hover:underline">
            concrete foundation work
          </Link>{' '}
          throughout the Dallas–Fort Worth area.
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
