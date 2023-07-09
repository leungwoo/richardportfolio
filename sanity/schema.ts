import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero],
}
