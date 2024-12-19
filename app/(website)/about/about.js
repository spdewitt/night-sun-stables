"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function aboutPage({ data }) {
  const { title, sections } = data;

  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {title}
      </h1>

      <div className="grid grid-cols-12 gap-6">
        {sections &&
          sections.map((section, i) => (
            <div key={i} className="col-span-12 lg:col-span-6">
              {section.imageUrl && (
                <Image
                  src={section.imageUrl}
                  alt={section.altText || "About page image"}
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-full rounded"
                />
              )}
              <p className="mt-2 text-sm text-gray-700">
                {section.description}
              </p>
            </div>
          ))}
      </div>
      <div className=" flex justify-center">
        <Link
          href="/#contact-form"
          className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          Reach Out and Meet the Team
        </Link>
      </div>
    </Container>
  );
}
