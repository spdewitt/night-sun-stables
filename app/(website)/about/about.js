import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/gallery";

const showPhotos = [
  { src: "/uploads/carmen-show-days/show-02.jpg", alt: "Carmen Hurley in western show attire at the 1989 All American Quarter Horse Congress" },
  { src: "/uploads/carmen-show-days/show-03.jpg", alt: "Carmen Hurley competing at the 1989 Indiana State Fair" },
  { src: "/uploads/carmen-show-days/show-05.jpg", alt: "Carmen Hurley with her horse at the 1994 Indiana State Fair" }
];

export default function AboutPage({ data }) {
  const { sections } = data;

  return (
    <Container>
      {/* Hero */}
      <section className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          About Night Sun Stables
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Night Sun Stables is a second-generation, family-owned horse
          farm on the north side of Evansville, Indiana. Owner Carmen
          Hurley is a John Lyons Certified trainer who has been building
          confident riders since 1997, with lessons, camps, boarding, and
          shows for riders of every age and skill level.
        </p>
      </section>

      {/* Story photos */}
      <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {sections &&
          sections.map((section, i) => (
            <div key={i} className="card overflow-hidden">
              {section.imageUrl && (
                <div className="relative h-72 w-full">
                  <Image
                    src={section.imageUrl}
                    alt={section.altText || "Night Sun Stables"}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <p className="p-5 leading-relaxed text-gray-600">
                {section.description}
              </p>
            </div>
          ))}
      </section>

      {/* Carmen's show history */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-semibold text-barn-800">
          A Lifetime in the Saddle
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Owner and instructor Carmen Hurley has been showing horses
          since the 1980s, competing at the Indiana State Fair and the
          All American Quarter Horse Congress. That lifetime of experience
          is what she brings to every rider at Night Sun Stables.
        </p>
        <Gallery images={showPhotos} />
      </section>

      {/* CTA */}
      <section className="section-band mx-auto mt-14 max-w-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Come meet the team
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          or send us a message to learn more or schedule a visit.
        </p>
        <Link href="/#contact-form" className="btn-primary mt-6">
          Reach Out and Meet the Team
        </Link>
      </section>
    </Container>
  );
}
