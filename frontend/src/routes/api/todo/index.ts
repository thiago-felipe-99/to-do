import type { Todo, RequestHandler } from "$lib/interface";
import { v4 as uuidv4 } from "uuid";

const todos: Todo[] = [];

export const get: RequestHandler = () => ({
  status: 200,
  body:   todos
});


export const post: RequestHandler = async (event) => {
  const body = await event.request.json();
  todos.push({
    id:          uuidv4(),
    done:        false,
    title:       body.title,
    description: body.description
  });
  return { status: 200 };
};
