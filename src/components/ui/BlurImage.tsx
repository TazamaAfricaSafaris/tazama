// import Image from "next/image";

import { useState } from "react";
import Image from "next/legacy/image";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  src: string;
}

export default function BlurImage({ src }: Props) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8  w-full overflow-hidden bg-gray-200">
        <Image
          alt="Thumbnail"
          src={src}
          layout="fill"
          objectFit="cover"
          priority={false}
          className={cn(
            "object-cover object-top duration-700 ease-in-out",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0",
          )}
          onLoadingComplete={() => setLoading(false)}
          draggable={false}
        />
      </div>
    </div>
  );
}
