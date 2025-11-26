import Header from '../components/Header';
import HomeRenovationHero from '../components/home-renovation/HomeRenovationHero';
import RenovationTypes from '../components/home-renovation/RenovationTypes';
import TransformationGallery from '../components/home-renovation/TransformationGallery';
import WhyChooseUs from '../components/home-renovation/WhyChooseUs';
import RenovationProcess from '../components/home-renovation/RenovationProcess';
import HomeRenovationTestimonials from '../components/home-renovation/HomeRenovationTestimonials';
import HomeRenovationCTA from '../components/home-renovation/HomeRenovationCTA';
import Footer from '../components/Footer';

export default function HomeRenovationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeRenovationHero />
        <RenovationTypes />
        <TransformationGallery />
        <WhyChooseUs />
        <RenovationProcess />
        <HomeRenovationTestimonials />
        <HomeRenovationCTA />
      </main>
      <Footer />
    </div>
  );
}
