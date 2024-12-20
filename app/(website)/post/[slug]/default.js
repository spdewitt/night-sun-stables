"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { useState, useEffect } from "react";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";

export default function Post(props) {
  const { loading, post } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  const handleImageClick = imgObj => {
    const imageData = urlForImage(imgObj.image);
    if (imageData) {
      setSelectedImage({
        src: imageData.src,
        alt: imgObj.image?.alt || imgObj.title || "Image"
      });
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps && (
                  <Image
                    src={AuthorimageProps.src}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {post.author.name}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.body && <PortableText value={post.body} />}
          </div>

          {/* Additional Images Grid */}
          {post.images && post.images.length > 0 && (
            <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {post.images.map((imgObj, idx) => {
                const imageData = urlForImage(imgObj.image);
                return (
                  <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                    onClick={() => handleImageClick(imgObj)}>
                    {imageData && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={imageData.src}
                          alt={
                            imgObj.image?.alt ||
                            imgObj.title ||
                            "Image"
                          }
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {imgObj.title}
                    </h3>
                    {imgObj.description && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {imgObj.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/archive"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          onClick={handleCloseModal}>
          <div
            className="relative"
            style={{ width: "90vw", height: "90vh" }}
            onClick={e => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute right-3 top-3 rounded-full bg-black bg-opacity-50 p-1.5 text-white hover:bg-opacity-70">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
