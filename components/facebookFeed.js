"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/CarmenNHurley";

/**
 * Shows the latest Facebook posts. Two modes:
 *
 * 1. `posts` provided (Graph API configured): renders posts as real
 *    HTML that search engines can index, refreshed daily.
 * 2. `posts` null/empty: falls back to the official Facebook Page
 *    Plugin iframe, which needs no credentials since the page is public.
 *    The iframe only renders after mount — ad blockers strip Facebook
 *    embeds from the DOM, which breaks React hydration if the iframe
 *    is part of the server-rendered HTML.
 */
export default function FacebookFeed({ posts }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="mx-auto mt-10 max-w-4xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">
          Latest from the Barn
        </h3>
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest-600 hover:underline">
          Follow us on Facebook
        </a>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map(post => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
              {post.picture && (
                <div className="relative h-56 w-full">
                  <Image
                    src={post.picture}
                    alt="Night Sun Stables Facebook post"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              )}
              <div className="p-4">
                <p className="mb-2 text-sm text-gray-500">
                  {new Date(post.createdTime).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC"
                    }
                  )}
                </p>
                <p className="line-clamp-4 text-gray-700">
                  {post.message}
                </p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[600px] justify-center overflow-hidden rounded-lg border border-gray-200">
          {mounted && (
            <iframe
              title="Night Sun Stables on Facebook"
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                FACEBOOK_PAGE_URL
              )}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
              width="500"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          )}
        </div>
      )}
    </section>
  );
}
