import Container from "@/components/container";
import Link from "next/link";
import Gallery from "@/components/gallery";
import CampSchedule from "@/components/campSchedule";

// Curated highlights pulled from our camp photo galleries.
const campPhotos = [
  { src: "/uploads/spring-camp-day-1/camp-04.jpg", alt: "Young camper riding a paint horse at a Night Sun Stables camp in Evansville" },
  { src: "/uploads/summer-camp-2026/summer-13.jpg", alt: "Campers with a rainbow-painted horse at summer camp" },
  { src: "/uploads/three-day-camp/day3-12.jpg", alt: "Camper grooming a donkey at horse camp" },
  { src: "/uploads/spa-day/spa-07.jpg", alt: "Smiling camper riding a horse in the indoor arena" },
  { src: "/uploads/spring-camp-day-1/camp-09.jpg", alt: "Camper leading a horse through a cone obstacle course" },
  { src: "/uploads/patriotic-camp/patriotic-05.jpg", alt: "Campers with a horse painted like the American flag" },
  { src: "/uploads/summer-camp-2026/summer-03.jpg", alt: "Camper leading a horse out to graze at camp" },
  { src: "/uploads/three-day-camp/day3-06.jpg", alt: "Parts-of-the-horse learning station at camp" }
];

const doList = [
  {
    title: "Ride Every Day",
    body: "Campers ride daily and build real skills in the saddle, from first-timers learning the basics to returning riders sharpening their seat."
  },
  {
    title: "Hands-On Horse Care",
    body: "Grooming, tacking up, and learning the parts of the horse. Kids leave knowing how to safely handle and care for a horse."
  },
  {
    title: "Crafts, Games & Painting",
    body: "Horsemanship games, obstacle courses, crafts, and our famous (washable!) horse painting keep every day fun and hands-on."
  },
  {
    title: "Meet the Whole Herd",
    body: "From gentle lesson horses to the mini and the donkey, campers make friends with the animals that call Night Sun Stables home."
  }
];

// Links out to past-camp photo galleries under /archive.
const pastCamps = [
  { slug: "summer-camp-2026", label: "Summer Camp" },
  { slug: "three-day-camp", label: "3-Day Camp" },
  { slug: "patriotic-camp", label: "Patriotic Camp" },
  { slug: "spring-camp-day-1", label: "Spring Camp" },
  { slug: "spa-day", label: "Spa Day Camp" }
];

export default function YouthCamps({ faqs }) {
  return (
    <Container>
      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Horse Camps for Kids in Evansville, Indiana
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Give your child an unforgettable summer at Night Sun Stables.
          Our horse camps in Evansville, IN welcome kids of all ages and
          skill levels for riding, hands-on horse care, crafts, and
          games, all led by experienced, caring staff. No experience
          needed, and with our indoor arena, camp runs rain or shine.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Reserve a Camp Spot
        </Link>
      </section>

      {/* Photo highlights */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-semibold">
          A Look at Camp
        </h2>
        <Gallery images={campPhotos} />
      </section>

      {/* What campers do */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold">
          What Campers Do
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {doList.map((d, i) => (
            <div key={i} className="section-band p-6">
              <h3 className="text-xl font-semibold text-barn-800">
                {d.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule + program list with pricing */}
      <CampSchedule />

      {/* FAQ */}
      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Camp FAQs
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

      {/* Past camp galleries */}
      <section className="mt-14 text-center">
        <h2 className="text-2xl font-semibold">
          See More from Past Camps
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Take a peek at what our campers have been up to.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {pastCamps.map(c => (
            <Link
              key={c.slug}
              href={`/archive/${c.slug}`}
              className="rounded-full border border-cream-300 bg-cream-100 px-5 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-cream-200 dark:border-stone-800 dark:bg-stone-800">
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-band mx-auto mt-14 max-w-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to sign up for camp?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send us a message to check dates and reserve a spot.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Contact Night Sun Stables
        </Link>
      </section>
    </Container>
  );
}
