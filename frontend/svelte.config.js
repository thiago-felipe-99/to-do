import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scssLibPath = path.join(__dirname, "/src/styles");

/**@type {import('@sveltejs/kit').Config} */

const config = {

  /*Consult https://github.com/sveltejs/svelte-preprocess
     For more information about preprocessors */

  preprocess: preprocess({ scss: { includePaths: [ scssLibPath ] } }),

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
