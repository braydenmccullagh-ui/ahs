"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideDirection, setSlideDirection] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const SWIPE_THRESHOLD = 50;

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

  const reviews = [
    {
      id: 1,
      name: "Sally Dollar",
      location: "Niagara Region",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXMtrnMpUx21GgSyWB2UKCqevRo_FopA2e5BdRTprT_ZnRTPjiA=w72-h72-p-rp-mo-br100",
      rating: 5,
      review:
        "Matt was at my house within 2 hours of my call. He quickly determined the dishwasher pump was broken and honestly suggested I buy a new one rather than overpaying for a repair. He even helped me install a dog door I was struggling with! His kindness made me cry, the world needs more people like him.",
    },
    {
      id: 2,
      name: "Ken Albu",
      location: "Niagara Region",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVyWVpkGHlsG8NYEOSHeGRGxdWyhNQGidvguDSlZW_Bq9Y76fA=w72-h72-p-rp-mo-ba2-br100",
      rating: 5,
      review:
        "Had a furnace issue New Year's Day and he came out straight away. Resolved the problem and was very reasonable on price. Don't hesitate to call him.",
    },
    {
      id: 3,
      name: "Rita Leslie",
      location: "Niagara Region",
      rating: 5,
      review:
        "I would highly recommend Matt, he showed up ready to tackle all concerns in icy weather. I had 3 appliances giving me great stress—stove, fridge, and dryer, and they were all quickly fixed and working smoothly again. Thanks for putting my day at peace!",
    },
    {
      id: 4,
      name: "Wenday Vanderwyk",
      location: "Niagara Region",
      rating: 5,
      review:
        "Matt actually picks up the phone! He was early for our appointment and got straight to work installing a new rain shower head and toilet seat. Everything was done properly, he reads instructions, and he cleaned up after. Great guy, trustworthy, and does great work!",
    },
    {
      id: 5,
      name: "Carina Bateman",
      location: "Niagara Region",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWF61N4pUpDAHeSY9uTx-_eeFhC0Td2soI83kp3NMmnOFAE_MLa=w72-h72-p-rp-mo-br100",
      rating: 5,
      review:
        "Highly recommend. He was quick at getting back to us and very kind. He was upfront and honest about our dishwasher, and since our freezer was also on the fritz, he fixed it the same day. We have already recommended him to family.",
    },
    {
      id: 6,
      name: "Elissa Blowe",
      location: "Niagara Region",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV8rkWlE-newHuvw_4SKbb4ymGOfSXv-dpN7sdsY7kn2f5fd0TP=w72-h72-p-rp-mo-br100",
      rating: 5,
      review:
        "Matt is honest, pays attention to details, does everything right, and he does it all with a smile. I highly recommend. He's on my speed dial!",
    },
  ];

  const animateSlide = useCallback(
    (direction: string, newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSlideDirection(direction);

      setTimeout(() => {
        setCurrentIndex(newIndex);
        setSlideDirection(direction === "left" ? "enter-right" : "enter-left");

        setTimeout(() => {
          setSlideDirection(null);
          setIsAnimating(false);
        }, 300);
      }, 300);
    },
    [isAnimating]
  );

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    const newIndex =
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    animateSlide("right", newIndex);
  }, [isAnimating, currentIndex, reviews.length, animateSlide]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    const newIndex =
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    animateSlide("left", newIndex);
  }, [isAnimating, currentIndex, reviews.length, animateSlide]);

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    const direction = index > currentIndex ? "left" : "right";
    animateSlide(direction, index);
  };

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (dragOffset > SWIPE_THRESHOLD) {
      goToPrevious();
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      goToNext();
    }
    setDragOffset(0);
  }, [dragOffset, goToPrevious, goToNext]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnimating) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    handleDragEnd();
  };

  // Mouse handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return;
    const currentX = e.clientX;
    setDragOffset(currentX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const currentReview = reviews[currentIndex];

  const getSlideClass = () => {
    if (isDragging) return "";
    switch (slideDirection) {
      case "left":
        return "animate-slide-out-left";
      case "right":
        return "animate-slide-out-right";
      case "enter-left":
        return "animate-slide-in-left";
      case "enter-right":
        return "animate-slide-in-right";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-16 sm:py-24 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-out-left {
          animation: slideOutLeft 0.3s ease-out forwards;
        }
        .animate-slide-out-right {
          animation: slideOutRight 0.3s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Trusted by <span className="text-blue-500">Niagara</span> Families
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it. See why homeowners from
            Niagara Region rely on Audy&apos;s Home Services.
          </p>
        </div>

        {/* Review Carousel */}
        <div
          className={`flex items-center justify-center gap-4 sm:gap-8 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Left Arrow - Desktop only */}
          <button
            onClick={goToPrevious}
            className="shrink-0 w-14 h-14 rounded-full bg-gray-900 text-white hidden sm:flex items-center justify-center hover:bg-gray-800 hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Review Card */}
          <div
            className="flex-1 min-w-0 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            style={{ touchAction: "pan-y pinch-zoom" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
          >
            <div className="p-2">
              <div
                key={`${currentReview.id}-${slideDirection}`}
                className={getSlideClass()}
                style={
                  isDragging
                    ? {
                        transform: `translateX(${dragOffset}px)`,
                        transition: "none",
                      }
                    : {}
                }
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${currentIndex + 1} of ${reviews.length}`}
              >
                <ReviewCard
                  name={currentReview.name}
                  location={currentReview.location}
                  rating={currentReview.rating}
                  review={currentReview.review}
                  image={currentReview.image}
                />
              </div>
            </div>
          </div>

          {/* Right Arrow - Desktop only */}
          <button
            onClick={goToNext}
            className="shrink-0 w-14 h-14 rounded-full bg-gray-900 text-white hidden sm:flex items-center justify-center hover:bg-gray-800 hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          className={`flex justify-center gap-2 mt-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          role="tablist"
          aria-label="Review navigation"
        >
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Arrows - Below dots */}
        <div
          className={`flex sm:hidden justify-center gap-4 mt-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          <button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all duration-200"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all duration-200"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
