import type { Component } from "svelte";

interface BaseMetadata {
  title: string;
  description: string;
  tldr: string;
  slug: string;
  created_at: string;
  updated_at: string;
  published: boolean;
}

export type PrincipleMetadata = BaseMetadata & { type: "intrapersonell" | "interpersonell" };

export interface PrincipleContent {
  metadata: PrincipleMetadata;
  default: Component;
}
