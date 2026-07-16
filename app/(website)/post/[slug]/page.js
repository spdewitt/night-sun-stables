import PostPage from "./default";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs();
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? "Night Sun Stables",
    alternates: {
      canonical: `https://www.nightsunstables.com/post/${params.slug}`
    }
  };
}

export default function PostDefault({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <PostPage post={post} />;
}
