import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  uppercase?: boolean;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-2 border-primary hover:bg-primary-hover hover:border-primary-hover",
  secondary:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  ghost:
    "bg-transparent text-primary border-2 border-transparent hover:bg-bg-alt",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  uppercase = false,
  target,
  rel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg font-bold no-underline transition-all duration-200 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    uppercase ? "uppercase" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
