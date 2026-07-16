import Container from "@/components/container";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/gallery";
import { galleries, getGallery } from "@/lib/galleries";

export function generateStaticParams() {
  return galleries.map(g => ({ gallery: g.slug }));
}

export function generateMetadata({ params }) {
  const g = getGallery(params.gallery);
  if (!g) return {};
  return {
    title: `${g.title} | Night Sun Stables`,
    description: g.description,
    alternates: {
      canonical: `https://www.nightsunstables.com/archive/${g.slug}`
    }
  };
}

export default function GalleryPage({ params }) {
  const g = getGallery(params.gallery);
  if (!g) notFound();

  return (
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay-500">
          {g.date}
        </p>
        <h1 className="mt-1 text-3xl font-bold md:text-4xl">
          {g.title}
        </h1>
        {g.description && (
          <p className="mt-3 text-lg text-gray-600">{g.description}</p>
        )}
      </div>

      {g.images.length > 0 ? (
        <Gallery images={g.images} />
      ) : (
        <p className="mt-10 text-center text-gray-500">
          Photos coming soon!
        </p>
      )}

      <div className="mt-10 flex justify-center">
        <Link
          href="/archive"
          className="rounded-full bg-cream-100 px-5 py-2 text-sm text-forest-700 hover:bg-cream-200 dark:bg-stone-800 dark:text-forest-400">
          ← Back to Behind the Scenes
        </Link>
      </div>
    </Container>
  );
}
