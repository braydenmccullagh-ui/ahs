interface ButtonProps {
  text?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  showIcon?: boolean;
  className?: string;
}

export default function Button({
  text = "(289) 501-1977",
  href = "tel:+12895011977",
  size = "md",
  variant = "solid",
  bgColor,
  hoverBgColor,
  textColor,
  showIcon = true,
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    solid: {
      bg: bgColor || "bg-white",
      hoverBg: hoverBgColor || "hover:bg-gray-100",
      text: textColor || "text-gray-900",
      border: "",
    },
    outline: {
      bg: bgColor || "bg-transparent",
      hoverBg: hoverBgColor || "hover:bg-white/10",
      text: textColor || "text-white",
      border: "border-2 border-white",
    },
  };

  const styles = variantClasses[variant];

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 ${styles.bg} ${styles.hoverBg} ${styles.text} ${styles.border} hover:shadow-lg hover:scale-105 active:scale-95 font-semibold rounded-full transition-all duration-200 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <svg
          className={size === "lg" ? "w-6 h-6" : "w-5 h-5"}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}
      {text}
    </a>
  );
}
