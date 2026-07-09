import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import {
  Car,
  Sofa,
  Footprints,
  Building2,
  Layers,
  Palette,
  Warehouse,
  Grid3x3,
  Waves,
  Wrench,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import { getImagesByCategory } from '@/data/images'
import { isRedirectedServiceCityCombo } from '@/data/redirects'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import FaqAccordion from '@/components/ui/FaqAccordion'
import Button from '@/components/ui/Button'
import ServiceSchema from '@/components/seo/ServiceSchema'

const iconMap: Record<string, LucideIcon> = {
  Car, Sofa, Footprints, Building2, Layers, Palette, Warehouse, Grid3x3, Waves, Wrench,
}

const serviceImageCategory: Record<string, 'driveway' | 'patio' | 'walkway' | 'foundation' | 'commercial' | 'flooring' | 'crew'> = {
  'concrete-driveways': 'driveway',
  'concrete-patios': 'patio',
  'concrete-walkways': 'walkway',
  'concrete-foundations': 'foundation',
  'retaining-walls': 'foundation',
  'stamped-concrete': 'patio',
  'commercial-concrete': 'commercial',
  'concrete-flooring': 'flooring',
  'concrete-pool-decks': 'patio',
  'concrete-repair-resurfacing': 'driveway',
}

// Specific sub-services under each service — captures long-tail searches
// (e.g. "concrete apron replacement Dallas") and shows the full scope of work.
const serviceScope: Record<string, string[]> = {
  'concrete-driveways': [
    'New concrete driveway installation',
    'Full driveway replacement',
    'Driveway widening & extensions',
    'Concrete apron & street transitions',
    'Circular & side-entry driveways',
    'Exposed aggregate & decorative finishes',
    'Driveway removal & haul-off',
  ],
  'concrete-patios': [
    'New concrete patio installation',
    'Patio extensions & expansions',
    'Multi-level patio construction',
    'Stamped & colored patio finishes',
    'Covered patio & pergola slabs',
    'Outdoor kitchen & fire-pit pads',
    'Patio drainage grading',
  ],
  'concrete-walkways': [
    'Front entry walkways',
    'Concrete sidewalks & public walks',
    'ADA-compliant walkways & ramps',
    'Garden & side-yard paths',
    'Concrete steps & landings',
    'Broom & decorative finishes',
    'Walkway repair & replacement',
  ],
  'concrete-foundations': [
    'Slab-on-grade foundations',
    'Pier & beam foundations',
    'Room addition foundations',
    'Detached garage & shop slabs',
    'Grade beams & footings',
    'Foundation drainage & moisture prep',
    'Engineered new-construction slabs',
  ],
  'retaining-walls': [
    'Poured concrete retaining walls',
    'Concrete block retaining walls',
    'Tiered & terraced walls',
    'Engineered structural walls',
    'Garden & landscape walls',
    'Wall drainage & weep systems',
    'Erosion-control walls',
  ],
  'stamped-concrete': [
    'Stamped concrete patios',
    'Stamped driveways & walkways',
    'Stamped pool decks',
    'Decorative concrete overlays',
    'Integral & surface color',
    'Border & banding accents',
    'Sealing & resealing',
  ],
  'commercial-concrete': [
    'Commercial slabs & flatwork',
    'Parking lots & drive lanes',
    'ADA parking, ramps & sidewalks',
    'Loading docks & approaches',
    'Building pads & foundations',
    'Curbs, gutters & wheel stops',
    'Concrete repair & replacement',
  ],
  'concrete-flooring': [
    'Epoxy & polyaspartic coatings',
    'Polished concrete floors',
    'Stained & dyed concrete',
    'Garage floor coatings',
    'Warehouse & industrial floors',
    'Densifying & sealing',
    'Moisture testing & mitigation',
  ],
  'concrete-pool-decks': [
    'New pool deck construction',
    'Pool deck resurfacing',
    'Cool-deck spray textures',
    'Stamped & decorative pool decks',
    'Slip-resistant finishes',
    'Coping integration',
    'Deck expansion & repair',
  ],
  'concrete-repair-resurfacing': [
    'Concrete crack repair',
    'Spall & surface patching',
    'Slab leveling (foam injection)',
    'Concrete overlays & resurfacing',
    'Driveway & patio restoration',
    'Garage & commercial floor repair',
    'Sealing & protective coatings',
  ],
}

const serviceContent: Record<
  string,
  {
    overviewHeading?: string
    overview: ReactNode[]
    benefits: { title: string; desc: string }[]
    process: { step: string; desc: string }[]
    materials?: { title: string; desc: string }[]
    pricingFactors?: { title: string; desc: string }[]
    faqs: { question: string; answer: string }[]
  }
> = {
  'concrete-driveways': {
    overview: [
      'Looking for concrete driveway installation in Dallas, TX? A concrete driveway is one of the most important surfaces on your property. It handles the weight of your vehicles every day, endures the intense Dallas heat, and sets the first impression for anyone who visits your home. A properly poured driveway resists cracking, handles expansion and contraction through seasonal temperature swings, and maintains a clean appearance for years.',
      'At Dallas Concrete Pros, we install concrete driveways throughout Dallas and the surrounding cities with attention to subgrade preparation, proper thickness, reinforcement, and control joints. Whether you need a full driveway replacement or a new pour for a custom home, we deliver crack-resistant surfaces with smooth apron transitions and durable finishes.',
    ],
    benefits: [
      { title: 'Handles Heavy Vehicle Loads', desc: 'Engineered thickness and reinforcement to support cars, trucks, and trailers without cracking.' },
      { title: 'Crack-Resistant Finishes', desc: 'Proper control joints and curing practices that minimize cracking in North Texas heat.' },
      { title: 'Smooth Apron Transitions', desc: 'Clean transitions from street to driveway for a polished curb appeal.' },
      { title: 'Built for Local Weather', desc: 'Concrete mixes and techniques selected to perform through extreme heat and freeze-thaw cycles.' },
    ],
    process: [
      { step: 'Site Preparation', desc: 'We excavate the area, compact the subgrade, and install forms to ensure a level, stable base for the pour.' },
      { step: 'Reinforcement & Pour', desc: 'Steel reinforcement is placed, and concrete is poured to the correct thickness with control joints cut at proper intervals.' },
      { step: 'Finishing & Curing', desc: 'The surface is finished to your chosen texture, then sealed with curing compound to develop maximum strength.' },
      { step: 'Cleanup & Walkthrough', desc: 'Forms are removed, the site is cleaned up, and we walk you through care instructions.' },
    ],
    faqs: [
      { question: 'How thick should a residential concrete driveway be?', answer: 'Most residential driveways are poured at 4 inches thick, though we recommend 5–6 inches for areas that will support heavier vehicles like trucks or RVs.' },
      { question: 'How long before I can drive on a new concrete driveway?', answer: 'We recommend staying off the surface for at least 7 days. Full curing takes about 28 days, though the driveway will be strong enough for normal use well before that.' },
      { question: 'Can you replace just part of my driveway?', answer: 'In some cases, yes. If only a section is damaged, we can remove and repour that area. We will evaluate whether a partial or full replacement makes more sense during your estimate.' },
      { question: 'Do you offer decorative driveway finishes?', answer: 'Yes, we offer broom finish, exposed aggregate, and stamped concrete options for driveways. See our stamped concrete page for more on decorative options.' },
    ],
  },
  'concrete-patios': {
    overview: [
      'A well-built concrete patio extends your living space outdoors, creating a functional area for cooking, dining, entertaining, and relaxing. In the Dallas area, where the outdoor season stretches most of the year, a quality patio is one of the best investments you can make in your home.',
      'Our team designs and pours concrete patios with proper drainage slope, expansion joints, and finishes that hold up to UV exposure, rain, and heavy furniture. Whether you want a simple slab, a stamped design, or a multi-level patio layout, we build surfaces that look great and perform for years.',
    ],
    benefits: [
      { title: 'Extended Outdoor Living', desc: 'A durable surface for furniture, grills, and gatherings that lasts far longer than wood decking.' },
      { title: 'Proper Drainage Slope', desc: 'Graded to direct water away from your foundation and prevent pooling.' },
      { title: 'Expansion Joint Planning', desc: 'Strategic joint placement to accommodate natural concrete movement without surface cracking.' },
      { title: 'Multiple Finish Options', desc: 'Choose from broom finish, stamped patterns, colored concrete, or exposed aggregate.' },
    ],
    process: [
      { step: 'Design & Layout', desc: 'We discuss your goals, measure the area, and plan the patio shape, size, and finish.' },
      { step: 'Ground Preparation', desc: 'The site is excavated, graded for drainage, and compacted to create a solid base.' },
      { step: 'Pour & Finish', desc: 'Concrete is poured, leveled, and finished to your selected style with joints cut at the right spacing.' },
      { step: 'Seal & Protect', desc: 'A curing and sealing compound is applied to strengthen the surface and enhance appearance.' },
    ],
    faqs: [
      { question: 'How much does a concrete patio cost in Dallas?', answer: 'Patio costs depend on size, thickness, and finish. We provide free estimates so you get an accurate price based on your specific project.' },
      { question: 'Can you pour a patio under a covered area?', answer: 'Yes, we pour patios under pergolas, patio covers, and other structures. Drainage planning is adjusted based on the roof coverage.' },
      { question: 'How do I maintain my concrete patio?', answer: 'Regular sweeping and occasional pressure washing keep it looking great. We recommend resealing every 2–3 years for stamped or colored finishes.' },
      { question: 'Will a concrete patio crack over time?', answer: 'Control joints are designed to manage where cracking occurs. With proper installation and curing, cracking is minimized, though minor hairline cracks can occur naturally.' },
    ],
  },
  'concrete-walkways': {
    overview: [
      'Concrete walkways and sidewalks provide safe, durable paths connecting your driveway, front door, patio, and other areas of your property. A well-designed walkway eliminates trip hazards, improves accessibility, and adds a clean, finished look to your landscape. Whether you need a concrete sidewalk along your property frontage or a private walkway through your yard, the right concrete surface makes a difference.',
      'Dallas Concrete Pros installs concrete walkways and sidewalks with slip-resistant finishes, ADA-compliant dimensions where needed, and proper grading to prevent water pooling. We handle everything from simple front entry walks and public-facing concrete sidewalks to winding garden paths and side-yard connections throughout Dallas.',
    ],
    benefits: [
      { title: 'ADA-Compliant Options', desc: 'Walkways built to accessibility standards with proper width, slope, and non-slip surfaces.' },
      { title: 'Slip-Resistant Finishes', desc: 'Textured broom finishes that provide traction in rain or morning dew.' },
      { title: 'Trip Hazard Prevention', desc: 'Level surfaces and smooth transitions that eliminate uneven steps and raised edges.' },
      { title: 'Curb-to-Door Flow', desc: 'Clean pathways that connect your property from the curb to the front door seamlessly.' },
    ],
    process: [
      { step: 'Path Planning', desc: 'We map out the walkway route, width, and any curves or steps needed for your property.' },
      { step: 'Excavation & Forming', desc: 'The path is excavated, formed, and prepped with compacted base material.' },
      { step: 'Pour & Texture', desc: 'Concrete is poured and finished with a slip-resistant broom texture or your chosen decorative finish.' },
    ],
    faqs: [
      { question: 'How wide should a concrete walkway be?', answer: 'Standard walkways are 3–4 feet wide. For ADA compliance or high-traffic areas, we recommend at least 4 feet.' },
      { question: 'Can you match my walkway to my driveway?', answer: 'Yes, we can match the color, finish, and style of your existing concrete for a cohesive look.' },
      { question: 'How long does a walkway installation take?', answer: 'Most residential walkways are completed in 1–2 days, depending on length and complexity.' },
      { question: 'Do walkways need expansion joints?', answer: 'Yes, control joints are placed at regular intervals to manage natural concrete movement and prevent random cracking.' },
    ],
  },
  'concrete-foundations': {
    overview: [
      'A solid foundation is the most critical structural element of any building. In the Dallas area, expansive clay soils create unique challenges that require proper engineering, drainage planning, and concrete techniques to prevent shifting and settling over time.',
      'Dallas Concrete Pros pours residential and commercial foundations built for North Texas soil conditions. Whether you need a slab-on-grade foundation for a new home, a pier and beam foundation, or a commercial building pad, we deliver structurally sound concrete work that supports your investment for decades.',
    ],
    benefits: [
      { title: 'Engineered for Local Soil', desc: 'Foundation designs that account for the expansive clay soils common throughout the Dallas–Fort Worth area.' },
      { title: 'Pier and Beam or Slab', desc: 'We install both foundation types based on soil reports and structural requirements.' },
      { title: 'Drainage Integration', desc: 'Proper grading and moisture management around the foundation to reduce soil movement.' },
      { title: 'Code-Compliant Construction', desc: 'All foundation work meets local building codes and inspection requirements.' },
    ],
    process: [
      { step: 'Site Evaluation', desc: 'We review soil conditions, grade, and drainage to determine the right foundation approach.' },
      { step: 'Excavation & Forming', desc: 'The site is excavated to specification with forms and reinforcement placed per engineering plans.' },
      { step: 'Pour & Inspection', desc: 'Concrete is poured in coordination with required inspections to ensure code compliance.' },
      { step: 'Curing & Backfill', desc: 'The foundation cures under proper conditions before backfill and site cleanup.' },
    ],
    faqs: [
      { question: 'What type of foundation is best for Dallas homes?', answer: 'Most Dallas homes use slab-on-grade foundations, though pier and beam foundations are common in certain areas. A soil report helps determine the best approach for your lot.' },
      { question: 'How long does a foundation pour take?', answer: 'A typical residential foundation pour takes 1 day, with several days of preparation before and curing time after.' },
      { question: 'Do you handle foundation repairs?', answer: 'We specialize in new foundation construction. For foundation repair and leveling, we can recommend trusted specialists in the Dallas area.' },
      { question: 'Why do Dallas foundations crack?', answer: 'The expansive clay soils in Dallas shrink and swell with moisture changes, putting stress on foundations. Proper drainage and soil moisture management help prevent movement.' },
    ],
  },
  'retaining-walls': {
    overview: [
      'Retaining walls manage soil pressure on sloped or uneven properties, preventing erosion and creating usable flat areas in your landscape. In the Dallas area, retaining walls are commonly used to terrace yards, support driveways, and protect foundations from soil movement.',
      'Our team builds concrete retaining walls with proper drainage behind the wall, engineered footings, and reinforcement designed to handle the lateral soil pressure your site requires. From small garden walls to large structural walls, we build retaining structures that perform and look professional.',
    ],
    benefits: [
      { title: 'Soil Pressure Management', desc: 'Engineered to withstand the lateral forces of retained soil without leaning or failing.' },
      { title: 'Built-In Drainage', desc: 'Weep holes and gravel backfill behind the wall prevent hydrostatic pressure buildup.' },
      { title: 'Tiered Wall Options', desc: 'Multi-level walls for steep slopes that create terraced, usable yard space.' },
      { title: 'Erosion Prevention', desc: 'Stops soil washout on sloped properties and protects adjacent structures.' },
    ],
    process: [
      { step: 'Site Assessment', desc: 'We evaluate the slope, soil conditions, and wall height requirements to design the right solution.' },
      { step: 'Footing & Drainage', desc: 'A reinforced footing is poured and drainage materials are installed behind the wall location.' },
      { step: 'Wall Construction', desc: 'The wall is formed, reinforced, and poured or built with block, depending on the design.' },
      { step: 'Backfill & Grading', desc: 'Gravel backfill is placed behind the wall and the surrounding grade is finished for proper drainage.' },
    ],
    faqs: [
      { question: 'How tall can a retaining wall be?', answer: 'Walls under 4 feet are straightforward. Taller walls typically require engineering and may need permits. We handle both residential and engineered wall projects.' },
      { question: 'Do retaining walls need drainage?', answer: 'Yes, drainage behind the wall is essential. Without it, water pressure builds up and can cause the wall to lean or fail over time.' },
      { question: 'What material is best for a retaining wall?', answer: 'Poured concrete and concrete block are the most durable options. The best choice depends on the wall height, soil conditions, and aesthetic preferences.' },
      { question: 'How long does a retaining wall last?', answer: 'A properly built concrete retaining wall with good drainage can last 50 years or more.' },
    ],
  },
  'stamped-concrete': {
    overview: [
      'Stamped concrete replicates the appearance of natural stone, brick, slate, or other materials at a fraction of the cost. Using pattern stamps and integral or surface-applied color, we create surfaces that look like premium materials while offering the strength and low maintenance of concrete.',
      'Dallas Concrete Pros installs stamped concrete for patios, driveways, walkways, pool decks, and more throughout the Dallas area. We offer a wide selection of patterns and colors, and we apply UV-stable color hardeners and sealers to protect the finish from the intense Texas sun.',
    ],
    benefits: [
      { title: 'Premium Look, Concrete Price', desc: 'Get the look of natural stone or brick without the material and labor costs of individual pavers.' },
      { title: 'UV-Stable Color', desc: 'Color hardeners and sealers that resist fading from constant sun exposure in North Texas.' },
      { title: 'Pattern Variety', desc: 'Choose from dozens of patterns including flagstone, ashlar, brick, wood plank, and more.' },
      { title: 'Sealer Protection', desc: 'Surface sealers protect the color and texture while adding a subtle sheen.' },
    ],
    process: [
      { step: 'Color & Pattern Selection', desc: 'You choose from our pattern and color samples to match your home and landscape style.' },
      { step: 'Base Preparation', desc: 'The area is excavated, compacted, and formed just like any concrete pour.' },
      { step: 'Pour, Color & Stamp', desc: 'Concrete is poured with integral color, then stamped with your chosen pattern before it sets.' },
      { step: 'Detail & Seal', desc: 'Release agent is applied, details are touched up, and a protective sealer is rolled on after curing.' },
    ],
    faqs: [
      { question: 'How long does stamped concrete last?', answer: 'Stamped concrete lasts as long as regular concrete — 25 years or more. The color and pattern can be refreshed with resealing every 2–3 years.' },
      { question: 'Is stamped concrete slippery?', answer: 'The texture from the stamp pattern provides traction, and we can add a non-slip additive to the sealer for pool decks and wet areas.' },
      { question: 'Can you stamp an existing concrete surface?', answer: 'Stamping must be done on fresh concrete. For existing surfaces, we offer concrete overlay options that can be stamped or textured.' },
      { question: 'What is the most popular stamped concrete pattern?', answer: 'Ashlar slate and flagstone patterns are the most popular in the Dallas area. We bring samples so you can see how each pattern looks with different colors.' },
    ],
  },
  'concrete-flooring': {
    overviewHeading: 'Concrete Flooring Services in Dallas, TX',
    overview: [
      'Searching for concrete flooring contractors who actually understand how a floor will be used? Dallas Concrete Pros installs, polishes, and coats concrete floors for garages, showrooms, restaurants, and warehouses throughout Dallas and the surrounding suburbs. As concrete floor experts, we handle everything from a single-car garage coating to a 20,000-square-foot warehouse floor, matching the right system to the traffic, chemicals, and appearance the space actually needs.',
      <>
        North Texas presents its own challenges for concrete flooring. The
        expansive clay soils common throughout Dallas County can shift slabs
        slightly over time, and existing floors sometimes need crack repair
        or moisture mitigation before a new coating goes down — work we
        handle directly, or through our{' '}
        <Link href="/services/concrete-repair-resurfacing" className="text-brand-orange hover:underline">
          concrete repair and resurfacing
        </Link>{' '}
        services if the slab needs more extensive attention. Dallas summers
        also mean coatings have to cure and bond in triple-digit heat and
        high humidity, which is why we choose formulations rated for those
        conditions instead of a one-size-fits-all product.
      </>,
      <>
        We see the same handful of projects again and again: home garage
        floors in North Dallas and Preston Hollow that need an epoxy or
        polyaspartic coating to resist tire tracking and hot asphalt
        residue, retail and restaurant buildouts that want a polished or
        stained look, and warehouse and light-industrial floors across the
        DFW metroplex that need a durable, dust-free surface built for
        forklift traffic — the kind of heavy-duty work we also cover under
        our{' '}
        <Link href="/services/commercial-concrete" className="text-brand-orange hover:underline">
          commercial concrete
        </Link>{' '}
        services.
      </>,
    ],
    benefits: [
      { title: 'Extreme Durability', desc: 'Concrete floors resist scratches, impacts, and heavy loads that would damage tile, wood, or vinyl.' },
      { title: 'Low Maintenance', desc: 'No waxing, no grout to clean — just sweep and mop for a surface that stays looking clean.' },
      { title: 'Chemical Resistant Coatings', desc: 'Epoxy and polyaspartic coatings resist oil, grease, and chemical spills common in garages and shops.' },
      { title: 'Custom Appearance', desc: 'Polished concrete, acid stains, metallic epoxy, and color flake systems offer a wide range of looks.' },
    ],
    process: [
      { step: 'Surface Assessment', desc: 'We evaluate your existing slab for cracks, moisture levels, and surface condition to determine the best treatment.' },
      { step: 'Grinding & Preparation', desc: 'Diamond grinders remove old coatings and open the concrete pores for proper adhesion of new finishes.' },
      { step: 'Application', desc: 'Your chosen system — polish, epoxy, stain, or coating — is applied in layers with proper cure time between coats, timed around Dallas heat and humidity.' },
      { step: 'Final Seal', desc: 'A topcoat sealer is applied for additional protection, gloss control, and long-term performance.' },
    ],
    materials: [
      { title: 'Epoxy Coatings', desc: 'Chemical- and oil-resistant coatings ideal for garages and industrial floors, with UV-stable topcoats available for areas that get direct sun through garage doors or bay openings.' },
      { title: 'Polyaspartic Coatings', desc: 'Cure faster than epoxy and resist UV yellowing better — a strong fit for Dallas heat and humidity, where standard epoxy can amine-blush during application.' },
      { title: 'Polished Concrete', desc: 'Diamond-ground to a satin or high-gloss sheen for retail, showroom, and warehouse floors that need a durable, low-maintenance surface with no coating to wear through.' },
      { title: 'Stained & Dyed Concrete', desc: 'Acid stains and water-based dyes add rich, variegated color to garage floors and interior slabs without the thickness of a full coating system.' },
      { title: 'Densifiers & Sealers', desc: 'Lithium-silicate densifiers harden and dust-proof warehouse floors, while penetrating sealers protect exposed or stained concrete from moisture and staining.' },
    ],
    pricingFactors: [
      { title: 'Slab Condition', desc: 'Cracks, spalling, or old adhesive residue on an existing floor add prep time and cost before any coating or polish can go down.' },
      { title: 'Moisture Testing', desc: 'Slabs poured over North Texas clay soil sometimes need a moisture vapor test — and a mitigating primer — before certain coatings will bond properly.' },
      { title: 'Coating System', desc: 'Basic epoxy costs less than polyaspartic, metallic epoxy, or a fully polished floor with multiple grinding passes.' },
      { title: 'Surface Preparation Method', desc: 'Diamond grinding, shot blasting, or acid etching are priced differently depending on the existing surface and the finish you want.' },
      { title: 'Square Footage & Access', desc: 'Larger commercial floors typically cost less per square foot than small residential jobs, though tight access or off-hours scheduling can add cost.' },
    ],
    faqs: [
      { question: 'How long does it take to install a concrete floor coating?', answer: 'Most residential garage floors take 2–3 days including prep, application, and cure time. Commercial projects vary based on square footage.' },
      { question: 'Can you polish an existing concrete slab?', answer: 'Yes, most existing slabs can be polished. We grind the surface in progressive steps to achieve the level of sheen you want, from matte to high-gloss.' },
      { question: 'Is epoxy flooring slippery?', answer: 'Standard epoxy can be slippery when wet. We add anti-slip additives to the topcoat for garages, commercial kitchens, and other areas where traction matters.' },
      { question: 'How long do concrete floor coatings last?', answer: 'Quality epoxy and polyaspartic coatings last 10–20 years with normal use. Polished concrete is virtually permanent and only needs periodic re-densification.' },
      { question: 'Do Dallas concrete floors need moisture testing before coating?', answer: 'Many do. Because North Texas clay soils can drive moisture up through a slab, we often run a moisture vapor test before installing epoxy or polyaspartic coatings, and use a moisture-mitigating primer if levels come back elevated. Skipping this step is one of the most common causes of coating failure.' },
      { question: 'Why hire concrete floor experts instead of a general contractor?', answer: 'Concrete floor experts understand slab moisture, surface profile requirements, and how Dallas heat and humidity affect coating cure times — details that determine whether a floor lasts 15 years or peels within one summer. Our crews specialize in flooring specifically, not just general concrete work.' },
    ],
  },
  'concrete-pool-decks': {
    overview: [
      'A concrete pool deck needs to balance safety, comfort, and style. The surface must be slip-resistant when wet, cool enough to walk on barefoot in the Dallas summer heat, and attractive enough to complement your outdoor living space. Concrete delivers all three when properly installed and finished.',
      'Dallas Concrete Pros builds and resurfaces concrete pool decks with cool-deck finishes, stamped patterns, and textured coatings designed specifically for pool environments. We handle new pool deck construction, expansions, and resurfacing of worn or damaged existing decks throughout the Dallas area.',
    ],
    benefits: [
      { title: 'Slip-Resistant Surfaces', desc: 'Textured finishes and non-slip additives that provide traction on wet surfaces around the pool.' },
      { title: 'Cool-Deck Technology', desc: 'Light-colored coatings and textures that stay cooler underfoot than standard concrete in direct sun.' },
      { title: 'Seamless Coping Integration', desc: 'Clean transitions between the pool coping and deck surface for a polished, professional look.' },
      { title: 'Resurfacing Options', desc: 'Overlay and resurfacing systems that renew worn pool decks without full demolition.' },
    ],
    process: [
      { step: 'Design & Layout', desc: 'We plan the deck shape, drainage slope, and finish around your pool equipment, landscaping, and outdoor living areas.' },
      { step: 'Base Preparation', desc: 'The area is excavated, compacted, and formed with proper slope away from the pool and toward drainage points.' },
      { step: 'Pour & Finish', desc: 'Concrete is poured and finished with your chosen texture — broom finish, stamped pattern, or spray-texture cool deck.' },
      { step: 'Seal & Protect', desc: 'A UV-stable sealer is applied to protect the surface from sun, chlorine splash, and pool chemicals.' },
    ],
    faqs: [
      { question: 'What is the best concrete finish for a pool deck?', answer: 'Spray-texture cool deck and stamped concrete are the most popular options in Dallas. Both provide slip resistance and stay cooler than smooth concrete in direct sun.' },
      { question: 'Can you resurface my existing pool deck?', answer: 'Yes, concrete overlays can be applied over existing pool decks to restore appearance and improve safety without tearing out the old surface.' },
      { question: 'How do you handle drainage around the pool?', answer: 'We grade the deck to slope away from the pool and toward landscape drains or yard areas. Proper drainage prevents standing water and keeps the surface safe.' },
      { question: 'How long does a pool deck installation take?', answer: 'A new pool deck typically takes 3–5 days depending on size and finish. Resurfacing projects are usually completed in 2–3 days.' },
    ],
  },
  'concrete-repair-resurfacing': {
    overview: [
      'Cracked, spalling, or uneven concrete does not always need full replacement. Professional repair and resurfacing can restore structural integrity and appearance at a fraction of the cost of a full tear-out and repour. The right approach depends on the type and extent of the damage.',
      'Dallas Concrete Pros provides concrete repair and resurfacing services for driveways, patios, sidewalks, garage floors, and commercial surfaces throughout Dallas. We handle crack filling, slab leveling, spall repair, and full-surface overlays that bring damaged concrete back to service.',
    ],
    benefits: [
      { title: 'Cost-Effective Restoration', desc: 'Repair and resurfacing costs 40–60% less than full removal and replacement.' },
      { title: 'Slab Leveling', desc: 'Polyurethane foam injection raises and levels sunken slabs without excavation.' },
      { title: 'Overlay Systems', desc: 'Thin concrete overlays cover surface damage and provide a fresh, new finish over existing slabs.' },
      { title: 'Extended Surface Life', desc: 'Proper repairs prevent damage from spreading, adding years of life to your existing concrete.' },
    ],
    process: [
      { step: 'Damage Assessment', desc: 'We inspect the surface to determine the type, cause, and extent of damage and recommend the right repair method.' },
      { step: 'Surface Preparation', desc: 'Damaged areas are cleaned, loose material is removed, and the surface is prepped for bonding.' },
      { step: 'Repair Application', desc: 'Cracks are filled, spalls are patched, or overlay material is applied depending on the repair scope.' },
      { step: 'Finish & Seal', desc: 'The repaired surface is finished to match the surrounding concrete and sealed for protection.' },
    ],
    faqs: [
      { question: 'When should I repair vs. replace my concrete?', answer: 'If damage is limited to the surface — hairline cracks, minor spalling, discoloration — repair is usually the right call. If the slab is severely cracked through, heaving, or structurally compromised, replacement is more cost-effective long term.' },
      { question: 'Can you fix a sunken concrete slab?', answer: 'Yes, we use polyurethane foam injection to lift and level sunken slabs. This is faster, cleaner, and less expensive than mud-jacking or replacement.' },
      { question: 'How long do concrete repairs last?', answer: 'Quality repairs using proper bonding agents and materials last 8–15 years or more, depending on the type of repair and traffic on the surface.' },
      { question: 'Can you make repaired concrete match the existing surface?', answer: 'We match the color and texture as closely as possible. For large visible areas, a full overlay provides the most uniform appearance.' },
    ],
  },
  'commercial-concrete': {
    overview: [
      'Commercial concrete projects require heavier specifications, tighter timelines, and attention to liability and accessibility standards. From parking lots and loading docks to building foundations and ADA-compliant sidewalks, commercial work demands a contractor who understands the requirements.',
      'Dallas Concrete Pros handles commercial concrete projects across the Dallas–Fort Worth area. We work with property managers, general contractors, and business owners to deliver heavy-duty concrete surfaces that meet code, minimize business disruption, and hold up to commercial traffic loads.',
    ],
    benefits: [
      { title: 'Heavy-Load Specifications', desc: 'Thicker pours with reinforcement designed for trucks, forklifts, and high-traffic commercial use.' },
      { title: 'ADA-Compliant Surfaces', desc: 'Parking lots, sidewalks, and ramps built to current accessibility requirements.' },
      { title: 'Minimal Business Disruption', desc: 'Phased pours and off-hours scheduling to keep your business operating during construction.' },
      { title: 'Code & Permit Management', desc: 'We handle the permitting process and coordinate inspections for commercial projects.' },
    ],
    process: [
      { step: 'Scope & Planning', desc: 'We review plans, assess the site, and develop a timeline that minimizes disruption to your operations.' },
      { step: 'Permitting & Prep', desc: 'Permits are pulled and the site is excavated, graded, and prepped to specification.' },
      { step: 'Phased Pour', desc: 'Concrete is poured in sections as needed to maintain access and keep operations running.' },
      { step: 'Finishing & Striping', desc: 'Surfaces are finished, cured, and prepared for striping, signage, or other site work.' },
    ],
    faqs: [
      { question: 'Can you pour commercial concrete on weekends or after hours?', answer: 'Yes, we schedule pours around your business operations. Weekend and evening work is available to minimize disruption.' },
      { question: 'How thick does commercial concrete need to be?', answer: 'Commercial slabs typically range from 5–8 inches, depending on the expected loads. Heavy truck areas and loading docks may require thicker pours.' },
      { question: 'Do you handle ADA parking lot requirements?', answer: 'Yes, we pour ADA-compliant parking spaces, access aisles, ramps, and detectable warning surfaces per current standards.' },
      { question: 'Can you work with our general contractor?', answer: 'Absolutely. We regularly work as a subcontractor on commercial projects and coordinate with GCs, engineers, and inspectors.' },
    ],
  },
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `${site.baseUrl}/services/${service.slug}`,
    absoluteTitle: service.slug === 'concrete-flooring',
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const content = serviceContent[service.slug]
  if (!content) notFound()

  const scope = serviceScope[service.slug]
  const related = services.filter((s) => service.relatedSlugs.includes(s.slug))
  const Icon = iconMap[service.icon] ?? Building2
  const category = serviceImageCategory[service.slug]
  const images = category ? getImagesByCategory(category) : []
  const heroImg = images[0]

  return (
    <>
      <ServiceSchema name={service.name} description={service.metaDescription} />

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/#services' },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-8 h-8 text-brand-orange" />
            <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
              {service.headline}
            </h1>
          </div>
          <p className="text-lg text-brand-gray">{service.heroSubhead}</p>
        </div>
      </section>

      {heroImg && (
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 -mt-2">
            <Image
              src={heroImg.src}
              alt={heroImg.alt}
              width={900}
              height={500}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            {content.overviewHeading ?? `What Are ${service.name} in Dallas?`}
          </h2>
          {content.overview.map((p, i) => (
            <p key={i} className="text-brand-gray mb-4 leading-relaxed">
              {p}
            </p>
          ))}
          {scope && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-brand-charcoal mb-4">
                Our {service.name} Services Include:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {scope.map((item) => (
                  <li key={item} className="text-brand-gray flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            Benefits of {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {content.benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal">{b.title}</h3>
                  <p className="text-brand-gray text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            How We Install {service.name}
          </h2>
          <div className="space-y-6">
            {content.process.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal">{step.step}</h3>
                  <p className="text-brand-gray text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.materials && (
        <section className="py-12 bg-brand-gray-light">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
              {service.name} Materials & Finish Options
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.materials.map((m) => (
                <div key={m.title} className="bg-white rounded-lg p-5">
                  <h3 className="font-semibold text-brand-charcoal mb-1">{m.title}</h3>
                  <p className="text-brand-gray text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.pricingFactors && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              What Affects {service.name} Pricing in Dallas?
            </h2>
            <p className="text-brand-gray mb-8">
              Every {service.name.toLowerCase()} project in Dallas is priced around a
              few key factors:
            </p>
            <div className="space-y-5">
              {content.pricingFactors.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">{f.title}</h3>
                    <p className="text-brand-gray text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {service.slug === 'concrete-flooring' && (
              <p className="text-brand-gray text-sm mt-8">
                We install concrete flooring for warehouses and home garages
                throughout{' '}
                <Link href="/services/concrete-flooring/dallas" className="text-brand-orange hover:underline">
                  concrete flooring in Dallas
                </Link>
                , and for retail and office buildouts in the{' '}
                <Link href="/services/concrete-flooring/plano" className="text-brand-orange hover:underline">
                  Plano commercial corridor
                </Link>
                , plus the rest of the Dallas–Fort Worth metroplex.
              </p>
            )}
          </div>
        </section>
      )}

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            Common Questions
          </h2>
          <FaqAccordion faqs={content.faqs} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="block bg-brand-gray-light rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <span className="font-semibold text-brand-charcoal hover:text-brand-orange transition-colors">
                  {r.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Where We Install {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={
                  isRedirectedServiceCityCombo(service.slug, c.slug)
                    ? `/services/${service.slug}`
                    : `/services/${service.slug}/${c.slug}`
                }
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <span className="font-semibold text-brand-charcoal hover:text-brand-orange transition-colors">
                  {service.name} in {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free {service.name} Estimate
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a no-obligation quote on your {service.name.toLowerCase()} project in Dallas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get Free Estimate</Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
