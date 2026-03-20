import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import FooterCTA from "@/components/FooterCTA";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

interface SubService {
  name: string;
  description: string;
  image: string | null;
}

interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keyInfo?: string;
  subServices: SubService[];
}

export function generateServiceMetadata(service: ServiceData): Metadata {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.aipremodeling.com/${service.slug}`,
    },
  };
}

export default function ServicePage({ service }: { service: ServiceData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://www.aipremodeling.com/${service.slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Aging-In-Place Remodeling",
      telephone: "(858) 776-8700",
    },
    areaServed: ["San Diego", "Orange County", "Southwest Riverside", "St. George, Utah"],
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero strip */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              {service.h1}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-lg md:text-xl leading-relaxed text-text-main">
              {service.intro}
            </p>
            {service.keyInfo && (
              <p className="mt-6 p-4 bg-bg-alt rounded-lg text-base text-text-light border-l-4 border-primary">
                {service.keyInfo}
              </p>
            )}
          </div>
        </section>

        {/* Sub-services */}
        {service.subServices.length > 0 && (
          <section className="py-12 md:py-16 lg:py-20 bg-bg">
            <div className="max-w-7xl mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="bg-white rounded-xl border border-border overflow-hidden"
                  >
                    {sub.image && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={sub.image}
                          alt={sub.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-primary mb-3">
                        {sub.name}
                      </h3>
                      <p className="text-text-main leading-relaxed">{sub.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to discuss {service.title.toLowerCase()}?
            </h2>
            <p className="text-lg text-text-light mb-6">
              Get a free consultation with one of our accessibility specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact-us" size="lg">
                Request a Consultation
              </Button>
              <Button href="tel:8587768700" variant="secondary" size="lg">
                Call (858) 776-8700
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
