// Photo galleries shown under /archive.
//
// To add photos: drop the image files into /public/uploads, then add
// their paths to the matching gallery's `images` array below (or create
// a new gallery object). Galleries with no images are hidden until filled.
export const galleries = [
  {
    slug: "january-snow",
    title: "January Snow",
    date: "January 2026",
    description:
      "A fresh blanket of snow over the farm — and our horses bundled up and loving it.",
    images: [
      {
        src: "/uploads/4214d145b66f789429fb8ddbc917cd20361fc2f1-1536x2048.jpg",
        alt: "Horse in the snow at Night Sun Stables in January 2026"
      }
    ]
  },
  {
    slug: "spa-day",
    title: "Spa Day Camp",
    date: "Summer 2026",
    description:
      "Pampering the horses — grooming, brushing, and lots of TLC at our Spa Day camp.",
    images: []
  }
];

export const getGallery = slug =>
  galleries.find(g => g.slug === slug) || null;

// Only galleries that actually have photos are shown/linked.
export const visibleGalleries = () =>
  galleries.filter(g => g.images.length > 0);
