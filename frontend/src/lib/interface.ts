import type { RequestHandler as GenericRequestHandler } from "@sveltejs/kit";

export type RequestHandler<Body = unknown> = GenericRequestHandler<
  Record<string, string>,

  //@ts-expect-error: body not readable
  Body
>;


export interface Todo {
  id: string,
  title: string,
  description: string,
  done: boolean
}

