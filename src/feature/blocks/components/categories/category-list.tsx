import { Container, SimpleGrid, Title } from "@mantine/core";
import classes from "./category-list.module.css";
import { CategoryCard } from "./category-card";
import { CategoriesGroup } from "../../data/types";

interface CategoriesListProps {
  groups: CategoriesGroup[];
  componentsCountByCategory: Record<string, number>;
}

export function CategoriesList({ groups, componentsCountByCategory }: CategoriesListProps) {
  const items = groups.map((group) => {
    const cards = group.categories.map((category) => (
      <CategoryCard key={category.slug} category={category} count={componentsCountByCategory[category.slug]} />
    ));

    // const totalComponents = group.categories.reduce(
    //   (acc, category) => acc + componentsCountByCategory[category.slug],
    //   0
    // );

    return (
      <div key={group.name} className={classes.group}>
        {/* <div className={classes.header}>
          <Title className={classes.title} order={2}>
            {group.name}
          </Title>

          <Text size="sm" c="dimmed" className={classes.count}>
            {totalComponents} components
          </Text>
        </div> */}

        <SimpleGrid id="cards-grid" cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {cards}
        </SimpleGrid>
      </div>
    );
  });

  return (
    <Container size="xl" px="0" className={classes.wrapper}>
      <Title className={classes.mainTitle} order={2}>
        All Components
      </Title>
      {items}
    </Container>
  );
}
