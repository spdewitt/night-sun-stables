import Container from "@/components/container";
import PostList from "@/components/postlist";
import { posts } from "@/lib/posts";

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
  return (
    <Container className="relative">
      <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
        An Inside Look at Night Sun Stables
      </h1>

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
