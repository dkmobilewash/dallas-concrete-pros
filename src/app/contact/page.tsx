import type { Metadata } from 'next'
import { Phone, Mail, Clock } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import ContactForm from './ContactForm'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Concrete Estimate in Dallas',
  description:
    'Contact Dallas Concrete Pros for a free estimate on driveways, patios, foundations, and more in Dallas, TX. Call 214-466-2536.',
  canonical: `${site.baseUrl}/contact`,
})

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Get a Free Concrete Estimate in Dallas
          </h1>
          <p className="text-lg text-brand-gray">
            Tell us about your project and we&apos;ll get back to you with a
            free, no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-brand-charcoal mb-3">
                  Contact Info
                </h2>
                <ul className="space-y-3 text-sm text-brand-gray">
                  <li>
                    <a
                      href={site.phoneHref}
                      className="flex items-center gap-2 hover:text-brand-orange transition-colors"
                    >
                      <Phone className="w-4 h-4 text-brand-orange" />
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 hover:text-brand-orange transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-orange" />
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-brand-charcoal mb-3">
                  Business Hours
                </h2>
                <div className="flex items-start gap-2 text-sm text-brand-gray">
                  <Clock className="w-4 h-4 text-brand-orange mt-0.5" />
                  <div>
                    <p>{site.hours.weekdays}</p>
                    <p>{site.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
