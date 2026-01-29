import Footer from "../../components/core/landing-page/footer/Footer";
import HeroSection from "../../components/core/landing-page/hero-section/HeroSection";
import HowItWorks from "../../components/core/landing-page/how-it-works/HowItWorks";
import Navbar from "../../components/core/landing-page/navbar/Navbar";
import Trust_Safety from "../../components/core/landing-page/trust_safety/Trust_Safety";

const LandingPage = () => {
  return (
    <>
      <main className="bg-background-light dark:bg-background-dark text-[#0e121b] dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-5">
          <HeroSection />
          <HowItWorks />

          <Trust_Safety />
        </main>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
