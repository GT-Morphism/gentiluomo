import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string): param is "interpersonell" | "intrapersonell" => {
  return param === "interpersonell" || param === "intrapersonell";
}) satisfies ParamMatcher;
