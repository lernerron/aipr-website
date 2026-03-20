import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[radial-gradient(circle_at_center,#1c5064_0%,#001a24_100%)]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Spacer on left for desktop symmetry */}
          <div className="hidden md:block flex-1" />

          {/* Main hero content */}
          <div className="flex-[3] text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight mb-4 max-w-3xl mx-auto">
              The Premiere Safety &amp; Accessibility Remodeling Company
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Remodeling for whatever the future holds.
            </p>
          </div>

          {/* BALA Award badge */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/images/2019-BALA-Winner-Mark-White-png-500x369.png"
              alt="Best of American Living Award Winner"
              width={160}
              height={118}
              className="w-28 md:w-36 lg:w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
