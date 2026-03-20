import Image from "next/image";

const services = [
  {
    title: "Stiltz Lifts and Other Lifts",
    image: "/images/Stiltz-Website-image-32.jpg",
    href: "/platform-lifts-elevators/",
    alt: "Stiltz Lifts and Other Lifts",
  },
  {
    title: "Ramps",
    image: "/images/Ramps-Page-Modular-Ramp-768x768.jpg",
    href: "/ramps/",
    alt: "Ramps",
  },
  {
    title: "Accessible Showers",
    image: "/images/Home-Page-Accessible-Showers-768x768.jpg",
    href: "/accessible-showers/",
    alt: "Accessible Showers",
  },
  {
    title: "Accessible Sink",
    image: "/images/Home-Page-Accessible-Sinks-768x768.jpg",
    href: "/accessible-sink/",
    alt: "Accessible Sink",
  },
  {
    title: "Grab Bars & Handrails",
    image: "/images/Home-Page-Grab-Bars-and-Handrails-768x768.jpg",
    href: "/grab-bars-and-handrails/",
    alt: "Grab Bars & Handrails",
  },
  {
    title: "Ceiling Lifts",
    image: "/images/Savaria-Fixed-Ceiling-Lift-FL-Healthcare-1-1-768x768.jpg",
    href: "/ceiling-overhead-lifts/",
    alt: "Ceiling Lifts",
  },
  {
    title: "Doors",
    image: "/images/Home-Page-Doors-768x768.jpg",
    href: "/doors/",
    alt: "Doors",
  },
  {
    title: "Bathroom Safety",
    image: "/images/WIT-5-2-1-768x768.jpg",
    href: "/bathroom-safety/",
    alt: "Bathroom Safety",
  },
  {
    title: "Traditional Remodels",
    image: "/images/Featured-Image-4-768x768.jpg",
    href: "/traditional-remodels/",
    alt: "Traditional Remodels",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12 md:mb-16">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-xl border border-border overflow-hidden no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary-hover transition-colors">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
