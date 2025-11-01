import HeroSlider from "../LandingPage/HeroSlider";
import ServicesGrid from "../LandingPage/ServicesGrid";
import AboutSection from "../LandingPage/AboutSection";
import StatsSection from "../LandingPage/StatsSection";
import KeyServices from "../LandingPage/KeyServices";
import TopDestinations from "../LandingPage/TopDestinations";
import TestimonialsSection from "../LandingPage/TestimonialsSection";
import PartnersSection from "../LandingPage/PartnersSection";
import CTASection from "../LandingPage/CTASection";
import Footer from "../LandingPage/Footer";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      <AboutSection />
      <StatsSection />
      <KeyServices />
      <ServicesGrid />
      <TopDestinations />
      <TestimonialsSection />
      <PartnersSection />

      <Footer />
    </div>
  );
}
