import { createSchema } from "graphql-yoga";
import { GraphQLContext } from "./context";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      toDos: [ToDo]!
    }
    type Mutation {
      postToDo(title: String!, description: String!, completed: Boolean!): ToDo!
      deleteToDo(id: ID!): ToDo!
      updateToDo(id: ID!, title: String!, description: String!, completed: Boolean!): ToDo!
    }

    type ToDo {
      id: ID!
      title: String!
      description: String!
      completed: Boolean!
    }
  `,
  resolvers: {
    Query: {
      toDos: async (parent: unknown, args, context: GraphQLContext) =>
        await context.prisma.toDo.findMany(),
    },
    Mutation: {
      postToDo: async (
        parent: unknown,
        {
          title,
          description,
          completed,
        }: { title: string; description: string; completed: boolean },
        context: GraphQLContext
      ) =>
        await context.prisma.toDo.create({
          data: { description, title, completed },
        }),
      deleteToDo: async (
        parent: unknown,
        { id }: { id: string },
        context: GraphQLContext
      ) => await context.prisma.toDo.delete({ where: { id: parseInt(id) } }),
      updateToDo: async (
        parent: unknown,
        {
          id,
          title,
          description,
          completed,
        }: { id: string; title: string; description: string; completed: boolean },
        context: GraphQLContext
      ) =>
        await context.prisma.toDo.update({
          where: { id: parseInt(id)},
          data: { description, title, completed },
        }),
    },
  },
});
