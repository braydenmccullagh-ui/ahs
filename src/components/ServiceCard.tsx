import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  image: string;
  icon?: ReactNode;
  title: string;
  description?: string;
  items?: string[];
  className?: string;
}

export default function ServiceCard({
  image,
  icon,
  title,
  description,
  items = [],
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-6 lg:p-8 bg-gray-900 lg:bg-white text-white lg:text-gray-900 shadow-lg lg:hover:bg-gray-900 lg:hover:text-white lg:hover:scale-105 lg:hover:shadow-xl hover:cursor-pointer active:scale-100 transition-all duration-300 overflow-hidden h-full ${className}`}
    >
      {/* Background Image - always visible on mobile/tablet, hover only on desktop */}
      <div className="absolute inset-0 opacity-20 lg:opacity-0 lg:group-hover:opacity-20 transition-opacity duration-300">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/20 lg:bg-blue-100 lg:group-hover:bg-white/20 transition-colors duration-300">
            <span className="text-white lg:text-blue-500 lg:group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white lg:text-gray-900 lg:group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm mb-4 text-white/90 lg:text-gray-600 lg:group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        )}

        {/* Items List */}
        {items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-white lg:text-blue-500 lg:group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-white/90 lg:text-gray-600 lg:group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
