import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

const locations = [
  { name: "San Diego", phone: "(858) 776-8700", tel: "8587768700" },
  { name: "Orange County", phone: "(949) 236-6684", tel: "9492366684" },
  { name: "SW Riverside", phone: "(951) 760-6728", tel: "9517606728" },
  { name: "St. George, UT", phone: "(435) 429-1182", tel: "4354291182" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Phone Numbers */}
      <div className="bg-white rounded-xl border border-border p-6 md:p-8">
        <h3 className="font-heading text-xl font-bold text-primary mb-5 flex items-center gap-2">
          <Phone size={20} strokeWidth={2} />
          Call Us Directly
        </h3>
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.name} className="flex items-center justify-between">
              <span className="text-sm font-semibold text-text-light">{loc.name}</span>
              <a
                href={`tel:${loc.tel}`}
                className="text-lg font-bold text-primary no-underline hover:text-primary-hover transition-colors"
              >
                {loc.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Email & Address */}
      <div className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <Mail size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-text-light mb-0.5">Email</p>
            <a
              href="mailto:info@AIPRemodeling.com"
              className="text-base font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
            >
              info@AIPRemodeling.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-text-light mb-0.5">Office</p>
            <p className="text-base text-text-main">
              620 Venture St, Ste. D<br />
              Escondido, CA 92029<br />
              <span className="text-sm text-text-light">(By Appointment Only)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-xl border border-border p-6 md:p-8">
        <SocialLinks />
      </div>

      {/* Trust Signals */}
      <div className="bg-white rounded-xl border border-border p-6 md:p-8 text-center">
        <Image
          src="/images/2019-BALA-Winner-Mark-White-png-500x369.png"
          alt="Best of American Living Award Winner"
          width={120}
          height={88}
          className="mx-auto mb-4 w-24 h-auto invert"
        />
        <p className="text-sm text-text-light leading-relaxed">
          Licensed General Contractor<br />
          CSLB #807715<br />
          Fully Insured &bull; All Work Guaranteed<br />
          #1 US Stiltz Dealer
        </p>
      </div>
    </div>
  );
}
