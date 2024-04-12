import cors from "cors";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddlware } from "@apollo/server/express4";
import { file } from "bun";
import { resolvers } from "./resolvers";
import { join } from "path";
const app = express();
app.use(cors(), express.json());

const schemaData = await file(join(import.meta.dir, "schema.graphql"));
const typeDefs = await schemaData.text();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

app.use("/graphql", apolloMiddlware(apolloServer));
app.listen(9000, () => {
  console.log("app running on port 9000");
  console.log("GQL: http://localhost:9000/graphql");
});
