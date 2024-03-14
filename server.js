import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import allResolvers from "./resolvers/index.js";
import {readFile} from 'node:fs/promises';

const typeDefs = await readFile('./schema.graphql', 'utf8');
const resolvers = {
	Query: {...allResolvers.queries},
	Mutation: {...allResolvers.mutations}
};

const server = new ApolloServer({typeDefs, resolvers});
const {url} = await startStandaloneServer(server, {listen: {port: 9000}});

console.log(`Server running at ${url}`);