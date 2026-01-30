"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WhyUsCard from "./WhyUsCard";

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string>("pricing");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      id: "pricing",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Upfront & Honest Pricing",
      description:
        "No hidden fees or surprise bills. You get a clear, honest quote before any repair work begins.",
    },
    {
      id: "experience",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "20+ Years Experience",
      description:
        "Over two decades of hands-on expertise fixing every major brand and model. We've seen it all.",
    },
    {
      id: "licensed",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Licensed & Insured",
      description:
        "Your home is your biggest investment. We provide professional, fully insured service for your total peace of mind.",
    },
  ];

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section
      ref={sectionRef}
      id="whyus"
      className="py-16 sm:py-24 bg-gray-50"
      aria-labelledby="whyus-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Header */}
              <div className="text-center lg:text-left mb-8">
                <h2
                  id="whyus-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                  Why Choose <span className="text-blue-500">Audy&apos;s</span>?
                </h2>
                <p className="text-gray-600 text-lg">
                  When it comes to appliance and home system repairs, you need
                  someone you can trust. Here&apos;s why families throughout the
                  Niagara Region choose us for their essential home needs.
                </p>
              </div>

              {/* Accordion Cards Container */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm">
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div
                      key={reason.id}
                      className={`transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{
                        transitionDelay: isVisible
                          ? `${(index + 1) * 100}ms`
                          : "0ms",
                      }}
                    >
                      <WhyUsCard
                        icon={reason.icon}
                        title={reason.title}
                        description={reason.description}
                        isExpanded={expandedId === reason.id}
                        onClick={() => handleCardClick(reason.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative h-80 sm:h-96 lg:h-[650px]">
                <Image
                  src="/images/whyUs.webp"
                  alt="Professional appliance repair technician at work"
                  fill
                  className="rounded-3xl shadow-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
