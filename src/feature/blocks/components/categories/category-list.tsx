"use client";

import { Container, Group, Tabs, Tooltip } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
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
    // Prevent navigation to coming soon categories
    const category = categories.find((c) => c.slug === value);
    if (category?.comingSoon) return;
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
            <Tooltip
              key={category.slug}
              label="Coming soon"
              disabled={!category.comingSoon}
              position="top"
              withArrow
              arrowSize={6}
              transitionProps={{ transition: "pop", duration: 150 }}
              color="violet"
              fz="xs"
              fw={500}
            >
              <Tabs.Tab
                value={category.slug}
                className={category.comingSoon ? classes.comingSoon : undefined}
                data-coming-soon={category.comingSoon || undefined}
              >
                <Group gap={6}>
                  {category.name}
                  {category.comingSoon && (
                    <IconLock size={14} className={classes.lockIcon} />
                  )}
                </Group>
              </Tabs.Tab>
            </Tooltip>
          ))}
        </Tabs.List>
      </Tabs>
    </Container>
  );
}
