import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  href: string
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md inline-block transition-colors',
  secondary:
    'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-6 py-3 rounded-md inline-block transition-colors',
  ghost:
    'text-white underline underline-offset-4 inline-block transition-colors',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`

  if (href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
