import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero-schema';
import projects from './projects-schema';
import skills from './skills-schema';
import services from './services-schema';
import recommendations from './recommendations-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, projects, skills, services,recommendations ],
}
