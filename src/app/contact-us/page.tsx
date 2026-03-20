import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

export const metadata: Metadata = {
  title: "Contact Us | Aging-In-Place Remodeling",
  description:
    "Contact Aging-In-Place Remodeling for a free consultation on safety and accessibility home modifications. Serving San Diego, Orange County, Riverside, and St. George, Utah.",
  openGraph: {
    title: "Contact Us | Aging-In-Place Remodeling",
    description:
      "Request a free consultation for safety and accessibility home modifications.",
    url: "https://www.aipremodeling.com/contact-us",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Aging-In-Place Remodeling",
  url: "https://www.aipremodeling.com/contact-us",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Aging-In-Place Remodeling",
    telephone: "(858) 776-8700",
    email: "info@AIPRemodeling.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "620 Venture St, Ste. D",
      addressLocality: "Escondido",
      addressRegion: "CA",
      postalCode: "92029",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Free consultations &bull; No obligation &bull; Expert advice
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form — 3 of 5 columns */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              {/* Info — 2 of 5 columns */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
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
