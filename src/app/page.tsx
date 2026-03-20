import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import VideoShowcase from "@/components/VideoShowcase";
import Affiliates from "@/components/Affiliates";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <VideoShowcase />
        <Affiliates />
        <Testimonials />
      </main>
      <footer>
        <FooterCTA />
        <FooterSitemap />
        <FooterLegal />
      </footer>
    </>
  );
}
