import Container from "@/components/container";
import Link from "next/link";

export const metadata = {
  title: "Horse Birthday Parties in Evansville, IN | Night Sun Stables",
  description:
    "Unforgettable horse-themed birthday parties in Evansville, IN. Pony rides, horse care, and hands-on fun for kids of all ages at Night Sun Stables.",
  keywords: [
    "Evansville birthday party",
    "horse birthday party Evansville",
    "pony party Evansville IN",
    "kids birthday party Evansville",
    "horse party Evansville"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/birthday-parties"
  }
};

const highlights = [
  {
    title: "Time in the Saddle",
    body: "Every guest gets a chance to ride, led by our experienced, safety-first staff on gentle, kid-friendly horses."
  },
  {
    title: "Meet & Groom the Horses",
    body: "Kids learn to brush, pet, and care for the horses up close, a hands-on experience they'll be talking about for weeks."
  },
  {
    title: "A Beautiful Barn Setting",
    body: "Celebrate at our Evansville farm with indoor and outdoor space, so the party goes on rain or shine."
  },
  {
    title: "Memories & Photos",
    body: "Picture-perfect moments with the horses that make for a birthday the whole family will remember."
  }
];

const faqs = [
  {
    q: "What ages are horse birthday parties for?",
    a: "Our parties work great for a wide range of ages. We tailor the riding and activities to the group, from young children to older kids and even adult celebrations."
  },
  {
    q: "How many guests can you host?",
    a: "Party size and format are flexible. Contact us at (812) 499-3403 with your date and group size and we'll build a party that fits."
  },
  {
    q: "Where are you located?",
    a: "Night Sun Stables is at 2601 Night Sun Dr on the north side of Evansville, Indiana, serving Evansville, Newburgh, and surrounding communities."
  },
  {
    q: "How do I book a party?",
    a: "Reach out through our contact form or call (812) 499-3403 to check available dates and reserve your spot."
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

export default function BirthdayPartiesPage() {
  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Horse Birthday Parties in Evansville
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Give your child a birthday they&apos;ll never forget. Riding,
          grooming, and hands-on horse fun at our Evansville farm. A
          magical day for horse-loving kids of all ages.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Plan a Birthday Party
        </Link>
      </section>

      {/* Highlights */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {highlights.map((h, i) => (
          <div key={i} className="section-band p-6">
            <h2 className="text-xl font-semibold text-barn-800">
              {h.title}
            </h2>
            <p className="mt-2 leading-relaxed text-gray-600">
              {h.body}
            </p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Party FAQs
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
          Ready to book the big day?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send us a message to check available dates.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Contact Night Sun Stables
        </Link>
      </section>
    </Container>
  );
}
