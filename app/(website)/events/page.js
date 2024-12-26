import { sanityClient } from "@/lib/sanity.client";
import { eventsQuery } from "@/lib/queries";
import Contact from "./events";

export const metadata = {
  title: "Horse Riding Birthday Parties in Evansville, IN",
  description:
    "Celebrate your birthday with a horse riding party at Night Sun Stables in Evansville, IN. We offer horseback riding, games, and more for your special day.",
  keywords: [
    "Evansville horse birthday party",
    "Evansville horseriding birthday",
    "Evansville horse birthday"
  ],
  alternates: {
    canonical: "/events"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(eventsQuery);
  return <Contact data={data} />;
}

// export const revalidate = 60;
