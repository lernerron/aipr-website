import Button from "@/components/ui/Button";
import SocialLinks from "@/components/SocialLinks";

export default function FooterCTA() {
  return (
    <section className="py-16 md:py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-main mb-3">
          Are you interested in discussing your project?
        </h2>
        <p className="text-lg font-semibold text-text-main">Give us a call</p>
        <a
          href="tel:8587768700"
          className="block text-2xl font-extrabold text-text-main my-4 no-underline hover:text-primary transition-colors"
        >
          (858) 776-8700
        </a>
        <p className="text-lg text-text-light mb-6">
          Get in touch with an accessible home specialist
        </p>
        <Button href="/contact-us" size="lg" uppercase>
          Contact Us Today
        </Button>

        <div className="mt-10 flex justify-center">
          <SocialLinks size={28} />
        </div>
      </div>
    </section>
  );
}
