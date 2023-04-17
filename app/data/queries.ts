import { gql } from "graphql-request";

export const ToDosQuery = gql`
  query ToDosQuery {
    toDos {
      id
      description
      title
      completed
    }
  }
`;


