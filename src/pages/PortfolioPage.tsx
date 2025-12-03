import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32">
          <Portfolio />
        </section>
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

