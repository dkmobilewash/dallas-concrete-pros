import Button from '@/components/ui/Button'
import { site } from '@/data/site'

export default function HeroSection() {
  return (
    <section className="bg-brand-charcoal text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Dallas Concrete Contractors
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Professional concrete driveways, patios, foundations, and more
          throughout Dallas and the surrounding areas. Quality workmanship on
          every pour.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">Get Free Estimate</Button>
          <Button href={site.phoneHref} variant="secondary">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
