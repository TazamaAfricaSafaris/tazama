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

export const itineraryQueries = {
  all: `*[_type == "itinerary"] | order(_createdAt desc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    price,
    coverImg,
    description,
    itineraryType,
    locationAndDuration,
    includes,
    excludes,
    _createdAt
  }`,

  bySlug: `*[_type == "itinerary" && slug.current == $slug][0] {
    _id,
    slug,
    itineraryName,
    subHeading,
    price,
    coverImg,
    description,
    itineraryType,
    locationAndDuration,
    itineraryDetails[] {
      day,
      description,
      mealPlan,
      accommodation,
      note,
      accommodationGallery,
      hotelDescription,
      amenities
    },
    includes,
    excludes,
    _createdAt,
    _updatedAt
  }`,

  byType: `*[_type == "itinerary" && itineraryType == $type] | order(_createdAt desc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    price,
    coverImg,
    description,
    itineraryType,
    locationAndDuration,
    includes,
    excludes,
    _createdAt
  }`,

  featured: `*[_type == "itinerary"] | order(_createdAt desc)[0..5] {
    _id,
    slug,
    itineraryName,
    subHeading,
    price,
    coverImg,
    description,
    itineraryType,
    locationAndDuration,
    includes,
    excludes,
    _createdAt
  }`,
};
