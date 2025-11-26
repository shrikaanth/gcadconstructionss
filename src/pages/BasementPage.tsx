import Header from '../components/Header';
import BasementHero from '../components/basement/BasementHero';
import BasementProblem from '../components/basement/BasementProblem';
import BasementIncludes from '../components/basement/BasementIncludes';
import BasementPricing from '../components/basement/BasementPricing';
import BasementGallery from '../components/basement/BasementGallery';
import BasementTestimonials from '../components/basement/BasementTestimonials';
import BasementFAQ from '../components/basement/BasementFAQ';
import BasementCTA from '../components/basement/BasementCTA';
import Footer from '../components/Footer';

export default function BasementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BasementHero />
        <BasementProblem />
        <BasementIncludes />
        <BasementPricing />
        <BasementGallery />
        <BasementTestimonials />
        <BasementFAQ />
        <BasementCTA />
      </main>
      <Footer />
    </div>
  );
}
