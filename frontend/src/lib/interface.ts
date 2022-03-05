import type {
  RequestHandler as GenericRequestHandler,
  RequestHandlerOutput as GenericRequestHandlerOutput
} from "@sveltejs/kit";

export type RequestHandler< params = Record<string, string>, Body = unknown> =
GenericRequestHandler<
  params,

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

