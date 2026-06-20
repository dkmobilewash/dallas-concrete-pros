import Image from 'next/image'
import Button from '@/components/ui/Button'
import { site } from '@/data/site'
import { heroImage } from '@/data/images'

export default function HeroSection() {
  return (
    <section className="relative bg-brand-charcoal text-white py-20 md:py-28 overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Dallas Concrete Contractors
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Professional concrete driveways, patios, foundations, and more
          throughout Dallas and the surrounding areas. Residential and
          commercial concrete contractors in Dallas you can trust for quality
          workmanship on every pour.
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
