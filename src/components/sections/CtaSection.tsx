import Button from '@/components/ui/Button'
import { site } from '@/data/site'

export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Concrete Project?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation estimate for your driveway, patio,
          foundation, or any concrete project in the Dallas–Fort Worth area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">Get Free Estimate</Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
