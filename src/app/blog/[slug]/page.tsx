import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `${site.baseUrl}/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-brand-gray-light py-12">
        <div className="max-w-3xl mx-auto px-4">
          <time className="text-sm text-brand-gray">{post.date}</time>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mt-2">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-headings:text-brand-charcoal prose-a:text-brand-orange">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  )
}
