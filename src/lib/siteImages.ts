type SiteImage = {
  id: string;
  url: string;
  alt: string;
};

const createImage = (id: string, url: string, alt: string): SiteImage => ({
  id,
  url,
  alt
});

export const SITE_IMAGES = {
  openConceptLiving: createImage(
    'openConceptLiving',
    'https://plus.unsplash.com/premium_photo-1661901286072-c258c091dce3?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Open concept living room with a sectional sofa, bright windows, and warm wood flooring'
  ),
  modernKitchenIsland: createImage(
    'modernKitchenIsland',
    'https://plus.unsplash.com/premium_photo-1661963347219-a066f98c661d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Contemporary kitchen renovation featuring a waterfall island and pendant lighting'
  ),
  spaBathroomRetreat: createImage(
    'spaBathroomRetreat',
    'https://plus.unsplash.com/premium_photo-1661962989122-a32d75b84082?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Luxury bathroom renovation with freestanding tub, marble tile, and warm sconces'
  ),
  basementLounge: createImage(
    'basementLounge',
    'https://plus.unsplash.com/premium_photo-1661963721175-341f0f32c3ca?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Finished basement lounge with sectional seating, wall paneling, and media centre'
  ),
  bedroomSanctuary: createImage(
    'bedroomSanctuary',
    'https://plus.unsplash.com/premium_photo-1661964056906-ed236b15df1b?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    'Primary bedroom renovation with soft textiles, accent lighting, and warm tones'
  ),
  elegantDining: createImage(
    'elegantDining',
    'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Elegant dining room with custom built-ins and a statement wood table'
  ),
  hallwayNook: createImage(
    'hallwayNook',
    'https://plus.unsplash.com/premium_photo-1673014202415-6e2dc6c18afc?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    'Renovated hallway nook with archway feature, bench seating, and neutral palette'
  ),
  sunlitSittingRoom: createImage(
    'sunlitSittingRoom',
    'https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Sunlit sitting room with plush sofa, accent chairs, and layered textures'
  ),
  modernStaircase: createImage(
    'modernStaircase',
    'https://plus.unsplash.com/premium_photo-1664303990705-f583f4677c0a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8',
    'Modern staircase with black metal railing, glass panels, and wood treads'
  ),
  grandFoyer: createImage(
    'grandFoyer',
    'https://plus.unsplash.com/premium_photo-1675615667748-83da03046d30?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8',
    'Grand foyer with double-height ceiling, chandelier, and feature staircase'
  )
} as const;

export type SiteImageId = keyof typeof SITE_IMAGES;

export const SITE_IMAGE_SEQUENCE: SiteImage[] = Object.values(SITE_IMAGES);


