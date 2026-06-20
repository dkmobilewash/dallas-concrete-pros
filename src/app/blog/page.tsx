import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = buildMetadata({
  title: 'Concrete Tips & Resources for Dallas Homeowners',
  description:
    'Concrete tips, cost guides, and project advice for Dallas homeowners from Dallas Concrete Pros.',
  canonical: `${site.baseUrl}/blog`,
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Concrete Tips &amp; Resources for Dallas Homeowners
          </h1>
          <p className="text-lg text-brand-gray">
            Guides, cost breakdowns, and expert advice on concrete projects in
            the Dallas–Fort Worth area.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-brand-gray text-center py-12">
              Blog posts coming soon. Check back for concrete tips, cost guides,
              and project advice.
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-brand-gray-mid/30 pb-8"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-brand-charcoal hover:text-brand-orange transition-colors mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  <time className="text-sm text-brand-gray">{post.date}</time>
                  <p className="text-brand-gray mt-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-orange font-medium text-sm mt-2 inline-block hover:underline"
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
