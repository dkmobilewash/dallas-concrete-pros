import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import type { City } from '@/data/cities'

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="group flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md border-b-2 border-transparent hover:border-brand-orange transition-all"
    >
      <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
      <div className="flex-1">
        <span className="font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors">
          {city.name}
        </span>
        <span className="text-brand-gray text-sm ml-2">{city.county}</span>
      </div>
      <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
    </Link>
  )
}
