import { eventsContent } from "@/lib/content";
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
    canonical: "https://www.nightsunstables.com/events"
  }
};

export default function ContactPage() {
  return <Contact data={eventsContent} />;
}

// export const revalidate = 60;
