import { sanityClient } from "@/lib/sanity.client";
import { aboutPageQuery } from "@/lib/queries";
import About from "./about"; // The component file you showed

export const metadata = {
  title: "About Night Sun Stables",
  description:
    "Learn about Night Sun Stables and our mission to provide a safe, fun and educational environment for horse lovers of all ages and skill levels.",
  keywords: [
    "Evansville horse boarding",
    "Evansville horse lessons",
    "Evansville horse training",
    "Evansville horse leasing",
    "Evansville horse camps",
    "Evansville horse events"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/about"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function AboutPage() {
  const data = await sanityClient.fetch(aboutPageQuery);
  return <About data={data} />;
}
