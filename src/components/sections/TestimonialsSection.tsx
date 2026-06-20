import TestimonialCard from '@/components/ui/TestimonialCard'

// TODO: Replace with verified Google/Yelp reviews before launch
const testimonials = [
  {
    quote:
      'They replaced our entire driveway in two days. The crew was professional, communicated clearly, and the finished product looks great.',
    attribution: 'Homeowner in Dallas',
  },
  {
    quote:
      'We got quotes from several companies and went with Dallas Concrete Pros. Fair pricing, solid work, and they cleaned up everything when they were done.',
    attribution: 'Homeowner in Frisco',
  },
  {
    quote:
      'Our new stamped patio turned out better than we expected. The team paid attention to every detail, from the grade to the color match.',
    attribution: 'Homeowner in McKinney',
  },
]

export default function TestimonialsSection() {
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
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              attribution={t.attribution}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
