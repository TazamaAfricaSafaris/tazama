import { ImageProps } from "next/image";
import Image from "next/legacy/image";

interface Props {
  public_id: string;
  blurDataUrl: string;
  format: string;
}

export default function GalleryImage({ images }: { images: Props[]}) {
  return (
    <div className="mt-10 lg:mt-[10px] ">
      <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {images.map(({ blurDataUrl, public_id, format }) => (
          <Image
            key={public_id}
            alt="tazama gallery photos"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 object-cover"
            style={{ transform: "translate3d(0, 0, 0)" }}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
            width={300}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}

export function CloudinaryImage({ public_id, blurDataUrl, format }: Props) {
  return (
    <Image
      alt="tazama gallery photos"
      className="object-cover"
      style={{
        transform: "translate3d(0, 0, 0)",
        imageRendering: "crisp-edges",
      }}
      placeholder="blur"
      blurDataURL={blurDataUrl}
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
      layout="fill"
    />
  );
}
