"use client";

import ComponentsDemo from "@/components/custom/components-demo/components-demo";
import PageLayout from "@/components/layouts/page-layout";

export default function Page() {
  return (
    <PageLayout
      title="Mantine Components Playground ⛹️‍♂️"
      description="Preview all Mantine components with your theme. Explore variants, sizes, and states in real time."
    >
      <ComponentsDemo />
    </PageLayout>
  );
}
