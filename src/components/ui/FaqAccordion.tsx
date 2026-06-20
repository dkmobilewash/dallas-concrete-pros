'use client'

import { useState } from 'react'
import FaqSchema from '@/components/seo/FaqSchema'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <FaqSchema faqs={faqs} />
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-brand-gray-mid/30 rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-semibold text-brand-charcoal pr-4">
                {faq.question}
              </span>
              <span className="text-brand-orange text-xl font-bold shrink-0">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-brand-gray">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
