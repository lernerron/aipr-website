import type { Metadata } from "next";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";
import consultingData from "../../../content/pages/consulting.json";

export const metadata: Metadata = {
  title: "B2B Consulting | Aging-In-Place Remodeling",
  description: consultingData.metaDescription,
  openGraph: {
    title: "B2B Consulting | Aging-In-Place Remodeling",
    description: consultingData.metaDescription,
    url: "https://www.aipremodeling.com/consulting",
  },
};

export default function ConsultingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              {consultingData.title}
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              {consultingData.subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="space-y-5 text-lg leading-relaxed text-text-main mb-10">
              {consultingData.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Consulting Formats
            </h2>
            <ul className="space-y-3 mb-10">
              {consultingData.formats.map((format) => (
                <li key={format} className="flex items-start gap-3 text-text-main">
                  <span className="text-primary font-bold mt-0.5">&#10003;</span>
                  {format}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Topics Covered
            </h2>
            <ul className="space-y-3 mb-10">
              {consultingData.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-text-main">
                  <span className="text-primary font-bold mt-0.5">&#10003;</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-bg text-center">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to grow your aging-in-place business?
            </h2>
            <p className="text-lg text-text-light mb-6">
              Get in touch to learn about our consulting programs.
            </p>
            <Button href="/contact-us" size="lg">
              Contact Us
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
