import type {
  RequestHandler as GenericRequestHandler,
  RequestHandlerOutput as GenericRequestHandlerOutput
} from "@sveltejs/kit";

export type RequestHandler<Body = unknown> = GenericRequestHandler<
  Record<string, string>,

  //@ts-expect-error: body not readable
  Body
>;


export type RequestHandlerOutput<Body = unknown> = GenericRequestHandlerOutput<

  //@ts-expect-error: body not readable
  Body
>;


export interface Todo {
  id: string,
  title: string,
  description: string,
  done: boolean
}

