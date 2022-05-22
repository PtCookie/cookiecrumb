# CookieCrumb GraphQL Server

Cookie issue tracker system backend GraphQL server.
Template from [Prisma GraphQL Server Example](https://pris.ly/e/ts/graphql#using-the-graphql-api).

## Tech stack

- [**Apollo Server**](https://github.com/apollographql/apollo-server): HTTP server for GraphQL APIs   
- [**GraphQL Nexus**](https://nexusjs.org/docs/): GraphQL schema definition and resolver implementation 
- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)                  
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations               
- [**SQLite**](https://www.sqlite.org/index.html): Local, file-based SQL database

## Usage

Also see [template page](https://pris.ly/e/ts/graphql#using-the-graphql-api).

### Generate and migrate

```shell
# Generate schema without DB migration
yarn run generate

# Check yarn run migrate --help
yarn run migrate [command] [options]
```

### Dev server

```shell
yarn run dev
```

### Build and Start

```shell
yarn run build

yarn run start
```

## License

MIT &copy; [PtCookie](https://blog.ptcookie.dev/)
