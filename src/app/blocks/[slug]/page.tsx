import CategoryPage from "@/feature/blocks/components/categories/category-page";
import { CATEGORIES_SLUGS, getCategoryData } from "@/feature/blocks/data/categories";
import { getComponentsByCategory } from "@/feature/blocks/data/fn";
import { Title } from "@mantine/core";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return CATEGORIES_SLUGS.map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = getCategoryData(slug);
  const components = getComponentsByCategory()[slug];

  return (
    <div>
      <Title order={2} pt="xl">
        {category?.name} components
      </Title>
      <CategoryPage components={components} />
    </div>
  );
}
