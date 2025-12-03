import Header from '../components/Header';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import OurApproach from '../components/about/OurApproach';
import OurValues from '../components/about/OurValues';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <OurApproach />
        <OurValues />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
