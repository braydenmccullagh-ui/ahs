import type { Metadata, Viewport } from "next";
import "../index.css";

// Business information for SEO
const businessInfo = {
  name: "Audy's Home Services",
  description:
    "Professional appliance repair, furnace repair, and plumbing services in the Niagara Region. Fast, affordable repairs for refrigerators, dishwashers, ovens, washers, dryers, furnaces, and fixtures. 20+ years experience. Serving St. Catharines, Niagara Falls, Welland, and Fort Erie.",
  phone: "(289) 501-1977",
  email: "mattaudy@hotmail.com",
  url: "https://audyshomeservices.com",
  address: {
    region: "Niagara Region",
    city: "St. Catharines",
    province: "Ontario",
    country: "Canada",
  },
  services: [
    "Refrigerator Repair",
    "Freezer Repair",
    "Dishwasher Repair",
    "Oven Repair",
    "Stove Repair",
    "Washer Repair",
    "Dryer Repair",
    "Furnace Repair",
    "Fireplace Repair",
    "Plumbing Fixtures",
  ],
  serviceAreas: [
    "St. Catharines",
    "Niagara Falls",
    "Welland",
    "Fort Erie",
    "Niagara-on-the-Lake",
    "Thorold",
    "Port Colborne",
    "Grimsby",
    "Lincoln",
    "Pelham",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default:
      "Audy's Home Services | Appliance & Furnace Repair | Niagara Region",
    template: "%s | Audy's Home Services",
  },
  description: businessInfo.description,
  keywords: [
    // Primary keywords
    "appliance repair Niagara",
    "appliance repair St Catharines",
    "appliance repair Niagara Falls",
    "furnace repair Niagara",
    "furnace repair St Catharines",
    // Service-specific keywords
    "refrigerator repair Niagara",
    "fridge repair St Catharines",
    "dishwasher repair Niagara",
    "oven repair Niagara",
    "stove repair St Catharines",
    "washer dryer repair Niagara",
    "washing machine repair St Catharines",
    "dryer repair Niagara Falls",
    "furnace repair Welland",
    "fireplace repair Niagara",
    "plumber St Catharines",
    "plumbing repair Niagara",
    // Long-tail keywords
    "emergency appliance repair Niagara",
    "same day appliance repair St Catharines",
    "affordable appliance repair Niagara Region",
    "licensed appliance technician Niagara",
    "home appliance repair near me",
    // Location keywords
    "Welland appliance repair",
    "Fort Erie appliance repair",
    "Thorold appliance repair",
    "Niagara-on-the-Lake appliance repair",
  ],
  authors: [{ name: "Audy's Home Services" }],
  creator: "Audy's Home Services",
  publisher: "Audy's Home Services",

  // Canonical URL
  metadataBase: new URL(businessInfo.url),
  alternates: {
    canonical: "/",
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: businessInfo.url,
    siteName: businessInfo.name,
    title:
      "Audy's Home Services | Expert Appliance & Furnace Repair | Niagara Region",
    description:
      "Fast, affordable appliance and furnace repairs in the Niagara Region. 20+ years experience. Serving St. Catharines, Niagara Falls, Welland & Fort Erie.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Audy's Home Services - Professional Appliance Repair in Niagara Region",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Audy's Home Services | Appliance & Furnace Repair | Niagara Region",
    description:
      "Fast, affordable appliance and furnace repairs. 20+ years experience. Serving the Niagara Region.",
    images: ["/og-image.jpg"],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Icons
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  // Category
  category: "Home Services",

  // Other
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#business`,
      name: businessInfo.name,
      description: businessInfo.description,
      url: businessInfo.url,
      telephone: businessInfo.phone,
      email: businessInfo.email,
      image: `${businessInfo.url}/og-image.jpg`,
      logo: `${businessInfo.url}/logo.svg`,
      priceRange: "$$",
      currenciesAccepted: "CAD",
      paymentAccepted: "Cash, Credit Card, Debit Card, E-Transfer",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Ontario",
        addressCountry: "CA",
        addressLocality: "St. Catharines",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.1594,
        longitude: -79.2469,
      },
      areaServed: businessInfo.serviceAreas.map(area => ({
        "@type": "City",
        name: area,
        "@id": `${businessInfo.url}/#${area
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "12:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61584620647194",
        "https://www.instagram.com/matt.audy/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Repair Services",
        itemListElement: businessInfo.services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
            description: `Professional ${service.toLowerCase()} services in the Niagara Region`,
          },
          position: index + 1,
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${businessInfo.url}/#website`,
      url: businessInfo.url,
      name: businessInfo.name,
      description: businessInfo.description,
      publisher: {
        "@id": `${businessInfo.url}/#business`,
      },
      inLanguage: "en-CA",
    },
    {
      "@type": "WebPage",
      "@id": `${businessInfo.url}/#webpage`,
      url: businessInfo.url,
      name: "Audy's Home Services | Professional Appliance & Furnace Repair",
      isPartOf: {
        "@id": `${businessInfo.url}/#website`,
      },
      about: {
        "@id": `${businessInfo.url}/#business`,
      },
      description: businessInfo.description,
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
