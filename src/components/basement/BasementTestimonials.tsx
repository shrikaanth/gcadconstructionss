import TestimonialsCarousel from '../TestimonialsCarousel';
import { SITE_IMAGES } from '../../lib/siteImages';

const testimonials = [
  {
    name: 'Sandeep K.',
    location: 'Mississauga',
    text: 'We interviewed four contractors. GCAD was the only one who gave us a realistic cost and timeline for our basement. Worth every penny of the $47K package.',
    rating: 5,
    project: 'Full Basement Renovation',
    image:
      `${SITE_IMAGES.basementLounge.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Luis & Maria',
    location: 'Brampton',
    text: 'The team finished our legal suite in under five weeks and handled permits flawlessly. Friends can’t believe it was all included in the base package.',
    rating: 5,
    project: 'Basement Apartment',
    image:
      `${SITE_IMAGES.sunlitSittingRoom.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Jennifer S.',
    location: 'Scarborough',
    text: 'GCAD turned a storage-only basement into a guest suite and office. The 3D visualization helped us decide finishes without guesswork.',
    rating: 5,
    project: 'Basement Conversion',
    image:
      `${SITE_IMAGES.hallwayNook.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Omar H.',
    location: 'Milton',
    text: 'We added a home theatre, bar, and gym. The crew coordinated all trades and kept the site clean every night. Inspections passed the first time.',
    rating: 5,
    project: 'Luxury Basement Build',
    image:
      `${SITE_IMAGES.openConceptLiving.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Emily & Chris',
    location: 'Richmond Hill',
    text: 'Loved the transparency—weekly progress photos, budget updates, and zero surprises. The kids basically live in the new rec room now.',
    rating: 5,
    project: 'Family Entertainer Package',
    image:
      `${SITE_IMAGES.modernStaircase.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Gurpreet B.',
    location: 'Burlington',
    text: 'Our rental suite was completed turnkey, down to appliances. Tenants moved in the next week and the finish quality is outstanding.',
    rating: 5,
    project: 'Income Suite',
    image:
      `${SITE_IMAGES.grandFoyer.url}&h=256&fit=crop&crop=entropy`
  }
];

export default function BasementTestimonials() {
  return (
    <TestimonialsCarousel
      title={
        <>
          What <span className="text-[#00aeef]">Homeowners</span> Say
        </>
      }
      subtitle="Real feedback from GTA families who chose our basement package"
      testimonials={testimonials}
    />
  );
}
