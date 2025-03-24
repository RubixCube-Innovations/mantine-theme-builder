"use client";

import { Container, Tabs } from "@mantine/core";
import { useRouter, usePathname } from "next/navigation";
import classes from "./category-list.module.css";
import { CategoriesGroup } from "../../data/types";

interface CategoriesListProps {
  groups: CategoriesGroup[];
}

export function CategoriesList({ groups }: CategoriesListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const categories = groups[0]?.categories || [];

  // Get the current category from the pathname
  const currentCategory = pathname.split("/").pop() || categories[0]?.slug;

  const handleTabChange = (value: string | null) => {
    router.push(`/blocks/${value}`);
  };

  return (
    <Container size="xl" px="0" className={classes.wrapper}>
      {/* <Title className={classes.mainTitle} order={2}>
        {groups[0]?.name}
      </Title> */}

      <Tabs value={currentCategory} onChange={handleTabChange} variant="outline">
        <Tabs.List>
          {categories.map((category) => (
            <Tabs.Tab key={category.slug} value={category.slug}>
              {category.name}
              {/* ({componentsCountByCategory[category.slug] || 0}) */}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Container>
  );
}
