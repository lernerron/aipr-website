import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  background?: "default" | "alt" | "white";
  className?: string;
  id?: string;
}

const bgClasses = {
  default: "bg-bg",
  alt: "bg-bg-alt",
  white: "bg-white",
};

export default function Section({
  children,
  background = "default",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
