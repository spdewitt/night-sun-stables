import Competition from "./competition";

export const metadata = {
  title:
    "Competitive Horse Riding Lessons in Evansville, IN | Night Sun Stables",
  description:
    "Competitive horseback riding training in Evansville, IN. Prepare for 4-H, open shows, and beyond in English and western classes with a John Lyons Certified trainer at Night Sun Stables.",
  keywords: [
    "Evansville horse show training",
    "competitive riding lessons Evansville IN",
    "4-H horse Evansville",
    "show horse training Evansville",
    "English and western show lessons"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/competition"
  }
};

const faqs = [
  {
    q: "Do you train riders to compete?",
    a: "Yes. We coach riders who want to show, from their very first class to more advanced competition, in both English and western disciplines."
  },
  {
    q: "What kinds of shows do riders compete in?",
    a: "Our riders compete in 4-H, local and open shows around the Evansville area, and larger shows as they progress. We help match each rider to the right classes and goals."
  },
  {
    q: "Do I need my own horse to compete?",
    a: "Not to start. You can learn and even show on our lesson horses, and we'll guide you if and when you're ready for a horse of your own or a lease."
  },
  {
    q: "What ages and skill levels do you work with?",
    a: "All of them. Whether your child is stepping into the ring for the first time or you're an adult rider chasing a bigger goal, training is tailored to you."
  },
  {
    q: "How do I get started?",
    a: "Call (812) 499-3403 or send a message through our contact form and we'll talk through your goals and set up your first lesson."
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

export default function CompetitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Competition faqs={faqs} />
    </>
  );
}
