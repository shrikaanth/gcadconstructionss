import Header from '../components/Header';
import HomeRenovationHero from '../components/home-renovation/HomeRenovationHero';
import TransformationGallery from '../components/home-renovation/TransformationGallery';
import RenovationProcess from '../components/home-renovation/RenovationProcess';
import Testimonials from '../components/Testimonials';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';

export default function HomeRenovationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeRenovationHero />
        <TransformationGallery />
        <RenovationProcess />
        <Testimonials />
        <AboutCTA />
      </main>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
