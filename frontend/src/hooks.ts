import type { Handle } from "@sveltejs/kit";

export const handle: Handle =  async ({ event, resolve }) =>  {
  if (event.request.headers.get("content-type") == "application/x-www-form-urlencoded") {
    const json = {};

    (await event.request.formData()).forEach((value, key) => json[key] = value);

    event.request.headers.set("content-type", "application/json");
    event.request = new Request(event.request, { body: JSON.stringify(json) });
  }

  const response = await resolve(event);

  if (event.url.searchParams.get("noJS") == "true") {
    const redirect = event.url.searchParams.get("redirect") || "/";

    response.headers.set("location", redirect);

    const final = new Response("", {
      status:  301,
      headers: response.headers
    });

    return final;
  }


  return response;
};
