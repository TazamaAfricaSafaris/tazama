import { Button } from "~/components/ui/button";
import { allBlogs } from "~/blogs/all-blogs";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";
import Input from "~/components/ui/input";
import { useState } from "react";

interface BlogProps {
  name: string;
  link: string;
  imgUrl: string;
  // id: number | undefined;
}

function Blog({ name, link, imgUrl }: BlogProps) {
  return (
    <div className="mb-10  min-h-[300px] w-[80%] cursor-pointer bg-white shadow-md md:w-[350px] ">
      <Link href={link}>
        <div className="relative h-[200px] w-full rounded-sm">
          <BlurImage src={imgUrl} />
        </div>

        <div className="p-3">
          <p className="font-now text-primary">{name}</p>
          <Button className="font-now mt-5 text-lg text-white">
            View More
          </Button>
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
          {filteredBlogs.map((blog) => (
            <Blog name={blog.name} imgUrl={blog.imgUrl} link={blog.url} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Page;
