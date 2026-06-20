import FaqAccordion from '@/components/ui/FaqAccordion'

const faqs = [
  {
    question: 'How much does a concrete driveway cost in Dallas?',
    answer:
      'Concrete driveway costs in Dallas typically depend on the size, thickness, finish, and site preparation required. We provide free on-site estimates so you get an accurate price for your specific project.',
  },
  {
    question: 'How long does concrete take to cure in the Texas heat?',
    answer:
      'Concrete generally reaches initial set within 24–48 hours and gains most of its strength within 7 days. In the hot Texas summers, we take extra precautions — including proper curing compounds and timing pours — to prevent cracking and ensure long-term durability.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes, we provide free, no-obligation estimates for all residential and commercial concrete projects. Contact us by phone or through our online form to schedule yours.',
  },
  {
    question: 'What cities do you serve in the Dallas area?',
    answer:
      'We serve Dallas, Frisco, McKinney, Plano, Allen, Prosper, Southlake, Flower Mound, Celina, Rockwall, and surrounding communities throughout the DFW metroplex.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, Dallas Concrete Pros is fully licensed and insured. We carry general liability insurance and can provide proof of coverage upon request.',
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
