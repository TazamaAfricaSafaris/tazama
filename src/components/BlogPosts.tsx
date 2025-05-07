"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// ./src/components/Posts.tsx

import type { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPosts({ posts }: { posts: SanityDocument[] }) {

  return (
    <main className="container mx-auto grid md:grid-cols-6 gap-5 lg:grid-cols-3 max-w-6xl mb-20">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            href={`/blogs/${post.slug.current}`}
            className="group p-0 mt-4"
          >
            <div className="w-full h-64 relative overflow-hidden p-0">
              <Image
                fill
                objectFit="cover"
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className="group-hover:scale-105 transition-transform object-cover w-full h-full"
              />
              <div className="absolute z-10 bottom-2 left-2 flex gap-1">
                {post.categories.map((category: any, index: number) => (
                  <p
                    key={index}
                    className="bg-amber-50/80 border border-darker px-2 text-sm line-clamp-2 rounded-3xl"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-4 h-36 flex flex-col justify-between gap-3">
              <h4 className="text-3xl line-clamp-2 text-dark">{post.title}</h4>
              <p>By {post.author.name}</p>
            </div>
            {/* <div className="border border-darker w-1/3 mx-auto mt-2 group-hover:w-3/4 transition-all"></div> */}
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}