import { ApolloServer } from 'apollo-server';
import { schema } from './schema/index.js';
import { context } from './context/index.js';

const server = new ApolloServer({
  schema: schema,
  context: context,
});

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ Query server in Apollo Studio: https://studio.apollographql.com/sandbox?endpoint=http%3A%2F%2Flocalhost%3A4000%2F
  `);
});
