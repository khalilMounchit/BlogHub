import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

 export const client = createClient({
  projectId: 'yve4i0n9',
  dataset: 'production',
  apiVersion: '2024-01-01', 
  useCdn: true, 
});


const builder = imageUrlBuilder(client);
export function urlfor(source:any){
    return builder.image(source);
}