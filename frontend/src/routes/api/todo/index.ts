import type { Todo, RequestHandlerOutput } from "$lib/interface";
import { v4 as uuidv4 } from "uuid";
import { create, getAll } from "./_api";

export function get(): RequestHandlerOutput<Todo[]> {
  return {
    status: 200,
    body:   getAll()
  };
}

export async function post({ request }: {request: Request}) {
  const body = await request.json();

  const todo = {
    id:          uuidv4(),
    done:        false,
    title:       body.title || "",
    description: body.description || ""
  };

  create(todo);

  return {
    status: 201,
    body:   todo
  };
}
