"use client";
import { CATEGORIES } from "@/feature/blocks/data/categories";
import { redirect } from "next/navigation";

export default function Page() {
  // Redirect to the first category by default
  const defaultCategory = CATEGORIES[0]?.categories[0]?.slug;
  if (defaultCategory) {
    redirect(`/blocks/${defaultCategory}`);
  }

  return <></>;
}
