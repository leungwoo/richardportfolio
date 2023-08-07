import { client } from "../../sanity/lib/client";

export default async function getRecommendations() {
  const query = '*[_type == "recommendations"]';
  
  const data = await client.fetch(query);

  if (!data || data.length === 0) {
    throw new Error('Failed to fetch recommendations data');
  }
  return data
}
