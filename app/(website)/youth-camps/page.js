import { sanityClient } from "@/lib/sanity.client";
import { youthCampsQuery } from "@/lib/queries";
import Contact from "./youth-camps";

export const metadata = {
  title: "Evansville Youth Camps | Night Sun Stables",
  description:
    "Night Sun Stables offers summer horse camps for kids in Evansville, IN. Learn to ride, care for and communicate with horses at Night Sun Stables.",
  keywords: [
    "Evansville summer camp",
    "Evansville horse camp",
    "Evansville horse riding camp",
    "Evansville youth camp",
    "Evansville horseback riding camp"
  ],
  alternates: {
    canonical: "/youth-camps"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(youthCampsQuery);
  return <Contact data={data} />;
}

// export const revalidate = 60;
