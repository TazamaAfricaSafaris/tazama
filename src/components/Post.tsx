/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils"

import type { SanityDocument } from "next-sanity";

import { dataset, projectId } from "../sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source: any) {
    return builder.image(source);
}

export default function Post({ post }: { post: SanityDocument }) {
    const { title, mainImage, body } = post;

    // Custom Portable Text Components
    const customComponents = {
        types: {
            imageGroup: ({ value }: { value: any }) => {
                return (
                    <div className="flex max-sm:flex-wrap gap-4 justify-center my-6 relative">
                        {value.images.map((image: any, index: number) => {
                            const { width, height } = getImageDimensions(image);
                            return (
                                <div 
                                key={index}
                                className={`w-full h-56 md:h-72 relative`}>
                                    <Image
                                        src={urlFor(image).width(width).height(height).url()}
                                        alt={image.alt || "Image"}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg w-full h-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            },
        },
    };

    // Preprocess body to group consecutive images
    const preprocessContent = (content: any[]) => {
        const grouped: any[] = [];
        let imageGroup: any[] = [];

        content.forEach((block) => {
            if (block._type === "image") {
                imageGroup.push(block);
            } else {
                if (imageGroup.length > 0) {
                    grouped.push({ _type: "imageGroup", images: imageGroup });
                    imageGroup = [];
                }
                grouped.push(block);
            }
        });

        if (imageGroup.length > 0) {
            grouped.push({ _type: "imageGroup", images: imageGroup });
        }

        return grouped;
    };

    const processedBody = preprocessContent(body);

    return (
        <main className="max-w-4xl mx-auto prose prose-lg p-4">
            {title ? <h1 className="text-center mt-32">{title}</h1> : null}
            {mainImage ? (
                <div className="relative w-full h-96">
                    <Image
                        className="m-0 w-full rounded-lg object-cover"
                        src={builder.image(mainImage).quality(80).url()}
                        layout="fill"
                        objectFit="cover"
                        alt={mainImage.alt || ''}
                    />
                </div>
            ) : null}
            {body ? <PortableText value={processedBody} components={customComponents} /> : null}
        </main>
    );
}