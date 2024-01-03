import { fullarticl } from '@/app/lib/interface';
import { client, urlfor } from '@/app/lib/sanity';
import React from 'react'
import Image from 'next/image';
import {PortableText} from '@portabletext/react'


async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    title,
    content,
    titleImage,
    "currentSlug": slug.current
  }[0]`;


  const data = await client.fetch(query);
  return data;
}



export default async function BlogArticl({params}:{params:{slug:string}})
{
  const data:fullarticl = await getData(params.slug);
  return (
    <div className='mt-7'>
    <h1>
      <span className='text-primary block text-center font-semibold tracking-wide uppercase'>
      Khalil Mounchit - Blog
      </span>
      <hr className='text-primary'/>
      <span className='text-center block mt-5 text-2xl leading-8 font-bold tracking-tight sm:text-4xl'> {data.title} </span>
    </h1>  

    <Image priority src={urlfor(data.titleImage).url()} alt={"image"} width={800} height={800} className='h-[400px] w-full rounded-lg mt-4 border-primary' />
    <div className="mt-16 prose prose-purple prose-xl prose-li:marker:text-primary prose-a:text-primary dark:prose-invert">
      <PortableText value={data.content}/>

    </div>
    
    </div>
  )
}

