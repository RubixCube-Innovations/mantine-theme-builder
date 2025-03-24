import { Container } from "@mantine/core";
import { CategoriesList } from "../categories/category-list";
import { CATEGORIES } from "../../data/categories";

const BlockComponents = () => {
  return (
    <Container size="xl" miw={"100%"} maw={"100%"} px={0}>
      <div id="main">
        <CategoriesList groups={CATEGORIES} />
      </div>
    </Container>
  );
};

export default BlockComponents;
