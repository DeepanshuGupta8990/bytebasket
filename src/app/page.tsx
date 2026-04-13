import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutUs from "@/components/AboutUs";
import LocationSection from "@/components/LocationSection";
import OnlineOrderingSection from "@/components/OnlineOrderingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutUs />
      <LocationSection />
      <OnlineOrderingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
