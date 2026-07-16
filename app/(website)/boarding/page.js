import Container from "@/components/container";
import Link from "next/link";

export const metadata = {
  title: "Horse Boarding in Evansville, IN | Night Sun Stables",
  description:
    "Full-service horse boarding in Evansville, IN. 12x12 matted stalls, indoor and outdoor arenas, daily care, and year-round riding at Night Sun Stables.",
  keywords: [
    "Evansville horse boarding",
    "horse boarding Evansville IN",
    "horse stables Evansville",
    "full care horse boarding Evansville"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/boarding"
  }
};

const features = [
  {
    title: "12x12 Matted Stalls",
    body: "Every stall is a full 12x12 and fully matted for comfort. We offer both indoor stalls and a shed-row option to suit your horse."
  },
  {
    title: "Indoor & Outdoor Arenas",
    body: "Ride year-round no matter the weather. Our indoor arena keeps you going through rain, heat, and winter, with a spacious outdoor arena for open-air work."
  },
  {
    title: "Daily Care You Can Trust",
    body: "Feeding, turnout, and stall cleaning handled by experienced horse people. Owner Carmen Hurley is a John Lyons Certified trainer on-site."
  },
  {
    title: "A Welcoming Community",
    body: "Boarders at Night Sun Stables are part of a friendly, supportive barn family that has been building confident riders in Evansville since 1997."
  }
];

const faqs = [
  {
    q: "What type of boarding do you offer?",
    a: "We offer full-care boarding with 12x12 matted stalls, both indoor and shed-row options, daily feeding and turnout, and access to our indoor and outdoor arenas."
  },
  {
    q: "Where are you located?",
    a: "Night Sun Stables is on the north side of Evansville, Indiana at 2601 Night Sun Dr, serving Evansville, Newburgh, and the surrounding Southern Indiana communities."
  },
  {
    q: "Can I take lessons where I board?",
    a: "Yes. We offer horseback riding lessons for all ages and skill levels right where you board, so you can grow as a rider without hauling your horse."
  },
  {
    q: "How do I check availability?",
    a: "Boarding availability changes throughout the year. Contact us at (812) 499-3403 or through our contact form and we'll let you know current openings."
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

export default function BoardingPage() {
  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Horse Boarding in Evansville, Indiana
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          A safe, welcoming home for your horse on Evansville&apos;s
          north side. Full-care boarding with matted stalls, indoor and
          outdoor arenas, and year-round riding.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Check Boarding Availability
        </Link>
      </section>

      {/* Features */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="section-band p-6">
            <h2 className="text-xl font-semibold text-barn-800">
              {f.title}
            </h2>
            <p className="mt-2 leading-relaxed text-gray-600">
              {f.body}
            </p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Boarding FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-cream-300 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <h3 className="font-semibold text-barn-800">{f.q}</h3>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-band mx-auto mt-12 max-w-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to bring your horse home?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call us at{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send a message to ask about current openings.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Contact Night Sun Stables
        </Link>
      </section>
    </Container>
  );
}
