import { buildSchemaSync } from 'type-graphql';
import { TaskResolver } from './task/resolvers';
import { join } from 'path';

export default buildSchemaSync({
  resolvers: [TaskResolver],
  emitSchemaFile: join(__dirname, '../../../dist/schema.gql'),
  validate: false,
});
