"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function YouthCamps({ data }) {
  const {
    title,
    introParagraph,
    paragraphOne,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight
  } = data;

  // Pair the initial paragraphs with images
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
    }
  ];

  // Additional images for the 2x2 grid
  const galleryImages = [
    { imageUrl: imageThree?.asset?.url, altText: imageThree?.alt },
    { imageUrl: imageFour?.asset?.url, altText: imageFour?.alt },
    { imageUrl: imageFive?.asset?.url, altText: imageFive?.alt },
    { imageUrl: imageSix?.asset?.url, altText: imageSix?.alt },
    { imageUrl: imageSeven?.asset?.url, altText: imageSeven?.alt },
    { imageUrl: imageEight?.asset?.url, altText: imageEight?.alt }
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
                  alt={section.altText || "Camp page image"}
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-full rounded object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gallery Images in a 2x2 Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {galleryImages.map((img, i) =>
          img.imageUrl ? (
            <Image
              key={i}
              src={img.imageUrl}
              alt={img.altText || "Camp gallery image"}
              width={800}
              height={600}
              className="h-auto w-full max-w-full rounded object-cover"
            />
          ) : null
        )}
      </div>

      {/* Sign Up / Contact Us Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/#contact-form"
          className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          Sign Up for a Camp Today!
        </Link>
      </div>
    </Container>
  );
}
