import TestimonialsCarousel from './TestimonialsCarousel';
import { SITE_IMAGES } from '../lib/siteImages';

const testimonials = [
  {
    name: 'Amelia T.',
    location: 'North York',
    text: 'GCAD turned our 1980s home into a bright, open space without ever missing a deadline. Communication was smooth and every finish feels premium.',
    rating: 5,
    image:
      `${SITE_IMAGES.sunlitSittingRoom.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Rahul & Priya',
    location: 'Brampton',
    text: 'From the first consultation to the final walkthrough, the crew treated our place like their own. The kitchen reno came in on budget and looks incredible.',
    rating: 5,
    image:
      `${SITE_IMAGES.modernKitchenIsland.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Melissa G.',
    location: 'Etobicoke',
    text: 'We needed a main-floor refresh before welcoming family for the holidays. GCAD delivered ahead of schedule and the craftsmanship is outstanding.',
    rating: 5,
    image:
      `${SITE_IMAGES.elegantDining.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Jason L.',
    location: 'Scarborough',
    text: 'Loved the 3D design previews—they captured our vision perfectly. The crew kept the site tidy and our new living room feels like a model home.',
    rating: 5,
    image:
      `${SITE_IMAGES.openConceptLiving.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Sophia & Mark',
    location: 'Oakville',
    text: 'They managed structural updates, custom cabinetry, and new flooring seamlessly. We were never left guessing about timelines or next steps.',
    rating: 5,
    image:
      `${SITE_IMAGES.hallwayNook.url}&h=256&fit=crop&crop=entropy`
  },
  {
    name: 'Daniel K.',
    location: 'Mississauga',
    text: 'Best renovation experience we have ever had. Each milestone was documented, inspected, and delivered exactly to plan. Highly recommend GCAD.',
    rating: 5,
    image:
      `${SITE_IMAGES.grandFoyer.url}&h=256&fit=crop&crop=entropy`
  }
];

export default function Testimonials() {
  return (
    <TestimonialsCarousel
      title={
        <>
          What <span className="text-[#00aeef]">Homeowners</span> Say
        </>
      }
      subtitle="Real feedback from real GTA families"
      testimonials={testimonials}
    />
  );
}
