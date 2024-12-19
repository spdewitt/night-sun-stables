"use client";

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
            // Apply a background color to odd rows (index 0, 2, ...)
            // index starts from 0, so index % 2 === 0 are "even" indices but conceptually the 1st, 3rd sections, etc.
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
                  alt={section.altText || "About page image"}
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-full rounded object-cover"
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
    </Container>
  );
}
