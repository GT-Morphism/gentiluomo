import { json, type RequestHandler } from "@sveltejs/kit";
import type { PrincipleMetadata } from "~content/content.types";

// TODO: Maybe there is a possibility to generate a OpenAPI spec from such endpoints.
async function getPrinciplesMetadata() {
  let principlesMetadata: PrincipleMetadata[] = [];

  const paths = import.meta.glob("/src/content/prinzipien/**/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const metadata = file.metadata as PrincipleMetadata;
      if (metadata.published) {
        principlesMetadata.push(metadata);
      }
    }
  }

  principlesMetadata = principlesMetadata.toSorted((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return principlesMetadata;
}

export const GET: RequestHandler = async () => {
  const principlesMetadata = await getPrinciplesMetadata();
  return json(principlesMetadata);
};
