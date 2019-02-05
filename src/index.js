// require('now-env');
import cors from 'cors';
import express from 'express';
import {
  ApolloServer
} from 'apollo-server-express';
import schema from "./schema";
import resolvers from './resolvers';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({
  app,
  path: '/graphql'
});
const port = 8080;
app.listen({
  port
}, () => {
  console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
});
