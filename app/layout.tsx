import type { Metadata, Viewport } from "next";
import { Syne, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { GYM_DATA } from "@/data/gymData";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Peter's Gym | Premium Fitness & Strength Training in Purulia",
  description:
    "Peter's Gym in Purulia, West Bengal — 4.7★ rated premier fitness hub. Strength training, personal coaching, cardio conditioning, cross-training, aerobics & yoga on S Lake Road.",
  keywords: [
    "Peter's Gym",
    "Gym in Purulia",
    "Purulia Gym",
    "Fitness center Purulia",
    "S Lake Road Purulia Gym",
    "Strength training Purulia",
    "Personal training Purulia",
    "Best gym in Purulia",
  ],
  authors: [{ name: "Peter's Gym" }],
  openGraph: {
    title: "Peter's Gym | Premium Fitness & Strength Training in Purulia",
    description:
      "Forge your best self at Peter's Gym. 4.7★ Google Rating (337+ reviews). Heavy strength equipment, personal training, steam bath & cardio in Purulia.",
    url: "https://petersgym.in",
    siteName: "Peter's Gym",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: GYM_DATA.name,
    legalName: GYM_DATA.legalName,
    description:
      "Premier fitness and strength training facility in Purulia offering commercial strength equipment, personal coaching, cardio conditioning, aerobics, and yoga.",
    telephone: GYM_DATA.contact.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: GYM_DATA.contact.address.street,
      addressLocality: GYM_DATA.contact.address.city,
      addressRegion: GYM_DATA.contact.address.state,
      postalCode: GYM_DATA.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GYM_DATA.contact.address.embedCoordinates.lat,
      longitude: GYM_DATA.contact.address.embedCoordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "337",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    priceRange: "₹₹",
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${bebasNeue.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-black text-[#D1D0D0] antialiased selection:bg-[#E50914] selection:text-white font-sans noise-overlay min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
