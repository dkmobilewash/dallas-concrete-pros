// Hand-written, genuinely differentiated content for our highest-intent
// service+city combinations. When a combo has an entry here, the combo page
// (src/app/services/[slug]/[city]/page.tsx) renders this unique copy INSTEAD of
// the generic interpolated paragraphs — so these pages are locally specific
// rather than templated duplicates.
//
// Keep every claim factual and general (local soil, growth patterns, climate).
// Do NOT invent specific past projects, review counts, or numbers we can't back up.

export interface ComboContent {
  // Overrides the generic combo meta description when present.
  metaDescription?: string
  // Unique intro paragraphs — replace the three generic paragraphs in the template.
  intro: string[]
  // Locally-specific selling points shown as cards.
  localNotes?: { title: string; desc: string }[]
  // Combo-specific FAQs — render a FAQ accordion (and FAQPage schema) when present.
  faqs?: { question: string; answer: string }[]
}

export const comboContent: Record<string, ComboContent> = {
  // ---------------------------------------------------------------------------
  // CONCRETE DRIVEWAYS
  // ---------------------------------------------------------------------------
  'concrete-driveways/frisco': {
    metaDescription:
      'Concrete driveway installation & replacement in Frisco, TX. Built for new construction and expansive Collin County clay soil. Call 214-466-2536.',
    intro: [
      'Frisco has grown faster than almost any city in Texas, and that growth shapes the driveway work we do here. In newer master-planned communities like Phillips Creek Ranch and Starwood, we pour driveways for custom and production homes that have to meet HOA appearance standards and tie cleanly into finished streetscapes. In the neighborhoods that went up during Frisco’s first big boom in the late 1990s and early 2000s, we’re now replacing original driveways that have reached the end of their service life.',
      'The common thread across both is the soil. Frisco sits on the Blackland Prairie, where expansive clay swells when it rains and shrinks in the summer heat. A driveway poured without proper subgrade compaction, thickness, and control-joint spacing will telegraph that soil movement as cracks within a few years. We prep the base to handle it and reinforce accordingly, which is the difference between a driveway that lasts and one that fails early.',
    ],
    localNotes: [
      {
        title: 'New-Construction Ready',
        desc: 'We coordinate driveway pours with builder timelines and final grade in Frisco’s newer subdivisions, with clean apron transitions to the street.',
      },
      {
        title: 'HOA-Compliant Finishes',
        desc: 'Many Frisco communities have appearance guidelines. We work with broom, exposed-aggregate, and decorative finishes that satisfy HOA requirements.',
      },
      {
        title: 'Engineered for Clay',
        desc: 'Proper subgrade prep, thickness, and reinforcement to handle the expansive Collin County soil that causes early cracking in poorly built driveways.',
      },
    ],
    faqs: [
      {
        question: 'Do I need HOA approval for a driveway replacement in Frisco?',
        answer:
          'Many Frisco master-planned communities require HOA sign-off on visible exterior work, including driveway replacement or a finish change. We can help you understand what documentation your HOA typically needs before we start.',
      },
      {
        question: 'How thick should a driveway be for Frisco’s clay soil?',
        answer:
          'We pour most Frisco residential driveways at 4 inches over a properly compacted base, and step up to 5–6 inches with added reinforcement where heavier vehicles or more active soil call for it. Subgrade prep matters as much as thickness on expansive clay.',
      },
      {
        question: 'Can you match a new driveway to my existing home in Frisco?',
        answer:
          'Yes. We match finish, color, and joint layout to your home and neighborhood so a replacement or extension looks intentional, not patched.',
      },
    ],
  },
  'concrete-driveways/plano': {
    metaDescription:
      'Concrete driveway replacement & installation in Plano, TX. We handle mature-tree root heave and clay-soil cracking. Call 214-466-2536 for a free estimate.',
    intro: [
      'Plano is a mix of well-established neighborhoods and newer corporate-corridor development, and the driveway work reflects that. In West Plano and around Willow Bend, many homes are old enough that the original driveway is cracked, spalling, or lifting — often from mature tree roots and decades of clay-soil movement. Tearing out and repouring is usually the right long-term call once a driveway starts heaving at the joints.',
      'Because so many Plano lots have large, established trees, we pay close attention to root proximity and drainage during a replacement. A driveway poured without accounting for an existing root system will crack in the same places the old one did. We plan the pour — thickness, reinforcement, joint placement, and grade — around the conditions on your specific lot rather than a one-size template.',
    ],
    localNotes: [
      {
        title: 'Established-Neighborhood Tear-Outs',
        desc: 'Clean demolition and haul-off of failed original driveways in older Plano neighborhoods, with minimal disruption to mature landscaping.',
      },
      {
        title: 'Root & Drainage Planning',
        desc: 'We assess mature tree roots and lot drainage before we pour, so a new Plano driveway doesn’t crack in the same spots the old one did.',
      },
      {
        title: 'Clay-Soil Reinforcement',
        desc: 'Proper reinforcement and control joints to manage the expansive Blackland clay that drives cracking across Plano.',
      },
    ],
    faqs: [
      {
        question: 'My Plano driveway is lifting near a tree — repair or replace?',
        answer:
          'If a driveway is heaving or cracked through from root pressure, replacement is usually more cost-effective than repeated patching. We evaluate the root system and drainage during your estimate and recommend the approach that will actually last.',
      },
      {
        question: 'How long does a driveway replacement take in Plano?',
        answer:
          'Most residential driveway replacements are a multi-day job: demolition and haul-off, base prep, the pour, and cure time before you drive on it. We recommend staying off a new driveway for about 7 days.',
      },
      {
        question: 'Will you protect my landscaping during the tear-out?',
        answer:
          'Yes. In established Plano yards we work to protect mature plantings and irrigation, and we clean the site thoroughly when the pour is complete.',
      },
    ],
  },
  'concrete-driveways/mckinney': {
    metaDescription:
      'Concrete driveway installation & replacement in McKinney, TX — from historic downtown homes to Stonebridge Ranch. Call 214-466-2536 for a free estimate.',
    intro: [
      'McKinney spans a wide range of housing, and driveways are no exception. Near Historic Downtown, we work on older homes where the original driveway is narrow, cracked, or was never poured to modern thickness. Out in master-planned communities like Stonebridge Ranch and Craig Ranch, we pour and replace driveways for newer homes that need to meet neighborhood appearance standards.',
      'Like the rest of Collin County, McKinney sits on expansive clay that expands and contracts with the seasons. That movement is the single biggest reason driveways crack here, and it’s why we focus on subgrade compaction, correct thickness, reinforcement, and control-joint spacing on every McKinney pour. Done right, a concrete driveway handles that soil for decades; done cheaply, it starts showing cracks in a couple of years.',
    ],
    localNotes: [
      {
        title: 'Historic & Modern Homes',
        desc: 'From tight lots near Historic Downtown McKinney to newer builds in Stonebridge Ranch, we size and finish each driveway to the property.',
      },
      {
        title: 'Neighborhood Standards',
        desc: 'We work with the finishes and layouts McKinney’s master-planned communities expect, and help with HOA-visible replacements.',
      },
      {
        title: 'Built for Collin County Clay',
        desc: 'Subgrade prep and reinforcement matched to McKinney’s expansive soil to minimize seasonal cracking.',
      },
    ],
    faqs: [
      {
        question: 'Can you widen a narrow driveway on an older McKinney home?',
        answer:
          'Often, yes. Many older McKinney driveways are narrower than today’s vehicles need. We can widen or fully replace them, matching the finish so the result looks original to the home.',
      },
      {
        question: 'What causes driveway cracks in McKinney?',
        answer:
          'The main culprit is expansive Collin County clay that swells and shrinks with moisture. Proper base prep, thickness, reinforcement, and control joints are what keep that movement from cracking the slab.',
      },
      {
        question: 'Do you serve both downtown and the Stonebridge Ranch area?',
        answer:
          'Yes, we install and replace concrete driveways throughout McKinney, from the historic core to the master-planned communities on the north and west sides of the city.',
      },
    ],
  },
  'concrete-driveways/southlake': {
    metaDescription:
      'Custom concrete driveway installation in Southlake, TX — long and circular drives, decorative finishes for luxury homes. Call 214-466-2536.',
    intro: [
      'Southlake’s homes tend to sit on larger lots, and that changes what a driveway project looks like. In neighborhoods like Timarron, Clariden Ranch, and Carillon, we pour longer approach drives, circular and side-entry driveways, and wider parking aprons than a typical suburban lot calls for. At that scale, the finish and the details matter as much as the concrete — the driveway is a major part of the home’s curb appeal.',
      'That’s why a lot of Southlake driveway work involves decorative options: exposed aggregate, banding, or stamped-concrete borders that complement high-end architecture. We build these driveways to hold up to the Tarrant County soil and North Texas heat while delivering the clean, upscale finish these properties are known for. Larger pours also mean careful joint layout and reinforcement so a long run of concrete stays crack-resistant.',
    ],
    localNotes: [
      {
        title: 'Large & Circular Drives',
        desc: 'Long approach drives, circular driveways, and wide aprons sized for Southlake’s larger custom-home lots.',
      },
      {
        title: 'Decorative & Banded Finishes',
        desc: 'Exposed aggregate, borders, and stamped accents that match upscale Southlake architecture — see our stamped concrete work for options.',
      },
      {
        title: 'Engineered for the Span',
        desc: 'Careful joint layout and reinforcement so long, wide driveways stay crack-resistant across the seasons.',
      },
    ],
    faqs: [
      {
        question: 'Do you pour circular and side-entry driveways in Southlake?',
        answer:
          'Yes. Larger Southlake lots often call for circular, side-entry, or extended approach drives, and we design the forms, grade, and joint layout to fit the property and the architecture.',
      },
      {
        question: 'Can you add a decorative border to a plain concrete driveway?',
        answer:
          'We can integrate exposed-aggregate bands, stamped borders, and color accents so a driveway matches the level of finish Southlake homes are built to.',
      },
      {
        question: 'How do you keep a long driveway from cracking?',
        answer:
          'On larger pours, correct control-joint spacing, reinforcement, and subgrade prep do the work. We plan those details around the size of the driveway and the soil on your lot.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // CONCRETE PATIOS
  // ---------------------------------------------------------------------------
  'concrete-patios/frisco': {
    metaDescription:
      'Concrete patio design & installation in Frisco, TX. Backyard patios built for new-construction lots and North Texas outdoor living. Call 214-466-2536.',
    intro: [
      'A lot of Frisco homes are new enough that the backyard is still a blank slate — builder-grade sod and not much else. That’s where most of our Frisco patio work starts: turning an empty new-construction yard into a usable outdoor living space with a properly poured concrete patio. In communities like Richwoods and Phillips Creek Ranch, we design patios that fit the lot, drain away from the foundation, and leave room to grow into an outdoor kitchen or cover later.',
      'Frisco’s long outdoor season makes a patio one of the highest-value additions you can make, but the same expansive clay that affects driveways affects patios. We slope every patio for drainage, place expansion joints to manage soil movement, and finish the surface to stand up to UV, heat, and furniture. Whether you want a simple slab or a stamped design, we build it to perform for years, not just look good on day one.',
    ],
    localNotes: [
      {
        title: 'New-Yard Design',
        desc: 'We turn blank Frisco new-construction backyards into functional patios, planned around future covers, kitchens, or pools.',
      },
      {
        title: 'Drainage Done Right',
        desc: 'Every patio is graded to move water away from the foundation — critical on Frisco’s expansive clay lots.',
      },
      {
        title: 'Finish Options',
        desc: 'Broom, stamped, colored, or exposed-aggregate finishes to match your home and HOA guidelines.',
      },
    ],
    faqs: [
      {
        question: 'Can you build a patio that’s ready for a future cover or kitchen?',
        answer:
          'Yes. We design Frisco patios with the size, thickness, and layout to support a future patio cover, pergola, or outdoor kitchen so you don’t have to redo the slab later.',
      },
      {
        question: 'How do you keep a patio from pushing water toward the house?',
        answer:
          'We grade every patio to slope away from the foundation and toward appropriate drainage. On Frisco’s clay soil, correct drainage also helps limit soil movement around the slab.',
      },
      {
        question: 'What patio finish holds up best in the Frisco heat?',
        answer:
          'Broom and stamped finishes both hold up well; for stamped and colored surfaces we use UV-stable sealers so the color resists fading in the North Texas sun.',
      },
    ],
  },
  'concrete-patios/plano': {
    metaDescription:
      'Concrete patio installation & replacement in Plano, TX. Upgrade established backyards with durable, well-drained patios. Call 214-466-2536.',
    intro: [
      'In Plano, patio projects tend to be upgrades rather than blank-slate builds. Many homes in West Plano and around Willow Bend have mature backyards with an original small slab or a worn patio that no longer fits how the family uses the space. We replace and expand these into larger, better-finished patios that work with the existing landscaping instead of fighting it.',
      'Working in established Plano yards means respecting what’s already there — mature trees, irrigation, and grade that’s settled over decades. We plan drainage carefully so a new patio moves water away from the foundation, and we place expansion joints to handle the Blackland clay that’s under every Plano lot. The result is a patio that looks like it was always part of the home and holds up to years of North Texas weather.',
    ],
    localNotes: [
      {
        title: 'Expand & Replace',
        desc: 'We enlarge or replace dated original slabs in established Plano backyards to fit how you actually use the space.',
      },
      {
        title: 'Works With Mature Yards',
        desc: 'We plan around existing trees, irrigation, and settled grade so the patio integrates cleanly.',
      },
      {
        title: 'Drainage & Joint Planning',
        desc: 'Proper slope and expansion joints to manage Plano’s clay soil and keep water off your foundation.',
      },
    ],
    faqs: [
      {
        question: 'Can you expand my existing Plano patio instead of replacing it?',
        answer:
          'Sometimes, though matching an old slab cleanly can be tricky. We’ll look at the condition and finish of your current patio and recommend whether expanding or fully replacing gives the better long-term result.',
      },
      {
        question: 'Will a new patio affect drainage in my established yard?',
        answer:
          'We design for it. A patio changes how water moves across the yard, so we grade it to protect your foundation and account for existing drainage patterns.',
      },
      {
        question: 'How do I maintain a concrete patio in Plano?',
        answer:
          'Sweeping and occasional pressure washing keep it clean; for stamped or colored patios we recommend resealing every 2–3 years to keep the finish looking sharp.',
      },
    ],
  },
  'concrete-patios/mckinney': {
    metaDescription:
      'Concrete patio design & installation in McKinney, TX. Custom backyard patios for historic and master-planned homes. Call 214-466-2536.',
    intro: [
      'McKinney homeowners want backyards that match the character of the city, and our patio work spans that range. Near Historic Downtown, we build patios that suit older homes and smaller lots. In Stonebridge Ranch, Craig Ranch, and the newer communities along the growth corridor, we pour larger patios designed for entertaining, often with room planned for a future cover or outdoor kitchen.',
      'Whatever the style, the fundamentals are the same in McKinney’s Collin County clay: proper drainage away from the foundation, expansion joints placed to manage soil movement, and a finish chosen to handle UV and heat. We build simple slabs, stamped and colored designs, and multi-level layouts — all engineered to stay flat and crack-resistant through North Texas seasons.',
    ],
    localNotes: [
      {
        title: 'Downtown to Master-Planned',
        desc: 'Patios scaled and finished for everything from historic McKinney lots to large Stonebridge Ranch backyards.',
      },
      {
        title: 'Entertaining Layouts',
        desc: 'Multi-level and oversized patios designed for gatherings, with room for future covers and kitchens.',
      },
      {
        title: 'Clay-Ready Construction',
        desc: 'Drainage and expansion-joint planning matched to McKinney’s expansive soil.',
      },
    ],
    faqs: [
      {
        question: 'Can you build a multi-level patio in McKinney?',
        answer:
          'Yes. Multi-level patios work well on sloped or larger McKinney lots and help define separate areas for dining, seating, or a grill. We plan the grade and drainage across each level.',
      },
      {
        question: 'What’s the best patio finish for a McKinney backyard?',
        answer:
          'It depends on your style and budget. Broom finish is durable and economical; stamped and colored concrete give a higher-end look. We bring options so you can see them against your home.',
      },
      {
        question: 'Do you pour patios under existing covers in McKinney?',
        answer:
          'We do — patios under pergolas, patio covers, and similar structures, adjusting drainage planning for the roof coverage.',
      },
    ],
  },
  'concrete-patios/southlake': {
    metaDescription:
      'Luxury concrete patio installation in Southlake, TX — large multi-level patios and outdoor living spaces with decorative finishes. Call 214-466-2536.',
    intro: [
      'Outdoor living is a big part of the Southlake lifestyle, and the patios we build here reflect that. On the larger lots in Timarron, Clariden Ranch, and Stone Lakes, we pour expansive multi-level patios that anchor full outdoor living areas — space for dining, lounging, a grill or outdoor kitchen, and often a pool deck all tied together. At that scale, layout, grade, and finish quality are everything.',
      'These projects usually call for decorative concrete: stamped patterns, integral color, and clean banding that complement Southlake’s upscale architecture. We build them to hold up to Tarrant County soil movement and the intense Texas sun, using UV-stable sealers so colored and stamped finishes keep their look. The goal is an outdoor space that feels like a true extension of a high-end home, not a plain slab bolted onto the back.',
    ],
    localNotes: [
      {
        title: 'Full Outdoor Living Areas',
        desc: 'Large multi-level patios that tie together dining, lounging, kitchen, and pool-deck zones for Southlake homes.',
      },
      {
        title: 'Decorative Finishes',
        desc: 'Stamped patterns, integral color, and banding designed to match upscale Southlake architecture.',
      },
      {
        title: 'Built to Last',
        desc: 'UV-stable sealers and proper soil-movement planning so a premium patio keeps its finish for years.',
      },
    ],
    faqs: [
      {
        question: 'Can you tie a patio into a pool deck in Southlake?',
        answer:
          'Yes. We regularly design patios that flow into pool decks as one cohesive outdoor living area, with consistent finish, color, and drainage across the whole space.',
      },
      {
        question: 'What decorative options work best for a Southlake patio?',
        answer:
          'Stamped concrete, integral color, exposed aggregate, and banded borders all work well and let us match the finish to your home. We bring samples so you can compare against your architecture.',
      },
      {
        question: 'How do you protect a colored patio from fading in the sun?',
        answer:
          'We use UV-stable color hardeners and sealers rated for the North Texas sun, and recommend periodic resealing to keep stamped and colored finishes vivid.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // STAMPED CONCRETE
  // ---------------------------------------------------------------------------
  'stamped-concrete/frisco': {
    metaDescription:
      'Stamped concrete in Frisco, TX — decorative patios, walkways & pool decks that mimic stone and brick. UV-stable finishes. Call 214-466-2536.',
    intro: [
      'Stamped concrete is popular in Frisco because it delivers a high-end look on the newer homes going up across the city without the cost of natural stone or pavers. We install stamped patios, walkways, and pool decks in communities like Starwood and Phillips Creek Ranch, using patterns — flagstone, ashlar slate, brick, wood plank — that complement current build styles and satisfy HOA appearance standards.',
      'The catch with stamped concrete in North Texas is sun and heat. Color that isn’t protected will fade, and a surface that isn’t sealed correctly won’t hold up. We use UV-stable color hardeners and quality sealers built for the Frisco climate, and we pour over a properly prepped base so the expansive Collin County clay doesn’t crack the decorative surface you paid for.',
    ],
    localNotes: [
      {
        title: 'Premium Look, Practical Cost',
        desc: 'Flagstone, slate, brick, and wood-plank patterns that give Frisco homes an upscale finish for less than natural stone.',
      },
      {
        title: 'UV-Stable Color',
        desc: 'Color hardeners and sealers rated for the Frisco sun so patios and pool decks resist fading.',
      },
      {
        title: 'HOA-Friendly Patterns',
        desc: 'Pattern and color choices that match the appearance standards common in Frisco’s master-planned communities.',
      },
    ],
    faqs: [
      {
        question: 'Where can stamped concrete be used around a Frisco home?',
        answer:
          'Patios, walkways, pool decks, front entries, and even driveways. It’s a flexible way to get a consistent decorative look across multiple surfaces.',
      },
      {
        question: 'Does stamped concrete get too hot for a pool deck?',
        answer:
          'We can use lighter colors and add finishes that stay cooler underfoot, which matters for Frisco pool decks in the summer. Texture also provides slip resistance around water.',
      },
      {
        question: 'How long does stamped concrete last in Frisco?',
        answer:
          'The concrete lasts as long as any quality slab — decades — and the decorative finish stays sharp with resealing every 2–3 years to protect the color from UV.',
      },
    ],
  },
  'stamped-concrete/plano': {
    metaDescription:
      'Stamped concrete in Plano, TX — decorative patios, walkways & driveways for established homes. Overlays available. Call 214-466-2536.',
    intro: [
      'In Plano, stamped concrete is often part of a backyard or entry upgrade on an established home. Homeowners in West Plano and around Willow Bend use it to replace a tired plain slab with a patio or walkway that looks like natural stone or brick, giving a decades-old home a fresh, high-end surface without the price of pavers.',
      'Because many Plano projects involve existing concrete, overlays are frequently an option — a stamped or textured layer applied over sound existing slabs to change the look without a full tear-out. Where the base concrete is failing from Plano’s clay-soil movement, we’ll pour fresh. Either way, we use UV-stable color and sealers so the finish holds up to the North Texas sun.',
    ],
    localNotes: [
      {
        title: 'Upgrade Existing Surfaces',
        desc: 'Stamped overlays can refresh sound existing Plano slabs without a full tear-out, changing the look at lower cost.',
      },
      {
        title: 'Stone & Brick Looks',
        desc: 'Flagstone, ashlar, and brick patterns that suit Plano’s established architecture.',
      },
      {
        title: 'North Texas Durability',
        desc: 'UV-stable color hardeners and sealers so decorative finishes resist fading and wear.',
      },
    ],
    faqs: [
      {
        question: 'Can you stamp over my existing Plano patio?',
        answer:
          'If the existing slab is structurally sound, a stamped or textured overlay can give it a new decorative look without tearing it out. If the concrete is cracked through from soil movement, we’ll recommend replacing it.',
      },
      {
        question: 'Is stamped concrete cheaper than pavers in Plano?',
        answer:
          'Generally, yes. Stamped concrete gives a similar high-end look to stone or brick pavers, typically at a lower installed cost and with fewer joints for weeds to grow through.',
      },
      {
        question: 'What maintenance does stamped concrete need?',
        answer:
          'Keep it swept and clean, and reseal every 2–3 years. Resealing protects the color and texture from the Plano sun and keeps the surface looking new.',
      },
    ],
  },
  'stamped-concrete/mckinney': {
    metaDescription:
      'Stamped concrete in McKinney, TX — decorative patios, walkways & pool decks with stone and brick patterns. Call 214-466-2536 for a free estimate.',
    intro: [
      'Stamped concrete fits McKinney well because it can echo the brick-and-stone character the city is known for — from the historic downtown streetscape to newer traditional-style homes in Stonebridge Ranch and Craig Ranch. We install stamped patios, walkways, and pool decks in patterns like ashlar slate, flagstone, and running-bond brick that complement that look at a fraction of the cost of the real material.',
      'The North Texas climate is the main thing to build around. McKinney’s sun fades unprotected color, and the Collin County clay under the slab moves with the seasons. We address both: UV-stable color hardeners and sealers on top, proper base prep and joint layout underneath, so the decorative surface stays vivid and crack-resistant.',
    ],
    localNotes: [
      {
        title: 'Complements McKinney Character',
        desc: 'Brick and stone patterns that suit both historic-district homes and newer traditional builds.',
      },
      {
        title: 'Patios, Walks & Pool Decks',
        desc: 'One decorative finish that can tie together multiple surfaces around a McKinney home.',
      },
      {
        title: 'Sun & Soil Protection',
        desc: 'UV-stable sealers up top, proper base prep below — built for McKinney’s heat and clay.',
      },
    ],
    faqs: [
      {
        question: 'What’s the most popular stamped pattern in McKinney?',
        answer:
          'Ashlar slate and flagstone are the most requested, and running-bond brick works nicely near the historic district. We bring samples so you can see each pattern in different colors against your home.',
      },
      {
        question: 'Can stamped concrete be used for a pool deck in McKinney?',
        answer:
          'Yes. We use slip-resistant texture and can choose lighter colors and cooler finishes so a stamped pool deck is comfortable and safe underfoot in the summer.',
      },
      {
        question: 'How do you keep the color from fading?',
        answer:
          'UV-stable color hardeners and quality sealers do most of the work; resealing every couple of years keeps a McKinney stamped surface looking new.',
      },
    ],
  },
  'stamped-concrete/southlake': {
    metaDescription:
      'Premium stamped concrete in Southlake, TX — decorative patios, pool decks & driveways for luxury homes. UV-stable finishes. Call 214-466-2536.',
    intro: [
      'Stamped concrete is a natural fit for Southlake, where homeowners expect finishes that match high-end architecture. On the larger properties in Timarron, Carillon, and Clariden Ranch, we use stamped concrete for patios, pool decks, entries, and driveway accents — achieving the look of natural stone, slate, or brick across large areas where individual pavers would be far more expensive.',
      'At this level, execution is what separates a great stamped surface from an average one: crisp pattern detail, well-matched color, and clean borders. We pair that craftsmanship with UV-stable color and premium sealers built for the Texas sun, over a base prepped for Tarrant County soil, so the finish stays sharp and crack-resistant on the large pours these homes call for.',
    ],
    localNotes: [
      {
        title: 'Luxury-Scale Decorative Work',
        desc: 'Stamped patios, pool decks, entries, and driveway accents sized for Southlake’s larger custom homes.',
      },
      {
        title: 'High-End Pattern Detail',
        desc: 'Crisp stamping, matched color, and clean banding that hold up to the scrutiny upscale homes get.',
      },
      {
        title: 'Premium, UV-Stable Finishes',
        desc: 'Quality color hardeners and sealers rated for the Texas sun to keep large surfaces vivid.',
      },
    ],
    faqs: [
      {
        question: 'Can you stamp a large pool deck and patio as one project in Southlake?',
        answer:
          'Yes. We coordinate large stamped pool decks and patios as a single cohesive design, keeping pattern, color, and finish consistent across the entire outdoor living area.',
      },
      {
        question: 'Which patterns look best on high-end Southlake homes?',
        answer:
          'Ashlar slate, large-format flagstone, and custom borders tend to complement Southlake architecture. We’ll bring samples and help match the pattern and color to your home.',
      },
      {
        question: 'How durable is stamped concrete on a large surface?',
        answer:
          'Very, when it’s built right. Correct joint layout, reinforcement, and base prep keep large stamped pours crack-resistant, and UV-stable sealers protect the decorative finish long-term.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // CONCRETE FOUNDATIONS
  // ---------------------------------------------------------------------------
  'concrete-foundations/frisco': {
    metaDescription:
      'Concrete foundation contractor in Frisco, TX — slab foundations for new construction, engineered for expansive Collin County clay. Call 214-466-2536.',
    intro: [
      'Frisco’s continued new construction keeps foundation work busy, from custom homes to additions and detached structures. We pour foundations built for the specific challenge every Frisco lot shares: expansive Blackland clay. This soil swells when wet and shrinks when dry, and a foundation that isn’t engineered and drained for it will move, crack, and cause problems throughout the structure above it.',
      'That’s why foundation work here is as much about soil and drainage as concrete. We build to engineered plans, prep and reinforce the slab to handle Collin County’s soil, and pay close attention to grading and moisture management around the foundation — because keeping soil moisture stable is one of the best defenses against movement. For new homes, additions, and outbuildings, we deliver foundations that meet code and hold up over the long term.',
    ],
    localNotes: [
      {
        title: 'New Construction & Additions',
        desc: 'Slab foundations for Frisco new builds, room additions, and detached structures, poured to engineered plans.',
      },
      {
        title: 'Engineered for Clay',
        desc: 'Reinforcement and slab design matched to Frisco’s expansive Blackland soil to resist movement.',
      },
      {
        title: 'Drainage & Moisture Management',
        desc: 'Grading and moisture control around the foundation to keep the surrounding clay stable.',
      },
    ],
    faqs: [
      {
        question: 'Why is foundation drainage so important in Frisco?',
        answer:
          'Frisco’s expansive clay moves most when its moisture swings between wet and dry. Good grading and drainage keep that moisture more stable around the foundation, which is one of the most effective ways to limit long-term movement.',
      },
      {
        question: 'Do you pour foundations for additions and outbuildings?',
        answer:
          'Yes. Along with new-home slabs, we pour foundations for room additions, garages, and detached structures, tying into the existing structure and grade where needed.',
      },
      {
        question: 'Do you work from engineered foundation plans?',
        answer:
          'We do. Foundation work in Collin County should follow an engineer’s design for the soil and structure, and we build to those specs and required inspections.',
      },
    ],
  },
  'concrete-foundations/plano': {
    metaDescription:
      'Concrete foundation contractor in Plano, TX — new slabs and additions engineered for Blackland clay soil. Call 214-466-2536 for a free estimate.',
    intro: [
      'Plano is largely built out, so a lot of our foundation work here is additions, detached structures, and new slabs on infill and rebuild projects rather than large new subdivisions. What doesn’t change is the ground underneath: Plano sits on the same expansive Blackland clay as the rest of Collin County, and that soil is the reason foundations in this area need to be engineered rather than just poured.',
      'When we add onto an established Plano home, matching the new foundation’s performance to the existing structure matters — differential movement between old and new is what causes cracks at the seam. We build to engineered plans, reinforce for the soil, and manage drainage and moisture around the foundation so the addition behaves like part of the original house. Every pour is done to code with the required inspections.',
    ],
    localNotes: [
      {
        title: 'Additions & Infill',
        desc: 'Foundations for room additions, rebuilds, and detached structures on established Plano properties.',
      },
      {
        title: 'Matched to Existing Structures',
        desc: 'We design additions to limit differential movement against the original foundation and reduce seam cracking.',
      },
      {
        title: 'Blackland Clay Engineering',
        desc: 'Reinforcement, drainage, and moisture planning built for Plano’s expansive soil.',
      },
    ],
    faqs: [
      {
        question: 'Can you pour a foundation for an addition on my existing Plano home?',
        answer:
          'Yes. We build addition foundations designed to work with your existing structure and grade, which helps limit the differential movement that can crack the joint between old and new.',
      },
      {
        question: 'Why do Plano foundations crack?',
        answer:
          'The expansive Blackland clay under Plano swells and shrinks with moisture, stressing foundations. Proper engineering, reinforcement, drainage, and moisture management are what keep that movement in check.',
      },
      {
        question: 'Do you handle permits and inspections for foundation work?',
        answer:
          'Foundation work is inspected work. We build to engineered plans and coordinate the required inspections so your project meets code.',
      },
    ],
  },
  'concrete-foundations/mckinney': {
    metaDescription:
      'Concrete foundation contractor in McKinney, TX — slab foundations for new construction and additions on expansive clay. Call 214-466-2536.',
    intro: [
      'McKinney’s ongoing growth along the US-380 corridor and beyond means steady new-construction foundation work, alongside additions to older homes closer to the historic core. In both cases we’re building on Collin County’s expansive clay, the same soil that makes proper foundation engineering essential everywhere in this part of North Texas.',
      'Expansive clay swells and shrinks as its moisture changes, and that movement is the main threat to any McKinney foundation. We build to engineered plans, reinforce the slab for the soil, and manage grading and drainage so moisture around the foundation stays as stable as possible. For new homes, additions, and outbuildings, that combination of soil-aware design and quality concrete is what delivers a foundation that lasts.',
    ],
    localNotes: [
      {
        title: 'New Builds & Additions',
        desc: 'Slab foundations for McKinney new construction and additions to established homes, poured to engineered plans.',
      },
      {
        title: 'Soil-Aware Design',
        desc: 'Reinforcement and slab detailing matched to McKinney’s expansive Collin County clay.',
      },
      {
        title: 'Drainage That Protects',
        desc: 'Grading and moisture management to keep the clay around your foundation stable.',
      },
    ],
    faqs: [
      {
        question: 'What kind of foundation is common for McKinney homes?',
        answer:
          'Most McKinney homes use engineered slab-on-grade foundations designed for the local clay. A soil report and engineer’s plan determine the specifics for your lot and structure.',
      },
      {
        question: 'How do you protect a new foundation from McKinney’s clay soil?',
        answer:
          'Through engineered reinforcement, proper subgrade prep, and — just as important — grading and drainage that keep soil moisture stable so the clay moves less.',
      },
      {
        question: 'Do you pour foundations for detached garages and shops?',
        answer:
          'Yes. In addition to home slabs and additions, we pour foundations for garages, shops, and other outbuildings throughout McKinney.',
      },
    ],
  },
  'concrete-foundations/southlake': {
    metaDescription:
      'Concrete foundation contractor in Southlake, TX — engineered slab foundations for large custom homes and additions. Call 214-466-2536.',
    intro: [
      'Foundation work in Southlake usually means larger custom homes and additions, and the scale raises the stakes. A bigger footprint on Tarrant County soil demands careful engineering — a large slab that isn’t designed and reinforced for the ground movement here will show it in the finished home. We pour foundations for custom builds, additions, and detached structures built to the engineered plans these projects require.',
      'North Texas soil moves with moisture, so drainage and moisture management around a Southlake foundation are as important as the concrete itself. We grade to protect the foundation, reinforce to the engineer’s specs, and coordinate the inspections these homes go through. The result is a foundation sized and built for a high-end home that’s meant to stand for the long term.',
    ],
    localNotes: [
      {
        title: 'Large Custom-Home Slabs',
        desc: 'Engineered foundations for Southlake’s larger custom builds, additions, and detached structures.',
      },
      {
        title: 'Engineered & Inspected',
        desc: 'Built to the engineer’s design with the reinforcement and inspections large homes require.',
      },
      {
        title: 'Soil & Drainage Focus',
        desc: 'Grading and moisture management to keep Tarrant County soil stable under a big footprint.',
      },
    ],
    faqs: [
      {
        question: 'Do larger Southlake homes need special foundation engineering?',
        answer:
          'A larger footprint means more area subject to soil movement, so engineered design and reinforcement matter even more. We build to the engineer’s plan for your specific home and soil.',
      },
      {
        question: 'Can you pour a foundation for a large addition in Southlake?',
        answer:
          'Yes. We design addition foundations to work with the existing home and grade, reducing the differential movement that can crack the connection between old and new.',
      },
      {
        question: 'How do you manage soil movement under a big slab?',
        answer:
          'With engineered reinforcement, quality subgrade prep, and drainage that keeps soil moisture stable around the foundation — the combination that limits movement on North Texas ground.',
      },
    ],
  },
}

export function getComboContent(serviceSlug: string, citySlug: string) {
  return comboContent[`${serviceSlug}/${citySlug}`]
}
