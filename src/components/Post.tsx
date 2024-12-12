/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Link from "next/link"
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
    const { title, mainImage, body, author, publishedAt } = post;

    console.log(post);


    // Custom Portable Text Components
    const customComponents = {
        types: {
            imageGroup: ({ value }: { value: any }) => {
                return (
                    <div className="flex max-sm:flex-wrap gap-4 justify-center my-6 relative pb-6">
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
        <main className="max-w-4xl mx-auto prose prose-lg p-4 mb-8 text-black">
            <div className="font-raleway mt-28 md:mt-32 mx-auto mb-5 text-center max-w-xl text-sm flex items-center justify-center max-sm:flex-col">
                <Link
                    href="/blogs"
                    className="cursor-pointer no-underline hover:underline hover:underline-offset-2"
                >
                    Blogs
                </Link>
                <span className="font-bold text-2xl mx-2">•</span>
                <span>{title}</span>
            </div>
            {title ? <h1 className="text-center max-sm:text-4xl">{title}</h1> : null}
            <div className="flex items-center gap-1 md:gap-4 mx-auto w-fit -mt-6 max-sm:flex-col">
                {
                    author ? (
                        <div className="flex items-center gap-2 mx-auto">
                            <Image
                                src={author.imageUrl}
                                alt={author.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <p>{author.name}</p>
                        </div>
                    ) : null
                }
                <p className="max-sm:hidden">|</p>
                <p className="max-sm:-mt-8">
                    {new Date(publishedAt).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>
            </div>
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