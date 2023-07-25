import { client } from "../../sanity/lib/client";

export default async function getSkills() {
  const query = '*[_type == "skills"]';
  
  const data = await client.fetch(query);

  if (!data || data.length === 0) {
    throw new Error('Failed to fetch Skills data');
  }
  return data
}
