import { Facebook, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/AgingInPlaceRemodeling", label: "Facebook" },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/aginginplaceremodeling",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  { icon: Instagram, href: "https://www.instagram.com/aginginplaceremodeling", label: "Instagram" },
  {
    label: "Houzz",
    href: "https://www.houzz.com/pro/aipremodeling",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2v8.5H21V22h-9V12H3V2h9.5zM5 4v6h5v6h5V10h5v10h-3V14H9V8H5V4z" />
      </svg>
    ),
  },
  { icon: Youtube, href: "https://www.youtube.com/@AginginPlaceRemodeling", label: "YouTube" },
];

interface SocialLinksProps {
  showHeading?: boolean;
  size?: number;
}

export default function SocialLinks({ showHeading = true, size = 24 }: SocialLinksProps) {
  return (
    <div>
      {showHeading && (
        <p className="text-sm font-semibold text-text-light mb-3">Find us on social media</p>
      )}
      <div className="flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, svg, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-primary hover:text-primary-hover transition-colors"
          >
            {Icon ? <Icon size={size} strokeWidth={1.5} /> : svg}
          </a>
        ))}
      </div>
    </div>
  );
}
