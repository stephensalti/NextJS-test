/**
 * This file is used to create functions that will call graphql queries.
 * The graphql client is fetched and queries passed to it.
 * This pattern is very simmilar to the current approach used in Hub 2.0 for learning purposes.
 * However, this pattern is subject to change in Hub 2.0.
 *  */
import { GraphQLClient, Variables } from "graphql-request";
import {
  DeleteToDoMutation,
  PostToDoMutation,
  UpdateToDoMutation,
} from "./mutations";
import { ToDosQuery } from "./queries";

interface RequestParams {
  document: string;
  args?: Variables;
}

const getServerClient = (): GraphQLClient => {
  const path = "http://localhost:3000/api/graphql";
  return new GraphQLClient(`${path}`);
};

const request = async ({ document, args }: RequestParams) =>
  getServerClient()
    .request(document, args)
    .then((res) => res as any)
    .catch((err) => {
      console.error(err);
      return [];
    });

export async function getToDos() {
  return request({ document: ToDosQuery });
}

export async function postToDo(
  title: string,
  description: string,
  completed: boolean
) {
  return request({
    document: PostToDoMutation,
    args: { title, description, completed },
  });
}

export async function deleteToDo(id: string) {
  return request({ document: DeleteToDoMutation, args: { id } });
}

export async function updateToDo(
  id: string,
  title: string,
  description: string,
  completed: boolean
) {
  return request({
    document: UpdateToDoMutation,
    args: { id, title, description, completed },
  });
}
