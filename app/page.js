import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import WhyChooseUs from './components/WhyChooseUs';
import SEOContent from './components/SEOContent';
import PaymentOptions from './components/PaymentOptions';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PricingSection />
      <WhyChooseUs />
      <SEOContent />
      <PaymentOptions />
    </main>
  );
}