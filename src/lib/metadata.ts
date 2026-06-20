import { site } from '@/data/site'
import { ogImage } from '@/data/images'
import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  canonical,
}: {
  title: string
  description: string
  canonical: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${site.baseUrl}${ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${site.baseUrl}${ogImage}`],
    },
    robots: { index: true, follow: true },
  }
}
