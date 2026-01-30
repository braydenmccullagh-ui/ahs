import Image from "next/image";

interface LogoProps {
  size?: "default" | "lg";
}

export default function Logo({ size = "default" }: LogoProps) {
  const sizeClasses = {
    default: "h-20 md:h-24",
    lg: "h-28 md:h-32",
  };

  const dimensions = {
    default: { width: 160, height: 96 },
    lg: { width: 200, height: 128 },
  };

  return (
    <a
      href="#"
      className="inline-block transition-all duration-200 hover:opacity-80 hover:scale-105 active:scale-95"
      aria-label="Audy's Home Services - Home"
    >
      <Image
        src="/logo.svg"
        alt="Audy's Home Services"
        width={dimensions[size].width}
        height={dimensions[size].height}
        className={`${sizeClasses[size]} w-auto brightness-0 invert drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200`}
        priority
      />
    </a>
  );
}
