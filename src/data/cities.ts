export interface City {
  slug: string
  name: string
  county: string
  metaTitle: string
  metaDescription: string
  headline: string
  subhead: string
  landmarks: string[]
  neighborhoods: string[]
  intro: string
}

export const cities: City[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Dallas TX',
    metaDescription:
      'Professional concrete contractor serving Dallas, TX for driveways, patios, foundations, and more — call 214-466-2536.',
    headline: 'Concrete Contractor in Dallas, TX',
    subhead: 'Full-service concrete work for homeowners and businesses across Dallas.',
    landmarks: ['White Rock Lake', 'Deep Ellum', 'Uptown Dallas', 'Bishop Arts District'],
    neighborhoods: ['Oak Cliff', 'Lake Highlands', 'Preston Hollow', 'North Dallas', 'East Dallas'],
    intro:
      'Dallas is a city of diverse neighborhoods, from the tree-lined streets of Preston Hollow to the eclectic energy of Deep Ellum and Bishop Arts. Whether you live near White Rock Lake or in the growing communities of North Dallas, our concrete crews deliver quality driveways, patios, and foundations built to handle the expansive clay soils and extreme heat that define this region.',
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Frisco TX',
    metaDescription:
      'Trusted concrete contractor in Frisco, TX for driveways, patios, walkways, and foundations — call 214-466-2536.',
    headline: 'Concrete Contractor in Frisco, TX',
    subhead: 'Serving one of the fastest-growing cities in Texas with expert concrete services.',
    landmarks: ['PGA of America HQ', 'Toyota Stadium', 'Frisco Square', 'Stonebriar Centre'],
    neighborhoods: ['Starwood', 'Phillips Creek Ranch', 'Edgewood', 'Richwoods', 'Westfalls Village'],
    intro:
      'Frisco has grown from a small railroad town into one of the most sought-after suburbs in the Dallas–Fort Worth metroplex, home to PGA of America headquarters and Toyota Stadium. From new-build driveways in Phillips Creek Ranch to patio additions in Starwood, our crews handle concrete projects across Frisco with the precision and durability this fast-growing community demands.',
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor McKinney TX',
    metaDescription:
      'Reliable concrete services in McKinney, TX including driveways, patios, and foundations — call 214-466-2536.',
    headline: 'Concrete Contractor in McKinney, TX',
    subhead: 'Quality concrete work for McKinney homeowners and commercial properties.',
    landmarks: ['Historic Downtown McKinney', 'Heard Natural Science Museum', 'Craig Ranch', 'Towne Lake'],
    neighborhoods: ['Tucker Hill', 'Adriatica Village', 'Stonebridge Ranch', 'Eldorado', 'West Ridge'],
    intro:
      'McKinney blends small-town charm with rapid suburban growth, from the brick-lined streets of Historic Downtown to the master-planned communities of Stonebridge Ranch and Craig Ranch. Our concrete team serves McKinney homeowners with everything from driveway replacements near Tucker Hill to new patio installations along the Towne Lake corridor, building surfaces that hold up to North Texas weather year after year.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Plano TX',
    metaDescription:
      'Expert concrete contractor serving Plano, TX for residential and commercial projects — call 214-466-2536.',
    headline: 'Concrete Contractor in Plano, TX',
    subhead: 'Dependable concrete services for Plano homes and businesses.',
    landmarks: ['Legacy West', 'Arbor Hills Nature Preserve', 'Shops at Willow Bend', 'Oak Point Park'],
    neighborhoods: ['Willow Bend', 'West Plano', 'East Plano', 'Haggard Estates', 'Spring Creek'],
    intro:
      'Plano is a thriving city that combines corporate hubs like Legacy West with family-friendly neighborhoods and scenic preserves like Arbor Hills. Whether you need a new driveway in Willow Bend, a stamped patio near Shops at Willow Bend, or commercial flatwork in the Legacy corridor, our crews deliver concrete work that meets the high standards Plano homeowners and businesses expect.',
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Allen TX',
    metaDescription:
      'Professional concrete services in Allen, TX for driveways, patios, walkways, and more — call 214-466-2536.',
    headline: 'Concrete Contractor in Allen, TX',
    subhead: 'Concrete driveways, patios, and more for Allen homeowners.',
    landmarks: ['Allen Premium Outlets', 'Watters Creek', 'Allen Event Center', 'Celebration Park'],
    neighborhoods: ['Twin Creeks', 'Stacy Ridge', 'Bethany Ridge', 'Ridgeview', 'Montgomery Ridge'],
    intro:
      'Allen offers a strong blend of shopping destinations like Allen Premium Outlets and Watters Creek with well-established residential communities. From driveway pours in Twin Creeks to walkway installations near Celebration Park, our team provides Allen homeowners with concrete solutions that are built to last in the North Texas climate.',
  },
  {
    slug: 'prosper',
    name: 'Prosper',
    county: 'Collin & Denton Counties',
    metaTitle: 'Concrete Contractor Prosper TX',
    metaDescription:
      'Concrete contractor serving Prosper, TX — driveways, patios, foundations, and retaining walls — call 214-466-2536.',
    headline: 'Concrete Contractor in Prosper, TX',
    subhead: 'Expert concrete services for Prosper\'s booming new-construction and established neighborhoods.',
    landmarks: ['Prosper Town Hall', 'Frontier Park', 'US 380 Corridor', 'Windsong Ranch Amenity Center'],
    neighborhoods: ['Windsong Ranch', 'Whitley Place', 'Gentle Creek', 'Lakes of La Cima', 'Star Trail'],
    intro:
      'Prosper is one of the fastest-growing towns in the Dallas–Fort Worth area, with master-planned communities like Windsong Ranch and Star Trail drawing families from across the region. Whether you are pouring a new driveway for a custom-built home in Whitley Place or adding a patio in Gentle Creek, our concrete crews understand the soil conditions and building standards that Prosper projects require.',
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant County',
    metaTitle: 'Concrete Contractor Southlake TX',
    metaDescription:
      'Premium concrete services in Southlake, TX for driveways, patios, and decorative work — call 214-466-2536.',
    headline: 'Concrete Contractor in Southlake, TX',
    subhead: 'High-quality concrete craftsmanship for Southlake\'s premier residential properties.',
    landmarks: ['Southlake Town Square', 'Bob Jones Nature Center', 'Carroll ISD Stadium', 'Gateway Church'],
    neighborhoods: ['Timarron', 'Clariden Ranch', 'Stratfort Parc', 'Carillon', 'Stone Lakes'],
    intro:
      'Southlake is known for its upscale neighborhoods, top-rated schools, and the bustling Southlake Town Square. Homeowners in communities like Timarron, Clariden Ranch, and Carillon expect a higher standard of finish — and our concrete team delivers with precision pours, decorative stamped options, and durable surfaces that complement the character of this premier Tarrant County city.',
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton County',
    metaTitle: 'Concrete Contractor Flower Mound TX',
    metaDescription:
      'Trusted concrete contractor in Flower Mound, TX for driveways, patios, and foundations — call 214-466-2536.',
    headline: 'Concrete Contractor in Flower Mound, TX',
    subhead: 'Reliable concrete work for Flower Mound families and businesses.',
    landmarks: ['Grapevine Lake', 'Flower Mound landmark mound', 'The Lakeside', 'Marcus High School area'],
    neighborhoods: ['Wellington', 'Bridlewood', 'Forest Vista', 'Waketon Estates', 'Canyon Falls'],
    intro:
      'Flower Mound sits along the shores of Grapevine Lake and is named for the prominent wildflower-covered mound at its center. From established neighborhoods like Wellington and Bridlewood to the newer Canyon Falls community, our concrete team provides driveway installations, patio builds, and foundation work designed to perform in the clay-heavy soils common throughout Denton County.',
  },
  {
    slug: 'celina',
    name: 'Celina',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Celina TX',
    metaDescription:
      'Concrete services in Celina, TX — driveways, patios, walkways, and foundations — call 214-466-2536.',
    headline: 'Concrete Contractor in Celina, TX',
    subhead: 'Concrete solutions for Celina\'s rapidly expanding new-build communities.',
    landmarks: ['Celina Historic Downtown', 'Light Farms Amenity Center', 'Celina ISD Stadium', 'US 380 Corridor'],
    neighborhoods: ['Light Farms', 'Mustang Lakes', 'Green Meadows', 'Crossroads', 'Uptown Celina'],
    intro:
      'Celina is experiencing explosive growth along the US 380 corridor, with communities like Light Farms and Mustang Lakes transforming farmland into thriving neighborhoods. Our crews are active throughout Celina, pouring driveways for new construction, building patios in Green Meadows, and delivering the reliable concrete work that this fast-growing Collin County town needs.',
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall County',
    metaTitle: 'Concrete Contractor Rockwall TX',
    metaDescription:
      'Professional concrete contractor in Rockwall, TX for driveways, patios, and lakefront properties — call 214-466-2536.',
    headline: 'Concrete Contractor in Rockwall, TX',
    subhead: 'Quality concrete for Rockwall homes, businesses, and lakefront properties.',
    landmarks: ['Lake Ray Hubbard', 'Rockwall Harbor', 'Historic Rockwall Square', 'The Heath Golf & Yacht Club'],
    neighborhoods: ['Heath', 'Chandler Estates', 'Lake Shore', 'Ridge Road Estates', 'Quail Run'],
    intro:
      'Rockwall sits on the western shore of Lake Ray Hubbard and is the county seat of the smallest county in Texas. From lakefront properties in Heath to family homes near Historic Rockwall Square, our concrete team serves this tight-knit community with driveways, patios, walkways, and foundation work built to withstand the moisture fluctuations that come with lakeside living.',
  },
]
