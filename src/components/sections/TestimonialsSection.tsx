import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

// Only show real testimonials — placeholder entries (quote starts with "[")
// are hidden. When real ones are filled into src/data/testimonials.ts, this
// section reappears automatically.
const realTestimonials = testimonials.filter(
  (t) => !t.quote.trim().startsWith('['),
)

export default function TestimonialsSection() {
  if (realTestimonials.length === 0) return null

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          Don&apos;t just take our word for it — hear from homeowners we&apos;ve
          worked with across the Dallas area.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {realTestimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              city={t.city}
              date={t.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
