import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import Button from '@/components/ui/Button'
import { Shield, Users, Award } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'About Dallas Concrete Pros',
  description:
    'Learn about Dallas Concrete Pros — a licensed and insured concrete contractor serving Dallas and the surrounding cities with quality workmanship.',
  canonical: `${site.baseUrl}/about`,
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            About {site.name}
          </h1>
          <p className="text-lg text-brand-gray">
            Licensed and insured concrete contractor serving the Dallas–Fort
            Worth metroplex.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-brand-gray leading-relaxed">
          {/* [PLACEHOLDER] Replace with your actual company story */}
          <p>
            {site.name} is a full-service concrete contracting company serving
            homeowners and businesses throughout Dallas and the surrounding
            cities. We specialize in driveways, patios, walkways, foundations,
            retaining walls, stamped concrete, and commercial concrete work.
          </p>
          <p>
            Our team is built on the belief that quality concrete work starts
            with proper preparation, the right materials, and experienced crews
            who take pride in their craft. Every project we take on — from a
            simple walkway to a large commercial pour — gets the same level of
            attention and professionalism.
          </p>
          {/* [PLACEHOLDER] Replace with your founding story, team details, or company values */}
          <p>
            We are fully licensed and insured, and we stand behind every project
            we complete. Our commitment is straightforward: clear communication,
            honest timelines, quality materials, and clean, durable finished
            surfaces that hold up to the demands of the North Texas climate.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Licensed &amp; Insured
              </h3>
              <p className="text-brand-gray text-sm">
                Fully licensed with general liability coverage on every project.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Professional Crews
              </h3>
              <p className="text-brand-gray text-sm">
                Experienced teams that arrive on time, work efficiently, and
                treat your property with respect.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="font-semibold text-brand-charcoal mb-2">
                Quality Materials
              </h3>
              <p className="text-brand-gray text-sm">
                We use high-quality concrete mixes and reinforcement for
                surfaces built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8">
            Contact us for a free estimate on your concrete project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get Free Estimate</Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
