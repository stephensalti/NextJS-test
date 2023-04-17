/** 
 * This file is used to create functions that will call graphql queries.
 * The graphql client is fetched and queries passed to it.
 * This pattern is very simmilar to the current approach used in Hub 2.0 for learning purposes.
 * However, this pattern is subject to change in Hub 2.0.
 *  */
import { GraphQLClient } from "graphql-request";

const getServerClient = (): GraphQLClient => {
  const path = "http://localhost:3000/api/graphql";
  return new GraphQLClient(`${path}`);
};

const ToDosQuery = /* GraphQL */ `
  query ToDosQuery {
    toDos {
      id
      description
      title
      completed
    }
  }
`;

const PostToDoMutation = `
  mutation PostToDo($title: String!, $description: String!, $completed: Boolean!) {
    postToDo(title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;

const DeleteToDoMutation = `
  mutation DeleteToDo($id: ID!) {
    deleteToDo(id: $id) {
      id
    }
  }
`;

const UpdateToDoMutation = `
  mutation UpdateToDo($id: ID!, $title: String!, $description: String!, $completed: Boolean!) {
    updateToDo(id: $id, title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;

export async function getToDos() {
  return getServerClient()
    .request(ToDosQuery)
    .then((res) => (res as any).toDos)
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export async function postToDo(
  title: string,
  description: string,
  completed: boolean
) {
  return getServerClient()
    .request(PostToDoMutation, { title, description, completed })
    .then((res) => res as any)
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export async function deleteToDo(id: string) {
  return getServerClient()
    .request(DeleteToDoMutation, { id })
    .then((res) => res as any)
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export async function updateToDo(
  id: string,
  title: string,
  description: string,
  completed: boolean
) {
  return getServerClient()
    .request(UpdateToDoMutation, { id, title, description, completed })
    .then((res) => res as any)
    .catch((err) => {
      console.error(err);
      return [];
    });
}
