import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}

export default function Container({
  children,
  narrow = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`${narrow ? "max-w-4xl" : "max-w-7xl"} mx-auto px-5 ${className}`}
    >
      {children}
    </div>
  );
}
