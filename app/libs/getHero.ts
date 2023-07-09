import { client } from "../../sanity/lib/client";

export default async function getHero() {
  const query = '*[_type == "hero"]';
  
  const data = await client.fetch(query);

  if (!data || data.length === 0) {
    throw new Error('Failed to fetch Hero data');
  }
  return data
}
