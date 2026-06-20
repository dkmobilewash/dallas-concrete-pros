import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="text-sm text-brand-gray mb-6">
        <ol className="flex items-center flex-wrap gap-1">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {i === items.length - 1 ? (
                <span className="text-brand-charcoal font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-orange transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
