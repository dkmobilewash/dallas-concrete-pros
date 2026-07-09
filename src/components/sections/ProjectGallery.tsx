import Image from 'next/image'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

export default function ProjectGallery() {
  const featured = projects.slice(0, 8)

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-3">
            Recent Concrete Projects
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            From residential driveways to large commercial pours, here is a look
            at our recent work across the Dallas–Fort Worth area.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((project, i) => {
            const service = services.find((s) => s.slug === project.serviceSlug)
            // Hide the caption overlay while project details are still
            // placeholders (title starts with "["). Real photos always show;
            // captions reappear once src/data/projects.ts is filled in.
            const hasDetails = !project.title.trim().startsWith('[')
            const location =
              project.location.trim().startsWith('[') ? '' : project.location
            return (
              <div
                key={project.slug}
                className={`group relative overflow-hidden rounded-lg ${
                  i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    i === 0 || i === 3
                      ? '(max-width: 768px) 100vw, 50vw'
                      : '(max-width: 768px) 50vw, 25vw'
                  }
                />
                {hasDetails && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <p className="text-sm font-semibold leading-tight">
                        {service?.name ?? project.title}
                        {location && ` — ${location}`}
                      </p>
                      <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
