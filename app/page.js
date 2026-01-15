import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ProductSlider from "@/components/ProductSlider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductSlider />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
