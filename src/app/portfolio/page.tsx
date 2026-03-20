import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import FooterSitemap from "@/components/FooterSitemap";
import FooterLegal from "@/components/FooterLegal";

export const metadata: Metadata = {
  title: "Portfolio | Aging-In-Place Remodeling",
  description:
    "Browse our portfolio of accessibility remodeling projects across San Diego, Orange County, and Riverside. Stiltz lifts, accessible showers, grab bars, and more.",
  openGraph: {
    title: "Portfolio | Aging-In-Place Remodeling",
    description: "Our accessibility remodeling project portfolio.",
    url: "https://www.aipremodeling.com/portfolio",
  },
};

const featuredProjects = [
  {
    title: "Stiltz Lift Installation",
    location: "Rancho Bernardo, CA",
    category: "Lifts",
    image: "/images/Stiltz-Website-image-32.jpg",
    description: "Stiltz home lift installed in 4 days, providing easy access between floors.",
  },
  {
    title: "Accessible Shower Remodel",
    location: "San Diego, CA",
    category: "Accessible Showers",
    image: "/images/Home-Page-Accessible-Showers-768x768.jpg",
    description: "Barrier-free roll-in shower with fold-up seat and grab bars.",
  },
  {
    title: "Modular Ramp System",
    location: "Escondido, CA",
    category: "Ramps",
    image: "/images/Ramps-Page-Modular-Ramp-768x768.jpg",
    description: "EZ-ACCESS modular ramp providing wheelchair access to front entry.",
  },
  {
    title: "Grab Bars & Handrails",
    location: "Poway, CA",
    category: "Grab Bars",
    image: "/images/Home-Page-Grab-Bars-and-Handrails-768x768.jpg",
    description: "Custom stainless steel grab bar installation throughout bathroom.",
  },
  {
    title: "Ceiling Lift System",
    location: "Oceanside, CA",
    category: "Ceiling Lifts",
    image: "/images/Savaria-Fixed-Ceiling-Lift-FL-Healthcare-1-1-768x768.jpg",
    description: "Savaria ceiling lift system for safe patient transfers between rooms.",
  },
  {
    title: "Traditional Kitchen Remodel",
    location: "Del Mar, CA",
    category: "Traditional Remodels",
    image: "/images/Featured-Image-4-768x768.jpg",
    description: "Full kitchen remodel with accessible countertops and cabinetry.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Featured projects from across Southern California
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl border border-border overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-light mb-3">{project.location}</p>
                    <p className="text-text-main text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
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
