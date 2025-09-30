import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { itineraryQueries } from "~/sanity/lib/queries";

export async function fetchEightDayKiliItineraries() {
  const client = getClient();
  const itineraries = await client.fetch<SanityDocument[]>(
    itineraryQueries.byLocationAndDurationContains,
    { pattern: "*mount kilimanjaro*", duration: 8 }
  );
  return itineraries;
}