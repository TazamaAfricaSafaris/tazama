import { Button } from "~/components/ui/button";
import { allBlogs } from "~/blogs/all-blogs";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";
import Input from "~/components/ui/input";
import { useState } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";

import type { SanityDocument } from "next-sanity";

import { getClient } from "../../sanity/lib/client";
import { token } from "../../sanity/lib/token";
import { POSTS_QUERY } from "../../sanity/lib/queries";
import BlogPosts from "~/components/BlogPosts";

type PageProps = {
  posts: SanityDocument[];
  draftMode: boolean;
  token: string;
};

export default function Page(props: PageProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <HeadSEO title="Tazama Africa Safaris | Blog" keywords={base_keywords} />
      <PrimaryHeader title="Latest From Tazama" image="safari.webp" />
      {/* <div className="mt-20 flex items-center justify-center ">
        <Input
          placeholder="Filter Blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="max-w-[80%] md:w-[300px] lg:w-[400px]"
        />
      </div> */}
      <main className="mt-20 flex-col md:flex md:items-center md:justify-center">
      <div className="text-center">
        <h2 className="text-primary text-3xl md:text-5xl">Guides, blogs, etc. Check out what we at <br /> Tazama Africa have for you!</h2>
        <br />
      </div>
        {/* <section className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <Blog key={index} name={blog.name} imgUrl={blog.imgUrl} link={blog.url} shortDescription={blog.shortDescription} category={blog.category} />
          ))}
        </section> */}
        <br />
        <BlogPosts posts={props.posts} />
      </main>
    </>
  );
};

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return {
    props: {
      posts,
      draftMode,
      token: draftMode ? token : "",
    },
  };
};