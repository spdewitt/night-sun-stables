import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { parseISO, format } from "date-fns";

export default function Post({ post }) {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md">
          <h1 className="mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {post.author?.image && (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {post.author?.name}
                </p>
                <time
                  className="text-sm text-gray-500 dark:text-gray-400"
                  dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                </time>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {post.mainImage && (
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <Image
            src={post.mainImage}
            alt={post.mainImageAlt || post.title}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <Container>
        <article className="mx-auto max-w-screen-md">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-forest-600">
            {post.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/archive"
              className="rounded-full bg-cream-100 px-5 py-2 text-sm text-forest-700 hover:bg-cream-200 dark:bg-stone-800 dark:text-forest-400">
              ← View all posts
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
