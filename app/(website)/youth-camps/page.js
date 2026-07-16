import YouthCamps from "./youth-camps";

export const metadata = {
  title: "Horse Camps for Kids in Evansville, IN | Night Sun Stables",
  description:
    "Summer and fall horse camps for kids in Evansville, IN. Riding, grooming, crafts, and hands-on horse care for all ages and skill levels at Night Sun Stables.",
  keywords: [
    "Evansville horse camp",
    "summer horse camp Evansville IN",
    "kids horse camp Evansville",
    "youth riding camp Evansville",
    "horseback riding camp for kids",
    "day camp Evansville Indiana"
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

const faqs = [
  {
    q: "What ages are your horse camps for?",
    a: "We offer camps for a wide range of ages. Mini camps are for ages 3–6 with a parent or guardian, and our 3-day and themed day camps welcome kids ages 6 and up. There's a camp for every age and experience level."
  },
  {
    q: "Does my child need riding experience?",
    a: "No experience needed. Our camps welcome first-time riders and experienced kids alike, with instruction matched to each camper's level in a safe, supportive setting."
  },
  {
    q: "What do campers do each day?",
    a: "Campers ride, learn to groom and care for the horses, play horsemanship games, do crafts, and take on fun challenges like obstacle courses, all under the guidance of experienced staff."
  },
  {
    q: "Where are your camps located?",
    a: "Night Sun Stables is at 2601 Night Sun Dr on the north side of Evansville, Indiana, serving Evansville, Newburgh, and the surrounding communities. With an indoor arena, camp runs rain or shine."
  },
  {
    q: "How do I register for a camp?",
    a: "Call us at (812) 499-3403 or send a message through our contact form to check current dates and reserve your child's spot. Camps fill up, so early registration is encouraged."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

export default function YouthCampsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <YouthCamps faqs={faqs} />
    </>
  );
}
