import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { PrincipleContent } from "~content/content.types";

export const load: PageLoad = async ({ params }) => {
  const principle = (await import(
    `~content/prinzipien/${params.type}/${params.slug}.md`
  )) as PrincipleContent;

  if (!principle.metadata.published) {
    error(404, {
      message: "Entweder dieses Prinzip gibt es nicht oder ich habe es noch nicht publik gemacht.",
    });
  }

  return {
    meta: principle.metadata,
    content: principle.default,
  };
};
