import HomePage from "./home";
import { sanityClient } from "@/lib/sanity.client";
import { homePageQuery } from "@/lib/queries";
import { getFacebookPosts } from "@/lib/facebook";
export const metadata = {
  title:
    "Night Sun Stables | Horse Boarding, Lessons and Youth Camps",
  description:
    "Night Sun Stables offers horse boarding, training, leasing and lessons for all ages and skill levels. We host Youth Camps and birthdays.",
  keywords: [
    "Evansville horse boarding",
    "Evansville horse lessons",
    "Evansville horse training",
    "Evansville horse leasing",
    "Evansville horse camps",
    "Evansville horse events"
  ],
  alternates: {
    canonical: "https://www.nightsunstables.com/"
  }
};
export default async function IndexPage() {
  const data = await sanityClient.fetch(homePageQuery);
  const facebookPosts = await getFacebookPosts();
  return <HomePage data={data} facebookPosts={facebookPosts} />;
}

// export const revalidate = 60;
