import { sanityClient } from "@/lib/sanity.client";
import { servicesQuery } from "@/lib/queries";
import Contact from "./services";

export const metadata = {
  title: "Horse Boarding and Leasing in Evansville, IN",
  description:
    "Night Sun Stables offers horse boarding, training, leasing and lessons for all ages and skill levels. We host Youth Camps and birthdays.",
  keywords: [
    "Evansville horse boarding",
    "Evansville horse services",
    "Evansville horse leasing"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/services"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(servicesQuery);
  return <Contact data={data} />;
}

// export const revalidate = 60;
