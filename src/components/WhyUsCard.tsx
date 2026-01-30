"use client";

import { ReactNode } from "react";

interface WhyUsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
}

export default function WhyUsCard({
  icon,
  title,
  description,
  isExpanded,
  onClick,
}: WhyUsCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 ${
        isExpanded ? "bg-white shadow-lg" : "bg-gray-100 hover:bg-gray-200"
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isExpanded
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600 shadow-sm"
          }`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`font-semibold flex-1 transition-colors duration-300 ${
            isExpanded ? "text-gray-900" : "text-gray-700"
          }`}
        >
          {title}
        </h3>

        {/* Arrow Icon */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isExpanded
              ? "bg-gray-900 text-white rotate-45"
              : "bg-white text-gray-400 shadow-sm"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>

      {/* Description - Expandable */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm sm:text-base pl-14 sm:pl-16">
          {description}
        </p>
      </div>
    </div>
  );
}
