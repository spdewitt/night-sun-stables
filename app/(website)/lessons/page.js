import Lessons from "./lessons";

export const metadata = {
  title:
    "Horseback Riding Lessons in Evansville, IN | Night Sun Stables",
  description:
    "Horseback riding lessons in Evansville, IN for all ages and skill levels. Beginner to competition, English and western, taught by a John Lyons Certified trainer at Night Sun Stables.",
  keywords: [
    "Evansville horseback riding lessons",
    "horse riding lessons Evansville IN",
    "riding lessons for kids Evansville",
    "beginner horse lessons Evansville",
    "English and western riding lessons",
    "horse training Evansville"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/lessons"
  }
};

const faqs = [
  {
    q: "What ages do you teach?",
    a: "We teach riders of all ages, from young children to adults. Every lesson is tailored to the rider's age, comfort level, and goals."
  },
  {
    q: "Do I need any riding experience?",
    a: "Not at all. We welcome complete beginners and work at a pace that builds confidence, as well as experienced riders looking to sharpen their skills or prepare for competition."
  },
  {
    q: "Do I need my own horse?",
    a: "No. We have gentle, well-trained lesson horses, so you can learn without owning a horse. If you do have your own, you're welcome to ride it in your lessons."
  },
  {
    q: "Do you teach English or western?",
    a: "Both. Owner Carmen Hurley is a John Lyons Certified trainer with decades of show experience in both disciplines and will help you find the right fit."
  },
  {
    q: "Where are you located?",
    a: "Night Sun Stables is at 2601 Night Sun Dr on the north side of Evansville, Indiana, serving Evansville, Newburgh, and the surrounding communities. Our indoor arena means lessons continue year-round, rain or shine."
  },
  {
    q: "How do I get started?",
    a: "Call us at (812) 499-3403 or send a message through our contact form and we'll help you schedule your first lesson."
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

export default function LessonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Lessons faqs={faqs} />
    </>
  );
}
