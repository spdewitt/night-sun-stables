import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import PostList from "@/components/postlist";
import { posts } from "@/lib/posts";
import { visibleGalleries } from "@/lib/galleries";

export const metadata = {
  title: "Inside Night Sun Stables",
  description:
    "An inside look at Night Sun Stables, a horse boarding, training, leasing and lessons facility in Evansville, Indiana. We host Youth Camps and birthdays.",
  keywords: [
    "Evansville horse boarding",
    "Evansville horse lessons",
    "Evansville horse training",
    "Evansville horse leasing",
    "Evansville horse camps",
    "Evansville horse events"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/archive"
  }
};

export default function ArchivePage() {
  const galleries = visibleGalleries();
  return (
    <Container className="relative">
      <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
        An Inside Look at Night Sun Stables
      </h1>

      {galleries.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-semibold">
            Photo Galleries
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleries.map(g => {
              // Optional 1-based thumbnailIndex picks a specific image
              // for the card; defaults to the first image.
              const thumb =
                g.images[(g.thumbnailIndex || 1) - 1] || g.images[0];
              return (
              <Link
                key={g.slug}
                href={`/archive/${g.slug}`}
                className="card group block">
                <div className="relative h-56 w-full">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{g.date}</p>
                  <h3 className="text-xl font-semibold text-barn-800 group-hover:text-forest-700">
                    {g.title}
                  </h3>
                </div>
              </Link>
              );
            })}
          </div>
        </section>
      )}

      <h2 className="mb-6 mt-12 text-2xl font-semibold">
        Stories from the Barn
      </h2>

      {posts.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            Check back soon for stories from the barn!
          </span>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {posts.map(post => (
            <PostList key={post.slug} post={post} aspect="square" />
          ))}
        </div>
      )}
    </Container>
  );
}
