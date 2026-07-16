import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from "next/script";

// Rebuild pages at most once a day so the Facebook feed refreshes
// without a manual redeploy.
export const revalidate = 86400;

const siteUrl = "https://www.nightsunstables.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Night Sun Stables",
  description:
    "Night Sun Stables offers horse boarding, training, leasing and lessons for all ages and skill levels. We host Youth Camps and birthday parties.",
  image: `${siteUrl}/img/opengraph.jpg`,
  url: siteUrl,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "38.116517",
    longitude: "-87.514311"
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Night+Sun+Stables+2601+Night+Sun+Dr+Evansville+IN+47725",
  areaServed: [
    { "@type": "City", name: "Evansville" },
    { "@type": "City", name: "Newburgh" },
    { "@type": "City", name: "McCutchanville" },
    { "@type": "City", name: "Darmstadt" },
    { "@type": "City", name: "Henderson" }
  ],
  sameAs: [
    "https://www.facebook.com/CarmenNHurley",
    "https://www.yelp.com/biz/night-sun-stables-evansville",
    "https://nextdoor.com/pages/night-sun-stables-evansville-in/"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2601 Night Sun Dr",
    addressLocality: "Evansville",
    addressRegion: "IN",
    postalCode: "47725",
    addressCountry: "US"
  },
  telephone: "+18124993403",
  priceRange: "$$",
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
        "Sunday"
      ],
      opens: "08:00",
      closes: "20:00"
    }
  ]
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Night Sun Stables | Horseback Riding Lessons and Camps in Evansville",
    template: "%s"
  },
  description:
    "Night Sun Stables offers horse boarding, lessons, youth camps and birthday parties in Evansville, IN for all ages and skill levels.",
  keywords: [
    "Horse Riding Evansville",
    "Horse riding Evansville",
    "horseback riding evansville"
  ],
  authors: [{ name: "Carmen Hurley" }],
  openGraph: {
    siteName: "Night Sun Stables",
    type: "website",
    locale: "en_US",
    images: [
      { url: "/img/opengraph.jpg", width: 800, height: 600 }
    ]
  },
  twitter: {
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Layout({ children }) {
  return (
    <>
      {/* LocalBusiness structured data, site-wide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K02XYN136N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-K02XYN136N', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
