import Image from 'next/image'
import { projectImages } from '@/data/images'

export default function ProjectGallery() {
  const featured = projectImages.slice(0, 8)

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
          {featured.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-lg ${
                i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                sizes={
                  i === 0 || i === 3
                    ? '(max-width: 768px) 100vw, 50vw'
                    : '(max-width: 768px) 50vw, 25vw'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
