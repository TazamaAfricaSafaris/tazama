import { Button } from "~/components/ui/button";
import { allBlogs } from "~/blogs/all-blogs";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";
import Input from "~/components/ui/input";
import { useState } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";

interface BlogProps {
  name: string;
  link: string;
  imgUrl: string;
  shortDescription: string;
  category: string;
  // id: number | undefined;
}

export function Blog({ name, link, imgUrl, shortDescription, category }: BlogProps) {
  return (
    <div className="h-full cursor-pointer overflow-hidden bg-white shadow-md md:max-w-[320px] lg:max-w-[350px] rounded-md">
      <Link href={link}>
        <div className="relative h-[200px] w-full rounded-sm">
          <BlurImage src={imgUrl} />
        </div>

        <div className="p-3 flex flex-col gap-2 justify-end mt-2">
          <p className="bg-dark w-fit py-1 px-2 rounded text-white font-raleway text-xs">{category}</p>
          <p className="font-raleway text-primary text-base line-clamp-1">{name}</p>
          <p className="line-clamp-3 text-sm">
            {shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}

const Page = () => {
  const [query, setQuery] = useState<string>("");
  // Filter blogs based on query
  const filteredBlogs = allBlogs.filter((blog) =>
    blog.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PrimaryHeader title="Latest From Tazama" image="safari.webp"/>
      <div className="mt-20 flex items-center justify-center ">
        <Input
          placeholder="Filter Blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="max-w-[80%] md:w-[300px] lg:w-[400px]"
        />
      </div>
      <main className="mt-10 flex-col md:flex md:items-center md:justify-center">
        <section className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <Blog key={index} name={blog.name} imgUrl={blog.imgUrl} link={blog.url} shortDescription={blog.shortDescription} category={blog.category} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Page;