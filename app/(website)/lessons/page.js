import { sanityClient } from "@/lib/sanity.client";
import { lessonsQuery } from "@/lib/queries";
import Contact from "./lessons";

export const metadata = {
  title:
    "Horseback Riding Lessons Evansville, IN | Night Sun Stables",
  description:
    "Horseback riding lessons in Evansville, IN for all ages and skill levels. Learn to ride, care for and communicate with horses at Night Sun Stables.",
  keywords: [
    "Evansville horseback riding lessons",
    "Evansville horse lessons",
    "Evansville horse training"
  ],
  alternates: {
    canonical: "/lessons"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(lessonsQuery);
  return <Contact data={data} />;
}

// export const revalidate = 60;
