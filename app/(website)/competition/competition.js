"use client";

import { useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Competition({ data }) {
  const {
    title,
    introParagraph,
    paragraphOne,
    imageOne,
    imageTwo,
    imageThree,
    paragraphThree,
    imageFour,
    paragraphFour
  } = data;

  // Track which image is currently "fullscreen"
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Open the modal with the clicked image
  const handleImageClick = (url, alt) => {
    if (url) setFullscreenImage({ url, alt });
  };

  // Close the modal
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
      text: paragraphThree,
      imageUrl: imageThree?.asset?.url,
      altText: imageThree?.alt
    },
    {
      text: paragraphFour,
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
            // index % 2 === 0 => style for the "even" index => 1st, 3rd sections, etc.
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
                  src={section.imageUrl}
                  alt={section.altText || "Competition page image"}
                  width={800}
                  height={600}
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
          Contact Us About Competing
        </Link>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}>
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
              className="absolute right-3 top-3 text-2xl font-bold text-white">
              ×
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
