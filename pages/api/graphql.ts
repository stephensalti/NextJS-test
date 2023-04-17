/** Note - By placing this in pages/api, we're creating a route in our app that handles requests to /api/graphql
 * This is called an api route. This feature is still supported, but has been replaced by route handlers in NextJS 13 
 * */
import { createYoga } from "graphql-yoga";
import { createContext } from "./context";
import { schema } from "./schema";

// Setup yoga server to listen at api route "/api/graphql"
// Add prisma client to context for fetching data inside resolvers
export default createYoga({ schema, graphqlEndpoint: "/api/graphql", context: createContext });
