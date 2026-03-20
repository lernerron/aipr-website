import Image from "next/image";

const affiliates = [
  { src: "/images/50-plus-council.jpg", alt: "50 Plus Council" },
  { src: "/images/BIA.jpg", alt: "Building Industry Association" },
  { src: "/images/caps-logo.jpg", alt: "CAPS - Certified Aging-In-Place Specialist" },
  { src: "/images/NAHB-1.jpg", alt: "National Association of Home Builders" },
];

export default function Affiliates() {
  return (
    <section className="py-12 md:py-16 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {affiliates.map((affiliate) => (
            <Image
              key={affiliate.alt}
              src={affiliate.src}
              alt={affiliate.alt}
              width={120}
              height={80}
              className="h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
