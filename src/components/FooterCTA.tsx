import { Facebook, Instagram, Home, Youtube } from "lucide-react";
import Button from "@/components/ui/Button";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/aginginplaceremodeling", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/aginginplaceremodeling", label: "Instagram" },
  { icon: Home, href: "https://www.houzz.com/pro/aipremodeling", label: "Houzz" },
  { icon: Youtube, href: "https://www.youtube.com/@AginginPlaceRemodeling", label: "YouTube" },
];

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

        {/* Social icons */}
        <div className="flex justify-center gap-5 mt-10">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              <Icon size={28} strokeWidth={1.5} />
            </a>
          ))}
          {/* Pinterest */}
          <a
            href="https://www.pinterest.com/aginginplaceremodeling"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
