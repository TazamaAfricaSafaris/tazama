// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

// Fetch all posts with slugs
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug)]{
    title,
    slug,
    mainImage{
      asset->{
        url
      },
      alt
    },
    categories[]->{
      title
    },
    author->{
      name,
      "imageUrl": image.asset->url
    }
  }
`;

// Fetch slugs for all posts
export const POSTS_SLUG_QUERY = groq`
  *[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`;

// Fetch a single post by slug, including author details
export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    seo,
    body,
    mainImage{
      asset->{
        url
      },
      alt
    },
    author->{
      name,
      "imageUrl": image.asset->url,
      bio
    },
    categories[]->{
      title
    },
    publishedAt
  }
`;
