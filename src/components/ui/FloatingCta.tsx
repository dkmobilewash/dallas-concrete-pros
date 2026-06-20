'use client'

import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '@/data/site'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={site.phoneHref}
      aria-label={`Call ${site.phone}`}
      className={`fixed bottom-6 right-6 z-50 md:hidden bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
