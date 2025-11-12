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
  all: `*[_type == "itinerary"] | order(price asc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{
        url
      },
      alt
    },
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
    zohoFormLink,
    price,
    coverImg{
      asset->{
        url
      },
      alt
    },
    description,
    itineraryType,
    locationAndDuration,
    itineraryDetails[] {
      day,
      transferTime,
      distance,
      highlights,
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
      paxTable,
    _createdAt,
    _updatedAt
  }`,

  byType: `*[_type == "itinerary" && itineraryType == $type] | order(price asc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{
        url
      },
      alt
    },
    description,
    itineraryType,
    locationAndDuration,
    includes,
    excludes,
    _createdAt
  }`,

  featured: `*[_type == "itinerary"] | order(price asc)[0..5] {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{
        url
      },
      alt
    },
    description,
    itineraryType,
    locationAndDuration,
    includes,
    excludes,
    _createdAt
  }`,

  // Fetch itineraries whose location contains a substring (case-insensitive)
  byLocationContains: `*[_type == "itinerary" && lower(locationAndDuration.location) match $pattern] | order(price asc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{url},
      alt
    },
    itineraryType,
    locationAndDuration,
    _createdAt
  }`,

  // Fetch itineraries whose location contains both a base location and a specific route (e.g., Mount Kilimanjaro + Lemosho route)
  byLocationAndRouteContains: `*[_type == "itinerary" && lower(locationAndDuration.location) match $locationPattern && lower(locationAndDuration.location) match $routePattern] | order(price asc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{url},
      alt
    },
    itineraryType,
    locationAndDuration,
    _createdAt
  }`,

  // Fetch itineraries by location substring and exact duration match
  byLocationAndDurationContains: `*[_type == "itinerary" && lower(locationAndDuration.location) match $pattern && locationAndDuration.duration == $duration] | order(price asc) {
    _id,
    slug,
    itineraryName,
    subHeading,
    zohoFormLink,
    price,
    coverImg{
      asset->{url},
      alt
    },
    itineraryType,
    locationAndDuration,
    _createdAt
  }`,
};
