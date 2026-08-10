/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// ./src/pages/[slug].tsx

import type { QueryParams, SanityDocument } from "next-sanity";

import type { GetStaticPaths } from "next";

import { getClient } from "../../sanity/lib/client";
import { token } from "../../sanity/lib/token";
import { POSTS_SLUG_QUERY, POST_QUERY } from "../../sanity/lib/queries";
import Post from "~/components/Post";
import HeadSEO from "~/components/ui/Head";


type PageProps = {
    post: SanityDocument;
    params: QueryParams;
    draftMode: boolean;
    token: string;
};

export const revalidate = 60

export default function SinglePost(props: PageProps) {
    if (!props.post) {
        return <p className="mx-auto text-center mt-24">Loading...</p>
    }

    return (
        <>
            <HeadSEO
                title={props.post.seo ? props.post.seo.metaTitle : "Tazama Africa | Blog Post"}
                description={props.post.seo ? props.post.seo.metaDescription : "A blog post from Tazama Africa Safari"}
            />
            <Post post={props.post} />
        </>
    )
}

export const getStaticProps = async ({ params = {}, draftMode = false }) => {
    const client = getClient(draftMode ? token : undefined);
    const post = await client.fetch<SanityDocument>(POST_QUERY, params);

    return {
        props: {
            post,
            params,
            draftMode,
            token: draftMode ? token : "",
        },
        revalidate: 60
    };
};

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getClient().fetch(POSTS_SLUG_QUERY);

    return { paths, fallback: true };
};