import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import WhySection from "./components/WhySection/WhySection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Divider />
      <IntroSection />
      <ServicesSection />
      <AboutUs />
      <WhySection />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
