import Header from '../components/Header';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ServiceArea from '../components/contact/ServiceArea';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ServiceArea />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
