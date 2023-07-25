import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero-schema';
import works from './featuredproject-schema';
import skills from './skills-schema';
import services from './services-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, works, skills, services ],
}
