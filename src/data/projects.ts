import { projectImages, type ProjectImage } from './images'
import type { Service } from './services'

export interface Project {
  slug: string
  title: string
  serviceSlug: Service['slug']
  location: string
  description: string
  image: ProjectImage
  completedDate?: string
}

// [PLACEHOLDER] Fill in real project details as they become available:
// title, location (city or neighborhood), and a short 1-2 sentence description
// of the actual job. serviceSlug/image are already wired to real photo assets
// and service categories from src/data/images.ts and src/data/services.ts.
export const projects: Project[] = [
  {
    slug: 'project-1',
    title: '[Add project title]',
    serviceSlug: 'concrete-driveways',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[0], // hero-driveway-pour.jpg
  },
  {
    slug: 'project-2',
    title: '[Add project title]',
    serviceSlug: 'concrete-foundations',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[2], // foundation-rebar.jpg
  },
  {
    slug: 'project-3',
    title: '[Add project title]',
    serviceSlug: 'commercial-concrete',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[3], // commercial-interior-pour.jpg
  },
  {
    slug: 'project-4',
    title: '[Add project title]',
    serviceSlug: 'concrete-driveways',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[4], // driveway-walkway-finished.jpg
  },
  {
    slug: 'project-5',
    title: '[Add project title]',
    serviceSlug: 'concrete-walkways',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[9], // walkway-broom-finish.jpg
  },
  {
    slug: 'project-6',
    title: '[Add project title]',
    serviceSlug: 'concrete-patios',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[14], // patio-slab-finishing.jpg
  },
  {
    slug: 'project-7',
    title: '[Add project title]',
    serviceSlug: 'concrete-flooring',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[15], // floor-polished-commercial.jpg
  },
  {
    slug: 'project-8',
    title: '[Add project title]',
    serviceSlug: 'concrete-driveways',
    location: '[Add city or neighborhood]',
    description: '[Add a short 1-2 sentence description of this project]',
    image: projectImages[12], // driveway-curved-dusk.jpg
  },
]
