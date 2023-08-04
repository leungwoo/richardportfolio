import { client } from "../../sanity/lib/client";

export default async function getProjects() {
  const query = '*[_type == "projects"]';
  
  const data = await client.fetch(query);

  if (!data || data.length === 0) {
    throw new Error('Failed to fetch projects data');
  }
  return data
}
