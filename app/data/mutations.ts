import { gql } from "graphql-request";

export const PostToDoMutation = gql`
  mutation PostToDo(
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    postToDo(title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;

export const DeleteToDoMutation = gql`
  mutation DeleteToDo($id: ID!) {
    deleteToDo(id: $id) {
      id
    }
  }
`;

export const UpdateToDoMutation = gql`
  mutation UpdateToDo(
    $id: ID!
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    updateToDo(
      id: $id
      title: $title
      description: $description
      completed: $completed
    ) {
      id
      title
      description
      completed
    }
  }
`;
