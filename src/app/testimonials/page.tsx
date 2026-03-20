import type { Metadata } from "next";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";
import testimonialsData from "../../../content/pages/testimonials.json";

export const metadata: Metadata = {
  title: "Testimonials | Aging-In-Place Remodeling",
  description:
    "Read testimonials from our clients. Aging-In-Place Remodeling is San Diego's most trusted home accessibility remodeler.",
  openGraph: {
    title: "Testimonials | Aging-In-Place Remodeling",
    description: "What our clients say about Aging-In-Place Remodeling.",
    url: "https://www.aipremodeling.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Real stories from the people we&apos;ve helped
            </p>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="space-y-8">
              {testimonialsData.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="bg-white p-8 md:p-10 border-l-[6px] border-primary rounded-r-xl"
                >
                  <p className="text-lg leading-relaxed text-text-main italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="text-xl font-extrabold text-primary not-italic">
                    &mdash; {t.author}
                    {t.location && <> &ndash; {t.location}</>}
                    {t.year && <> &ndash; {t.year}</>}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/contact-us" size="lg">
                Start Your Project
              </Button>
            </div>
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
