import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServiceAreasSection from '@/components/sections/ServiceAreasSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'
import ProjectGallery from '@/components/sections/ProjectGallery'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import { ogImage } from '@/data/images'

export const metadata: Metadata = {
  title: {
    absolute: 'Dallas Concrete Contractors | Dallas Concrete Pros',
  },
  description:
    'Professional concrete contracting for driveways, patios, foundations, and more throughout Dallas and the surrounding areas. Call 214-466-2536 for a free estimate.',
  alternates: { canonical: 'https://dallasconcretepros.net' },
  openGraph: {
    title: 'Dallas Concrete Contractors | Dallas Concrete Pros',
    description:
      'Professional concrete contracting for driveways, patios, foundations, and more throughout Dallas and the surrounding areas.',
    url: 'https://dallasconcretepros.net',
    siteName: 'Dallas Concrete Pros',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `https://dallasconcretepros.net${ogImage}`, width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <ServicesGrid />
      <ProjectGallery />
      <WhyChooseUs />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
