import type { Metadata } from "next";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Affiliates from "@/components/Affiliates";
import FooterCTA from "@/components/FooterCTA";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

export const metadata: Metadata = {
  title: "About Us | Aging-In-Place Remodeling",
  description:
    "Learn about Aging-In-Place Remodeling — San Diego's premiere safety and accessibility remodeling company with 18+ years of experience and over 3,000 products.",
  openGraph: {
    title: "About Us | Aging-In-Place Remodeling",
    description: "San Diego's premiere safety and accessibility remodeling company.",
    url: "https://www.aipremodeling.com/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Your one-stop solution for accessibility and safety modifications
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              What We Do
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-text-main">
              <p>
                <strong className="text-primary">Aging-In-Place Remodeling is a full service remodeling company</strong>{" "}
                that specializes in providing products and services that allow people to stay in their
                current residence for years to come. Our goal is to create a safe, accessible and
                comfortable home that blends usability and visual appeal.
              </p>
              <p>
                We serve homes, workplaces, and other locations with over 3,000 mobility and safety
                products available. Operating across Southern California with San Diego and Riverside
                County offices, we&apos;ve completed hundreds of projects ranging from small installations
                to major renovations.
              </p>
              <p>
                Staff members receive specialized training for sensitive situations involving those
                with special needs. We handle diverse challenges including Parkinson&apos;s disease, ALS,
                muscular dystrophy, cancer, cerebral palsy, brain and spinal injuries, post-surgical
                recovery, and multiple sclerosis.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16 bg-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "18+", label: "Years in Business" },
                { number: "4,000+", label: "Grab Bars Installed" },
                { number: "3,000+", label: "Products Available" },
                { number: "4", label: "Service Locations" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-border p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Licensed &amp; Certified
            </h2>
            <p className="text-lg text-text-main mb-8">
              We are a fully licensed general contractor (CSLB #807715), insured with worker&apos;s
              compensation and general liability, and CAPS certified. All products and services are
              guaranteed.
            </p>
            <Affiliates />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-bg text-center">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-text-light mb-6">
              Schedule a free in-home consultation with one of our specialists.
            </p>
            <Button href="/contact-us" size="lg">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      <footer>
        <FooterSitemap />
        <FooterLegal />
      </footer>
    </>
  );
}
