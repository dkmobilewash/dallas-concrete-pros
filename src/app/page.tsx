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
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Concrete Contractors Dallas, TX | Dallas Concrete Pros',
  },
  description:
    'Top-rated concrete contractors in Dallas, TX for driveways, patios & foundations. Free estimates — call 214-466-2536.',
  alternates: { canonical: site.baseUrl },
  openGraph: {
    title: 'Concrete Contractors Dallas, TX | Dallas Concrete Pros',
    description:
      'Top-rated concrete contractors in Dallas, TX for driveways, patios & foundations. Free estimates — call 214-466-2536.',
    url: site.baseUrl,
    siteName: 'Dallas Concrete Pros',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${site.baseUrl}${ogImage}`, width: 1200, height: 630 }],
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
