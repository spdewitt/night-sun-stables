import { sanityClient } from "@/lib/sanity.client";
import { youthCampsQuery } from "@/lib/queries";
import Contact from "./youth-camps";

export const metadata = {
  title: "Evansville Youth Camps | Night Sun Stables",
  description:
    "Night Sun Stables offers summer horse camps for kids in Evansville, IN. Learn to ride, care for and communicate with horses at Night Sun Stables.",
  keywords: [
    "Evansville summer camp",
    "Evansville horse camp",
    "Evansville horse riding camp",
    "Evansville youth camp",
    "Evansville horseback riding camp"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/youth-camps"
  }
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "3-Day Summer Horse Camp",
  startDate: "2026-08-03T10:00",
  endDate: "2026-08-05T14:30",
  eventAttendanceMode:
    "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description:
    "A 3-day summer horse camp for kids ages 6 and up at Night Sun Stables in Evansville, IN. Ride twice a day plus crafts, games, and hands-on horse care.",
  location: {
    "@type": "Place",
    name: "Night Sun Stables",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2601 Night Sun Dr",
      addressLocality: "Evansville",
      addressRegion: "IN",
      postalCode: "47725",
      addressCountry: "US"
    }
  },
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.nightsunstables.com/youth-camps"
  },
  organizer: {
    "@type": "Organization",
    name: "Night Sun Stables",
    url: "https://www.nightsunstables.com"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(youthCampsQuery);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema)
        }}
      />
      <Contact data={data} />
    </>
  );
}

// export const revalidate = 60;
