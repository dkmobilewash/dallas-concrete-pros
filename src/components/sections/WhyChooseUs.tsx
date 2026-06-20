import {
  Award,
  Users,
  Building,
  MessageSquare,
  Shield,
  Sparkles,
} from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Every pour is held to exacting standards for finish, strength, and durability.',
  },
  {
    icon: Users,
    title: 'Experienced Crews',
    description: 'Professional, skilled teams that show up on time and treat your property with care.',
  },
  {
    icon: Building,
    title: 'Residential & Commercial',
    description: 'From backyard patios to commercial parking lots, we have the capacity for any project size.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Honest timelines, transparent pricing, and responsive project updates throughout.',
  },
  {
    icon: Shield,
    title: 'Built for Texas Conditions',
    description: 'Durable installs engineered to handle the heat, soil movement, and weather of North Texas.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'Clean edges, proper grading, thorough site cleanup — we care about the finish.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          Why Choose Dallas Concrete Pros
        </h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
          We bring professionalism, precision, and pride to every concrete
          project we take on.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <reason.icon className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                {reason.title}
              </h3>
              <p className="text-brand-gray text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
