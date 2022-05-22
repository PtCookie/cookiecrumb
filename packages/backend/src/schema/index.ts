import { createRequire } from 'module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { makeSchema, asNexusMethod } from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import { Query } from './query.js';
import { Mutation } from './mutation.js';
import * as Model from './model/index.js';
import * as Enum from './enum.js';
import * as Input from './input.js';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schema = makeSchema({
  types: [Query, Mutation, Model, Enum, Input, DateTime],
  outputs: {
    schema: __dirname + '/../../schema.graphql',
    typegen: __dirname + '/../generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});
