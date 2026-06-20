export interface ProjectImage {
  src: string
  alt: string
  category: 'driveway' | 'patio' | 'walkway' | 'foundation' | 'commercial' | 'flooring' | 'crew'
}

export const projectImages: ProjectImage[] = [
  {
    src: '/images/hero-driveway-pour.jpg',
    alt: 'Freshly poured concrete driveway at residential home in Dallas TX',
    category: 'driveway',
  },
  {
    src: '/images/crew-sealing-concrete.jpg',
    alt: 'Concrete contractor applying curing compound to fresh driveway slab',
    category: 'crew',
  },
  {
    src: '/images/foundation-rebar.jpg',
    alt: 'Concrete foundation rebar grid prepared for pour in Dallas TX',
    category: 'foundation',
  },
  {
    src: '/images/commercial-interior-pour.jpg',
    alt: 'Concrete crew pouring and finishing commercial building floor slab',
    category: 'commercial',
  },
  {
    src: '/images/driveway-walkway-finished.jpg',
    alt: 'Finished concrete driveway and walkway with control joints in Dallas',
    category: 'driveway',
  },
  {
    src: '/images/commercial-sidewalk-pour.jpg',
    alt: 'Crew finishing formed concrete sidewalk at commercial property in Dallas TX',
    category: 'commercial',
  },
  {
    src: '/images/concrete-truck-pour.jpg',
    alt: 'Concrete pour from mixer truck with crew spreading and finishing',
    category: 'crew',
  },
  {
    src: '/images/commercial-slab-large.jpg',
    alt: 'Large commercial concrete slab pour with pump truck and full crew',
    category: 'commercial',
  },
  {
    src: '/images/pump-truck-rebar.jpg',
    alt: 'Concrete pump truck boom over rebar grid at commercial job site',
    category: 'commercial',
  },
  {
    src: '/images/walkway-broom-finish.jpg',
    alt: 'Broom finish concrete walkway along commercial building in Dallas',
    category: 'walkway',
  },
  {
    src: '/images/driveway-residential-cones.jpg',
    alt: 'Freshly poured residential concrete driveway with safety cones in Dallas TX',
    category: 'driveway',
  },
  {
    src: '/images/driveway-large-pour.jpg',
    alt: 'Concrete crew bull-floating large residential driveway pour',
    category: 'driveway',
  },
  {
    src: '/images/driveway-curved-dusk.jpg',
    alt: 'Crew pouring curved concrete driveway at brick home at dusk in Dallas',
    category: 'driveway',
  },
  {
    src: '/images/walkway-steps-new.jpg',
    alt: 'Concrete walkway and steps at new construction home in Dallas TX',
    category: 'walkway',
  },
  {
    src: '/images/patio-slab-finishing.jpg',
    alt: 'Bull float finishing fresh concrete patio slab at residential home',
    category: 'patio',
  },
  {
    src: '/images/floor-polished-commercial.jpg',
    alt: 'Polished concrete floor with smooth finish in commercial building',
    category: 'flooring',
  },
  {
    src: '/images/driveway-long-residential.jpg',
    alt: 'Long freshly poured concrete driveway at residential property',
    category: 'driveway',
  },
  {
    src: '/images/driveway-control-joints.jpg',
    alt: 'Finished concrete driveway with clean control joints alongside brick home',
    category: 'driveway',
  },
  {
    src: '/images/concrete-steps-closeup.jpg',
    alt: 'Close-up of broom finish concrete steps with clean formed edges',
    category: 'walkway',
  },
]

export const heroImage = projectImages[12] // driveway-curved-dusk.jpg
export const ogImage = '/images/driveway-curved-dusk.jpg'

export function getImagesByCategory(category: ProjectImage['category']) {
  return projectImages.filter((img) => img.category === category)
}
