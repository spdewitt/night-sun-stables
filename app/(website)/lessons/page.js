import { lessonsContent } from "@/lib/content";
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
    canonical: "https://www.nightsunstables.com/lessons"
  }
};

export default function ContactPage() {
  return <Contact data={lessonsContent} />;
}

// export const revalidate = 60;
