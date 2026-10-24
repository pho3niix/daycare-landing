import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import FeaturesSection from "../components/Features/FeaturesSection";
import PedagogySection from "../components/Pedagogy/PedagogySection";
import StagesSection from "../components/Stages/StagesSection";
import PricingSection from "../components/Pricing/PricingSection";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import FaqSection from "../components/Faq/FaqSection";
import CtaContactSection from "../components/CtaContact/CtaContactSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Box component="main" sx={{ overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PedagogySection />
      <StagesSection />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <CtaContactSection />
      <Footer />
    </Box>
  );
}
