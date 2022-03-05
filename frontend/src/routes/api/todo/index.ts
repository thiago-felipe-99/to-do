import type { Todo, RequestHandlerOutput } from "$lib/interface";
import { v4 as uuidv4 } from "uuid";

const todos: Todo[] = [];

export function get(): RequestHandlerOutput<Todo[]> {
  return {
    status: 200,
    body:   todos
  };
}

export async function post({ request }: {request: Request}) {
  const body = await request.json();

  todos.push({
    id:          uuidv4(),
    done:        false,
    title:       body.title,
    description: body.description
  });

  return { status: 200 };
}
