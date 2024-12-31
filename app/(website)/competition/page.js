import { sanityClient } from "@/lib/sanity.client";
import { competitionQuery } from "@/lib/queries";
import Competition from "./competition";

export const metadata = {
  title: "Competitve Horse Riding lessons in Evansville, IN. ",
  description:
    "Competitive horse riding lessons in Evansville, IN for all ages and skill levels. Learn to compete with and show horses at Night Sun Stables.",
  keywords: [
    "Evansville horse riding lessons",
    "Evansville horse training",
    "Evansville horse competitions"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/competition"
  }
};

export default async function ContactPage() {
  const data = await sanityClient.fetch(competitionQuery);
  return <Competition data={data} />;
}

// export const revalidate = 60;
