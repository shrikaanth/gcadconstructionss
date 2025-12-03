import Header from '../components/Header';
import HomeRenovationHero from '../components/home-renovation/HomeRenovationHero';
import TransformationGallery from '../components/home-renovation/TransformationGallery';
import RenovationProcess from '../components/home-renovation/RenovationProcess';
import HomeRenovationCTA from '../components/home-renovation/HomeRenovationCTA';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomeRenovationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeRenovationHero />
        <TransformationGallery />
        <RenovationProcess />
        <HomeRenovationCTA />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
