import Navigation from '@/components/ui/navigation';
import Hero from '@/components/hero';
import ProductCards from '@/components/product-cards';
import FeatureList from '@/components/feature-list';
import FAQ from '@/components/faq';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import ServiceAreasSection from '@/components/service-areas-section';
import ReviewWidget from '@/components/testimonial-slider';
import CustomerLogos from '@/components/customer-logos';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProductCards />
      <ServiceAreasSection />
      <CustomerLogos />
      <FeatureList />
      <FAQ />
      <ReviewWidget />
      <ContactForm />
      <Footer />
    </main>
  );
}