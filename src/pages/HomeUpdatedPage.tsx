import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import BasementPackage from '../components/BasementPackage';
import HomeRenovation from '../components/HomeRenovation';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomeUpdatedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <WhyChoose />
        </div>
        <div id="basement">
          <BasementPackage />
        </div>
        <div id="services">
          <HomeRenovation />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <Testimonials />
        <div id="contact">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

