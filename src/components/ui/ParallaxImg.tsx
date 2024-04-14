import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import useParallax from "~/hooks/useParallax";
import Image from "next/legacy/image";

export default function ParallaxImg({
  publicId,
  format,
  blurDataUrl,
}: {
  publicId: string;
  format: string;
  blurDataUrl: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    // <motion.div
    //   style={{ y }}
    <div
      className="relative  h-[400px] w-full md:h-[600px]"
      //   whileInView={{
      //     x: 0,
      //     opacity: 1,
      //     transition: {
      //       duration: 0.5,
      //     },
      //   }}
      //   initial={{ opacity: 0, x: -10 }}
    >
      <Image
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${publicId}.${format}`}
        alt="Tazama Img"
        layout="fill"
        className="-ml-4 h-full w-full object-cover"
      />
      {/* </motion.div> */}
    </div>
  );
}
