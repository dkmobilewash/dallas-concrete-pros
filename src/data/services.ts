export interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  metaTitle: string
  metaDescription: string
  heroSubhead: string
  icon: string
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'concrete-driveways',
    name: 'Concrete Driveways',
    shortName: 'Driveways',
    headline: 'Concrete Driveways in Dallas, TX',
    metaTitle: 'Concrete Driveway Installation Dallas TX',
    metaDescription:
      'Professional concrete driveway installation and replacement in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Durable, crack-resistant concrete driveways built to handle Dallas weather and heavy daily traffic.',
    icon: 'Car',
    relatedSlugs: ['concrete-walkways', 'stamped-concrete', 'concrete-foundations'],
  },
  {
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    shortName: 'Patios',
    headline: 'Concrete Patios in Dallas, TX',
    metaTitle: 'Concrete Patio Installation Dallas TX',
    metaDescription:
      'Custom concrete patio design and installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Beautiful, long-lasting concrete patios that extend your outdoor living space year-round.',
    icon: 'Sofa',
    relatedSlugs: ['stamped-concrete', 'concrete-walkways', 'retaining-walls'],
  },
  {
    slug: 'concrete-walkways',
    name: 'Concrete Walkways',
    shortName: 'Walkways',
    headline: 'Concrete Walkways in Dallas, TX',
    metaTitle: 'Concrete Walkway Installation Dallas TX',
    metaDescription:
      'Slip-resistant concrete walkways and sidewalks in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Safe, ADA-compliant concrete walkways that connect your property with clean, lasting pathways.',
    icon: 'Footprints',
    relatedSlugs: ['concrete-driveways', 'concrete-patios', 'stamped-concrete'],
  },
  {
    slug: 'concrete-foundations',
    name: 'Concrete Foundations',
    shortName: 'Foundations',
    headline: 'Concrete Foundations in Dallas, TX',
    metaTitle: 'Concrete Foundation Installation Dallas TX',
    metaDescription:
      'Reliable concrete foundation work for residential and commercial projects in Dallas, TX — call 214-466-2536.',
    heroSubhead:
      'Solid concrete foundations engineered for North Texas soil conditions and long-term structural integrity.',
    icon: 'Building2',
    relatedSlugs: ['concrete-driveways', 'commercial-concrete', 'retaining-walls'],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    shortName: 'Retaining Walls',
    headline: 'Retaining Walls in Dallas, TX',
    metaTitle: 'Retaining Wall Installation Dallas TX',
    metaDescription:
      'Professional retaining wall construction in Dallas, TX for erosion control and landscape support — call 214-466-2536.',
    heroSubhead:
      'Engineered retaining walls that manage soil pressure, prevent erosion, and add structure to your landscape.',
    icon: 'Layers',
    relatedSlugs: ['concrete-foundations', 'concrete-patios', 'commercial-concrete'],
  },
  {
    slug: 'stamped-concrete',
    name: 'Stamped Concrete',
    shortName: 'Stamped Concrete',
    headline: 'Stamped Concrete in Dallas, TX',
    metaTitle: 'Stamped Concrete Installation Dallas TX',
    metaDescription:
      'Decorative stamped concrete for patios, driveways, and walkways in Dallas, TX — call 214-466-2536.',
    heroSubhead:
      'Decorative stamped concrete that replicates the look of stone, brick, or slate at a fraction of the cost.',
    icon: 'Palette',
    relatedSlugs: ['concrete-patios', 'concrete-driveways', 'concrete-walkways'],
  },
  {
    slug: 'commercial-concrete',
    name: 'Commercial Concrete',
    shortName: 'Commercial',
    headline: 'Commercial Concrete in Dallas, TX',
    metaTitle: 'Commercial Concrete Services Dallas TX',
    metaDescription:
      'Commercial concrete services for parking lots, sidewalks, and building foundations in Dallas, TX — call 214-466-2536.',
    heroSubhead:
      'Heavy-duty commercial concrete solutions for businesses, parking structures, and industrial facilities.',
    icon: 'Warehouse',
    relatedSlugs: ['concrete-foundations', 'concrete-driveways', 'retaining-walls'],
  },
]
