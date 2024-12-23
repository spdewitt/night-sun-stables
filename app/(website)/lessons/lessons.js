"use client";

import { useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Lessons({ data }) {
  const {
    title,
    introParagraph,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    imageOne,
    imageTwo,
    imageThree,
    imageFour
  } = data;

  // Local state to track which image (if any) is shown fullscreen
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Helper to open the modal
  const handleImageClick = (url, alt) => {
    // If we have a valid URL, open the modal with that image
    if (url) {
      setFullscreenImage({ url, alt });
    }
  };

  // Helper to close the modal
  const closeModal = () => {
    setFullscreenImage(null);
  };

  // Pair each paragraph with a corresponding image
  const sections = [
    {
      text: introParagraph,
      imageUrl: imageOne?.asset?.url,
      altText: imageOne?.alt
    },
    {
      text: paragraphOne,
      imageUrl: imageTwo?.asset?.url,
      altText: imageTwo?.alt
    },
    {
      text: paragraphTwo,
      imageUrl: imageThree?.asset?.url,
      altText: imageThree?.alt
    },
    {
      text: paragraphThree,
      imageUrl: imageFour?.asset?.url,
      altText: imageFour?.alt
    }
  ];

  return (
    <Container>
      <h1 className="text-brand-primary mb-6 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {title}
      </h1>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            // Apply a background color to "even" indices: 0, 2, ...
            // in normal language these are the 1st, 3rd, etc.
            className={`flex flex-col gap-4 md:flex-row md:items-center ${
              index % 2 === 0 ? "rounded bg-gray-100 p-4" : ""
            }`}>
            {/* Text Column */}
            <div className="md:w-1/2">
              <p className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {section.text}
              </p>
            </div>

            {/* Image Column */}
            {section.imageUrl && (
              <div className="flex justify-center md:w-1/2">
                <Image
                  // Standardize size (e.g., 400x300 in normal view).
                  // Or remove width/height and rely on Tailwind for sizing.
                  width={400}
                  height={300}
                  src={section.imageUrl}
                  alt={section.altText || "About page image"}
                  className="h-auto w-full max-w-full cursor-pointer rounded object-cover"
                  onClick={() =>
                    handleImageClick(
                      section.imageUrl,
                      section.altText
                    )
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sign Up Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/#contact-form"
          className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          Sign Up for Horseback Riding Lessons Today!
        </Link>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}>
          {/* Clicking the overlay closes the modal; stopPropagation on the img if you want. */}
          <div className="relative max-w-4xl">
            <Image
              src={fullscreenImage.url}
              alt={fullscreenImage.alt || "Fullscreen image"}
              width={1200}
              height={800}
              className="h-auto max-h-[90vh] w-auto max-w-full rounded object-contain"
            />
            {/* Close button (optional) */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 text-xl text-white">
              ✕
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
