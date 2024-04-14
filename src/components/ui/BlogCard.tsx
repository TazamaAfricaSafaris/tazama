import Image from "next/legacy/image";
import { Button } from "./button";
import Link from "next/link";
import { CLOUDINARY_URL } from "~/lib/constants";

interface Props {
  imgLink: string;
  title: string;
  caption: string;
  blogLink: string;
}

export default function BlogCard(props: Props) {
  return (
    <Link href={`/safaris/${props.blogLink}`}>
      <div className="mb-10 min-h-[300px] w-[350px] cursor-pointer border-2 border-red-500 bg-white shadow-md">
        <div className="relative h-[200px] w-full rounded-sm">
          <Image
            src={`${CLOUDINARY_URL}/${props.imgLink}.png`}
            layout="fill"
            alt="blog_img"
            className="object-cover"
            placeholder="blur"
            blurDataURL={`${CLOUDINARY_URL}/${props.imgLink}.blurDataUrl`}
          />
        </div>

        <div className="p-3">
          <p className="font-now text-primary">{props.title}</p>
          <p className="font-now text-sm">{props.caption}</p>
          <Button className="font-now mt-5 text-lg text-white">
            View More
          </Button>
        </div>
      </div>
    </Link>
  );
}
