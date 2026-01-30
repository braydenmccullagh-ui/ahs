import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[max(100svh,650px)] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Professional appliance repair technician"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full pt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              Fixing What&apos;s Broken
              <br />
              Fast, Affordable
              <br />& Done Right
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto animate-fade-in-up opacity-0 animation-delay-400">
              Fast, honest repairs for appliances, heating, and fixtures.
              Trusted across the Niagara Region with a 5-star reputation
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up opacity-0 animation-delay-500">
              <Button size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
