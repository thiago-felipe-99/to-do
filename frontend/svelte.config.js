import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/**@type {import('@sveltejs/kit').Config} */

const config = {

  /*Consult https://github.com/sveltejs/svelte-preprocess
     For more information about preprocessors */

  preprocess: preprocess(),

  kit: {
    adapter:        adapter(),
    methodOverride: {
      allowed: [
        "PUT",
        "PATCH",
        "DELETE"
      ]
    }
  }
};

export default config;
