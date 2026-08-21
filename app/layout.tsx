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
  title: "SM Fitness | Premier Gym & Weight Training in Purulia (4.9★)",
  description:
    "SM Fitness (এসএম ফিটনেস) on SC Sen Road, Purulia — 4.9★ rated premier fitness club with 131+ verified reviews. Heavy weight training, indoor cycling, bodybuilding, personal training & fat loss.",
  keywords: [
    "SM Fitness",
    "SM Fitness Purulia",
    "Gym in Purulia",
    "Purulia Gym",
    "SC Sen Road Gym Purulia",
    "Nilkuthidanga Gym",
    "Weight training Purulia",
    "Indoor cycling Purulia",
    "Best gym in Purulia",
  ],
  authors: [{ name: "SM Fitness" }],
  openGraph: {
    title: "SM Fitness | Premier Gym & Weight Training in Purulia",
    description:
      "Transform your physique at SM Fitness Purulia. 4.9★ Google Rating (131+ reviews). Commercial weight training, indoor cycling, and certified fitness guidance.",
    url: "https://smfitnesspurulia.in",
    siteName: "SM Fitness Purulia",
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
      "Premier fitness and strength facility in Purulia offering commercial weight training equipment, indoor cycling suites, personal coaching, and bodybuilding transformation programs.",
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
      ratingValue: "4.9",
      reviewCount: "131",
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
