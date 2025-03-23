import Link from "next/link";
import cx from "clsx";
import { Card, CardSection, Image, Text } from "@mantine/core";
import classes from "./category-card.module.css";
import { Category } from "../../data/types";

export interface CategoryCardProps {
  className?: string;
  category: Category;
  count: number;
}

export function CategoryCard({ count, category, className }: CategoryCardProps) {
  return (
    <Card component={Link} href={`/blocks/${category.slug}`} className={cx(classes.card, className)} radius="md">
      <CardSection className={classes.imageWrapper}>
        <Image className={classes.image} src={category.images.light} alt={category.name} data-light />
        <Image className={classes.image} src={category.images.dark} alt={category.name} data-dark />
      </CardSection>

      <Text className={classes.title}>{category.name}</Text>
      <Text className={classes.description} fz="xs">
        {count} {count === 1 ? "component" : "components"}
      </Text>
    </Card>
  );
}
