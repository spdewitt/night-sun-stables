import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function PostList({ post, aspect }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        <Link
          className={cx(
            "relative block",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}
          href={`/post/${post.slug}`}>
          {post.mainImage ? (
            <Image
              src={post.mainImage}
              alt={post.mainImageAlt || "Thumbnail"}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          ) : (
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
              <PhotoIcon />
            </span>
          )}
        </Link>
      </div>

      <div>
        <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-barn-800 dark:text-white">
          <Link href={`/post/${post.slug}`}>
            <span
              className="bg-gradient-to-r from-clay-400 to-forest-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative h-5 w-5 flex-shrink-0">
              {post.author?.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  className="rounded-full object-cover"
                  fill
                  sizes="20px"
                />
              )}
            </div>
            <span className="truncate text-sm">
              {post.author?.name}
            </span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="truncate text-sm" dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </time>
        </div>
      </div>
    </div>
  );
}
