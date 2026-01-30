import Image from "next/image";

interface ReviewCardProps {
  name: string;
  location?: string;
  rating: number;
  review: string;
  image?: string;
  className?: string;
}

export default function ReviewCard({
  name,
  location,
  rating,
  review,
  image,
  className = "",
}: ReviewCardProps) {
  return (
    <div
      className={`group h-full min-h-[280px] flex flex-col bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="text-gray-600 leading-relaxed grow line-clamp-5">
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-6">
        {/* Avatar */}
        {image ? (
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
        )}

        {/* Name & Location */}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          {location && <p className="text-sm text-gray-500">{location}</p>}
        </div>
      </div>
    </div>
  );
}
