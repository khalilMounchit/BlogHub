import { Card, CardContent } from "@/components/ui/card";
import { articl } from "./lib/interface";
import { client, urlfor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] {
    title,
    smallDesc,
    titleImage,
    "currentSlug":slug.current
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: articl[] = await getData();
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlfor(post.titleImage).url()} width={500} height={400} alt="image" className="h-[200px] rounded-t-lg object-cover"/>
          <CardContent className="mt-5">
            <h3 className="font-bold text-lg line-clamp-3"> {post.title} </h3>
            <p className="line-clamp-3 mt-3 text-gray-400 text-sm "> {post.smallDesc} </p>
            <Button asChild className="w-full mt-6">
            <Link href={`/blog/${post.currentSlug}`}>
            Read More
            </Link>
            
            </Button>

          </CardContent>
          
          


        </Card>
      ))}
    </div>
  );
}