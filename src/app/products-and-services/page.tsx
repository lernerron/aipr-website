import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import FooterCTA from "@/components/FooterCTA";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

export const metadata: Metadata = {
  title: "Products & Services | Aging-In-Place Remodeling",
  description:
    "Browse our complete range of accessibility and safety products and services. Stiltz lifts, ramps, accessible showers, grab bars, ceiling lifts, doors, and more.",
  openGraph: {
    title: "Products & Services | Aging-In-Place Remodeling",
    description: "Complete range of accessibility and safety home modification products and services.",
    url: "https://www.aipremodeling.com/products-and-services",
  },
};

export default function ProductsAndServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Products &amp; Services
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Over 3,000 mobility and safety products available
            </p>
          </div>
        </section>

        {/* Services grid — reuse the homepage component */}
        <ServicesGrid />
      </main>
      <footer>
        <FooterCTA />
        <FooterSitemap />
        <FooterLegal />
      </footer>
    </>
  );
}
