import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt ?? "Default description if none exists",
    // If your post data has keywords, you could do something like:
    // keywords: post.keywords ?? [],
    alternates: {
      // Notice the template literal to insert the slug dynamically
      canonical: `https://www.nightsunstables.com/post/${params.slug}`
    }
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
