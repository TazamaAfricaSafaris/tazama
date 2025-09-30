import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { itineraryQueries } from "~/sanity/lib/queries";

export async function fetchLemoshoItineraries() {
  const client = getClient();
  const itineraries = await client.fetch<SanityDocument[]>(
    itineraryQueries.byLocationAndRouteContains,
    { locationPattern: "*mount kilimanjaro*", routePattern: "*lemosho route*" }
  );
  return itineraries;
}