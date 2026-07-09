import Link from 'next/link'
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{site.name}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" />
                <div>
                  <p>{site.hours.weekdays}</p>
                  <p>{site.hours.weekend}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
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
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            Licensed &amp; Insured Concrete Contractor in Dallas, TX
            {site.license.number ? ` — License #${site.license.number}` : ''}
          </p>
        </div>
      </div>
    </footer>
  )
}
