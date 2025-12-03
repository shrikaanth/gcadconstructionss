import Header from '../components/Header';
import ContactHero from '../components/contact/ContactHero';
import ServiceArea from '../components/contact/ServiceArea';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        <ServiceArea />
        <AboutCTA />
      </main>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
