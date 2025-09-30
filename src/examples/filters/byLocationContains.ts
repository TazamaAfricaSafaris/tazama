import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { itineraryQueries } from "~/sanity/lib/queries";

export async function fetchKiliItineraries() {
  const client = getClient();
  const itineraries = await client.fetch<SanityDocument[]>(
    itineraryQueries.byLocationContains,
    { pattern: "*mount kilimanjaro*" }
  );
  return itineraries;
}