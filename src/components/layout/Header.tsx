'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import MobileNav from './MobileNav'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-charcoal transition-all ${
        scrolled ? 'border-b border-brand-gray-mid/20' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-bold text-xl">
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-brand-orange transition-colors font-medium">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white rounded-lg shadow-lg py-2 min-w-[220px]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2 text-brand-charcoal hover:bg-brand-gray-light hover:text-brand-orange transition-colors text-sm"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-brand-orange transition-colors font-medium">
              Service Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="block px-4 py-2 text-brand-charcoal hover:bg-brand-gray-light hover:text-brand-orange transition-colors text-sm"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="text-white hover:text-brand-orange transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-brand-orange transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-brand-orange transition-colors font-medium"
          >
            Contact
          </Link>

          <a
            href={site.phoneHref}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Call {site.phone}
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
