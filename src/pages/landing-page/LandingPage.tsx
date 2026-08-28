import BecomeShipperOrRider from "../../components/core/landing-page/become-shipper-or-rider/BecomeShipperOrRider";
import DeliveryOptions from "../../components/core/landing-page/delivery-options/DeliveryOptions";
import FAQ from "../../components/core/landing-page/faq/FAQ";
import FinalCTA from "../../components/core/landing-page/final-cta/FinalCTA";
import Footer from "../../components/core/landing-page/footer/Footer";
import HeroSection from "../../components/core/landing-page/hero-section/HeroSection";
import HowItWorks from "../../components/core/landing-page/how-it-works/HowItWorks";
import Navbar from "../../components/core/landing-page/navbar/Navbar";
import ServiceSection from "../../components/core/landing-page/service-section/ServiceSection";
import SocialProof from "../../components/core/landing-page/social-proof/SocialProof";
import Testimonials from "../../components/core/landing-page/testimonials/Testimonials";
import Trust_Safety from "../../components/core/landing-page/trust_safety/Trust_Safety";

const LandingPage = () => {
  return (
    <>
      <main className="bg-background-light dark:bg-background-dark text-[#0e121b] dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="space-y-3">
          <HeroSection />
          <SocialProof />
          <HowItWorks />
          <ServiceSection />
          <Trust_Safety />
          <DeliveryOptions />
          <BecomeShipperOrRider />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
