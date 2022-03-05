import type { Todo } from "$lib/interface";

export const todos: Todo[] = [];

export function find(_id: string): Todo | undefined {
  return todos.find(({ id }) => id == _id);
}

export function getAll(): Todo[] {
  return todos;
}

export function create(todo: Todo) {
  todos.push(todo);
}
