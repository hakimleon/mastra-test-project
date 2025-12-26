import { AboutUsSection } from '@/components/landing/AboutUsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { MenuHighlightsSection } from '@/components/landing/MenuHighlightsSection';
import { NavigationBar } from '@/components/landing/NavigationBar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      <NavigationBar />
      <HeroSection />
      <MenuHighlightsSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
