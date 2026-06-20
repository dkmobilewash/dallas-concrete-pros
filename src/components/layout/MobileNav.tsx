'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
    setAreasOpen(false)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-white p-2"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-brand-charcoal border-t border-brand-gray-mid/20 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-6 space-y-1">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-3 text-white font-medium"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="block py-2 text-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className="w-full flex items-center justify-between py-3 text-white font-medium"
            >
              Service Areas
              <ChevronDown
                className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {areasOpen && (
              <div className="pl-4 space-y-1">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    onClick={close}
                    className="block py-2 text-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              onClick={close}
              className="block py-3 text-white font-medium hover:text-brand-orange transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={close}
              className="block py-3 text-white font-medium hover:text-brand-orange transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="block py-3 text-white font-medium hover:text-brand-orange transition-colors"
            >
              Contact
            </Link>

            <a
              href={site.phoneHref}
              className="block mt-4 bg-brand-orange text-white text-center font-semibold py-3 rounded-md hover:bg-brand-orange-dark transition-colors"
            >
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
