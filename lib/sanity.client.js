import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "iwqaxa31",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01"
});
