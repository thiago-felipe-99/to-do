import type { Todo, RequestHandler } from "$lib/interface";
import { v4 as uuidv4 } from "uuid";
import { find, todos } from "./_api";

type params =  {id: string}
type empty =  Record<string, never>

export const get: RequestHandler<params, Todo | empty>  = (event) => {
  const todo = find(event.params.id);

  if (!todo)
    return {
      status: 404,
      body:   {}
    };

  return {
    status: 200,
    body:   todo
  };
};
