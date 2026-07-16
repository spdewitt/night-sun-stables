"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery({ images, columns = 3 }) {
  const [active, setActive] = useState(null); // index or null
  const gridClass =
    columns === 2
      ? "mt-8 grid grid-cols-2 gap-4"
      : "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3";
  const imgSizes =
    columns === 2
      ? "(max-width: 640px) 50vw, 50vw"
      : "(max-width: 640px) 50vw, 33vw";

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setActive(null);
      if (active !== null && e.key === "ArrowRight")
        setActive(i => (i + 1) % images.length);
      if (active !== null && e.key === "ArrowLeft")
        setActive(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <div className={gridClass}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-cream-300 dark:border-stone-800">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={imgSizes}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setActive(null)}>
          <div
            className="relative h-[85vh] w-[90vw]"
            onClick={e => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-xl text-white hover:bg-black/80">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
