import Container from "@/components/container";
import Link from "next/link";
import Gallery from "@/components/gallery";

// Featured show photos from Night Sun Stables riders.
const showRingPhotos = [
  { src: "/uploads/30e80dbe04aaa155d249d561d855971d798c1db0-425x567.webp", alt: "Night Sun Stables rider preparing to show at a horse show" },
  { src: "/uploads/4b1a73d1551ae375856553425a22f60ae7cf13cf-425x567.webp", alt: "Riders performing in front of a crowd at a horse show" },
  { src: "/uploads/7ecbf51b788aae646ab9375e6a80ee98ed0189d8-425x492.webp", alt: "Young riders showing their horses to the crowd" },
  { src: "/uploads/494d37492e2fd43937ff9602f3811187855cf774-425x389.webp", alt: "A Night Sun Stables rider celebrating success at a horse show" }
];

// 4-H show photos from Night Sun Stables riders.
const fourHPhotos = [
  { src: "/uploads/competition-4h/fourh-01.jpg", alt: "Night Sun Stables 4-H rider with her award ribbons at the fair" },
  { src: "/uploads/competition-4h/fourh-02.jpg", alt: "Young rider on a decorated horse at the 4-H fair" },
  { src: "/uploads/competition-4h/fourh-03.jpg", alt: "4-H rider in western show attire holding an award beside her horse" },
  { src: "/uploads/competition-4h/fourh-04.jpg", alt: "4-H rider in western show attire with her chestnut horse" },
  { src: "/uploads/competition-4h/fourh-05.jpg", alt: "4-H rider showing her horse at the fair" },
  { src: "/uploads/competition-4h/fourh-06.jpg", alt: "4-H rider leading her horse in the show ring" }
];

// Carmen's own show history.
const carmenPhotos = [
  { src: "/uploads/carmen-show-days/show-01.jpg", alt: "Carmen Hurley showing hunt seat at the 1989 All American Quarter Horse Congress" },
  { src: "/uploads/carmen-show-days/show-04.jpg", alt: "Carmen Hurley riding hunt seat at the 1989 All American Quarter Horse Congress" },
  { src: "/uploads/carmen-show-days/show-03.jpg", alt: "Carmen Hurley competing at the 1989 Indiana State Fair" }
];

const buildsList = [
  {
    title: "Skill & Discipline",
    body: "Show preparation sharpens a rider's technique and focus, building the partnership and control that judges reward in the ring."
  },
  {
    title: "Confidence Under Pressure",
    body: "Performing in front of a crowd teaches poise and composure. Riders learn to keep a level head and enjoy the moment."
  },
  {
    title: "Life Lessons",
    body: "Practice, patience, and perseverance carry far beyond the arena, teaching responsibility, time management, and goal-setting."
  }
];

export default function Competition({ faqs }) {
  return (
    <Container>
      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Competitive Horseback Riding in Evansville, Indiana
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Ready to take your riding to the show ring? At Night Sun
          Stables in Evansville, IN, we prepare riders of all ages for
          4-H, open shows, and beyond, in both English and western
          classes, coached by a trainer who has competed at the highest
          levels herself.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Start Your Show Journey
        </Link>
      </section>

      {/* Show photos */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-semibold">
          In the Show Ring
        </h2>
        <Gallery images={showRingPhotos} columns={2} />
      </section>

      {/* What competing builds */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold">
          What Competing Builds
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {buildsList.map((b, i) => (
            <div key={i} className="section-band p-6">
              <h3 className="text-xl font-semibold text-barn-800">
                {b.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-H riders */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold">
          Our 4-H Riders
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          From the fairgrounds to the winner&apos;s circle, our riders
          take on 4-H shows with confidence and bring home the ribbons.
        </p>
        <Gallery images={fourHPhotos} />
      </section>

      {/* Coached by a competitor */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold text-barn-800">
          Coached by a Competitor
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Our competitive program is led by someone who has been in the
          ring. Carmen Hurley competed at the Indiana State Fair and the
          All American Quarter Horse Congress in both English and western
          classes, and she brings that show-ring know-how to every rider
          preparing to compete.
        </p>
        <Gallery images={carmenPhotos} />
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Competition FAQs
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
          Ready to compete?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send us a message to talk about your show goals.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Contact Us About Competing
        </Link>
      </section>
    </Container>
  );
}
