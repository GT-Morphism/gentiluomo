import type { LayoutServerLoad } from "./$types";
import type { PrincipleMetadata } from "~content/content.types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  const response = await fetch("/api/content/prinzipien");
  const principles = (await response.json()) as PrincipleMetadata[];
  const intraPrinciples = principles.filter((principle) => principle.type === "intrapersonell");
  const interPrinciples = principles.filter((principle) => principle.type === "interpersonell");

  return { principles, intraPrinciples, interPrinciples };
};
