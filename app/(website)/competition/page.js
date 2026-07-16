import { competitionContent } from "@/lib/content";
import Competition from "./competition";

export const metadata = {
  title: "Competitive Horse Riding Lessons in Evansville, IN | Night Sun Stables",
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

export default function ContactPage() {
  return <Competition data={competitionContent} />;
}

// export const revalidate = 60;
