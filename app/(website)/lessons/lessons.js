import Container from "@/components/container";
import Link from "next/link";
import Gallery from "@/components/gallery";

// Instructor-led lesson photos.
const lessonPhotos = [
  { src: "/uploads/three-day-camp/day3-10.jpg", alt: "An instructor leads a young rider on horseback during a lesson at Night Sun Stables in Evansville" },
  { src: "/uploads/spa-day/spa-02.jpg", alt: "An instructor leads a beginner rider on a paint horse in the arena" },
  { src: "/uploads/spring-camp-day-1/camp-03.jpg", alt: "An instructor teaches a student to groom a paint horse" },
  { src: "/uploads/summer-camp-2026/summer-01.jpg", alt: "A young rider and paint horse in the arena during a riding lesson" },
  { src: "/uploads/summer-camp-2026/summer-10.jpg", alt: "Students and horse working on groundwork and confidence exercises" }
];

const learnList = [
  {
    title: "Riding Fundamentals",
    body: "Balance, seat, steering, and control at the walk, trot, and canter, built step by step so every rider feels secure in the saddle."
  },
  {
    title: "Horse Care & Safety",
    body: "Grooming, tacking up, and safe handling on the ground. Riders learn to work around horses with confidence and care."
  },
  {
    title: "Connection & Communication",
    body: "Groundwork and gentle, proven methods that teach riders to truly partner with their horse, not just sit on top of one."
  },
  {
    title: "Progress at Your Pace",
    body: "From a first-ever ride to preparing for the show ring, lessons meet you where you are and grow with your goals."
  }
];

export default function Lessons({ faqs }) {
  return (
    <Container>
      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Horseback Riding Lessons in Evansville, Indiana
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Learn to ride at Night Sun Stables. We offer horseback riding
          lessons in Evansville, IN for all ages and skill levels, from
          first-time beginners to competitive riders. English and western,
          on gentle lesson horses, taught by a John Lyons Certified trainer
          in a safe, encouraging setting, year-round in our indoor arena.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Book Your First Lesson
        </Link>
      </section>

      {/* Photos */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-semibold">
          Lessons in Action
        </h2>
        <Gallery images={lessonPhotos} />
      </section>

      {/* What you'll learn */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold">
          What You&apos;ll Learn
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {learnList.map((l, i) => (
            <div key={i} className="section-band p-6">
              <h3 className="text-xl font-semibold text-barn-800">
                {l.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="section-band mx-auto mt-14 max-w-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Learn from Carmen Hurley
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-600">
          Owner and instructor Carmen Hurley is a John Lyons Certified
          trainer who has been competing since the 1980s and building
          confident riders in Evansville since 1997. Every rider gets
          hands-on instruction from someone who has been in the show ring
          herself.
        </p>
        <Link
          href="/archive/carmen-show-days"
          className="mt-4 inline-block font-medium text-forest-700 hover:underline">
          See Carmen&apos;s show days →
        </Link>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Riding Lesson FAQs
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
      <section className="section-band mx-auto mt-14 max-w-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to start riding?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send us a message to schedule your first lesson.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Contact Night Sun Stables
        </Link>
      </section>
    </Container>
  );
}
