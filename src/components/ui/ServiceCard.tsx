import Link from 'next/link'
import {
  Car,
  Sofa,
  Footprints,
  Building2,
  Layers,
  Palette,
  Warehouse,
  Grid3x3,
  Waves,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Car,
  Sofa,
  Footprints,
  Building2,
  Layers,
  Palette,
  Warehouse,
  Grid3x3,
  Waves,
  Wrench,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Building2

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md border-b-2 border-transparent hover:border-brand-orange transition-all"
    >
      <Icon className="w-6 h-6 text-brand-orange mb-3" />
      <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
        {service.name}
      </h3>
      <p className="text-brand-gray text-sm mb-4">{service.heroSubhead}</p>
      <span className="text-brand-orange font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}
