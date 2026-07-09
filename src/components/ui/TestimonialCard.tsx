import { Quote } from 'lucide-react'

export default function TestimonialCard({
  quote,
  name,
  city,
  date,
}: {
  quote: string
  name: string
  city: string
  date: string
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <Quote className="w-6 h-6 text-brand-orange/30 mb-3" />
      <p className="text-brand-charcoal italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-brand-gray text-sm font-medium">
        — {name}, {city}
      </p>
      <p className="text-brand-gray text-xs mt-0.5">{date}</p>
    </div>
  )
}
