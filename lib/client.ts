import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//connect to sanity
export const client = sanityClient({
  projectId: "h1g7r4lc",
  dataset: "production",
  apiVersion: "2023-09-14",
  useCdn: true,
});

//be able to use sanity images
const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => builder.image(source)