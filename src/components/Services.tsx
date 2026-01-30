"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      id: "refrigerators",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={2} />
          <line x1="5" y1="10" x2="19" y2="10" strokeWidth={2} />
          <line
            x1="15"
            y1="5"
            x2="15"
            y2="8"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="13"
            x2="15"
            y2="17"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Refrigerators & Freezers",
      description:
        "Don't let your groceries go to waste. We offer same-day diagnostics for cooling issues, leaks, and ice maker problems.",
      items: [
        "Fridge not cooling or freezer icing over",
        "Water leaks and ice maker failures",
        "Loud or unusual compressor noises",
        "Seal replacement and calibration",
      ],
      image: "/images/servicesFridge.webp",
    },
    {
      id: "dishwashers",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
          <line x1="4" y1="8" x2="20" y2="8" strokeWidth={2} />
          <path d="M8 15h8M12 12v3" strokeWidth={2} strokeLinecap="round" />
        </svg>
      ),
      title: "Dishwashers",
      description:
        "Skip the hand-washing. We quickly diagnose and repair the clogs and mechanical failures stopping your cleanup.",
      items: [
        "Water pooling at the bottom",
        "Dishes coming out dirty or spotted",
        "Leaking from the door or bottom",
        "Cycle won't start or finish",
      ],
      image: "/images/servicesDishwasher.webp",
    },
    {
      id: "cooking",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
          <rect x="6" y="10" width="12" height="8" rx="1" strokeWidth={2} />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
          <circle cx="14" cy="6" r="1" fill="currentColor" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Ovens, Stoves & Ranges",
      description:
        "A broken stove means no home-cooked meals. We provide professional repairs for gas and electric cooking appliances.",
      items: [
        "Oven not heating or baking unevenly",
        "Burners won't ignite or stay lit",
        "Broken control boards and timers",
        "Microwave and range hood repairs",
      ],
      image: "/images/servicesCooking.webp",
    },
    {
      id: "laundry",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
          <circle cx="12" cy="13" r="5" strokeWidth={2} />
          <path d="M7 13 C 7 13, 9 15, 12 13 S 17 11, 17 13" strokeWidth={1.5} />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Washers & Dryers",
      description:
        "Laundry is enough of a chore without a broken machine. We fix the leaks, noises, and heating issues that stop your cycle.",
      items: [
        "Washer not draining or spinning",
        "Dryer won't heat or takes too long",
        "Violent shaking and grinding noises",
        "Door seal leaks and pump repairs",
      ],
      image: "/images/servicesWasherDryer.webp",
    },
    {
      id: "heating",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2C12 2 7 8 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 8 12 2 12 2Z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7C12 7 10 10 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10 12 7 12 7Z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Furnaces & Fireplaces",
      description:
        "Keep your home warm and safe. We specialize in furnace repairs and gas fireplace maintenance for year-round comfort.",
      items: [
        "Furnace not producing heat",
        "Cycling on and off frequently",
        "Pilot light and ignition problems",
        "Thermostat and blower motor repair",
      ],
      image: "/images/servicesFireplace.webp",
    },
    {
      id: "plumbing",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M7 17h10M9 17v-2a3 3 0 013-3h3V7a2 2 0 00-2-2H9"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx="15" cy="15" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Taps & Fixtures",
      description:
        "Stop the drip and save on your water bill. We provide professional repair and installation for your kitchen and bathroom fixtures.",
      items: [
        "Dripping or leaking taps",
        "Low water pressure issues",
        "New fixture and tap installation",
      ],
      image: "/images/servicesPlumbing.webp",
    },
  ];

  const animationDelays = [
    "animation-delay-100",
    "animation-delay-200",
    "animation-delay-300",
    "animation-delay-400",
    "animation-delay-500",
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-24 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Expert Repairs for Your{" "}
            <span className="text-blue-500">
              Appliances <span className="text-gray-900">&</span> Home Systems
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t let a mechanical failure disrupt your day. Our licensed
            technicians specialize in restoring function to your kitchen,
            laundry, and climate systems with 20+ years of professional
            expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                animationDelays[index % animationDelays.length]
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <ServiceCard
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
