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

export default function SinglePost(props: PageProps) {
    const seo = props.post.seo
    return (
        <>
            <HeadSEO 
                title={props.post.seo.metaTitle}
                keywords={props.post.seo.seoKeywords}
                description={props.post.seo.metaDescription}
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
    };
};

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getClient().fetch(POSTS_SLUG_QUERY);

    return { paths, fallback: true };
};