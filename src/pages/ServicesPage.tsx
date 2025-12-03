import Header from '../components/Header';
import ServicesHero from '../components/services/ServicesHero';
import ServicesOverview from '../components/services/ServicesOverview';
import BasementRenovation from '../components/services/BasementRenovation';
import HomeRenovationService from '../components/services/HomeRenovationService';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServicesCTA from '../components/services/ServicesCTA';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesHero />
        <ServicesOverview />
        <BasementRenovation />
        <HomeRenovationService />
        <ServiceBenefits />
        <ServicesCTA />
        <AboutCTA />
      </main>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
