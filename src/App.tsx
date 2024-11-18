import { Anchor, Group, SegmentedControl, Stack } from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import MantineCards from "./components/cards/mantine-cards";
import ComponentsDemo from "./components/components-demo/components-demo";
import PageLayout from "./components/layout/page-layout";
import ThemeCustomizer from "./components/theme-customizer";

export default function ThemesPage({ tab }: { tab: string }) {

  const [value, setValue] = useState(tab ?? "example");
 
  const navigate = useNavigate();


  const onTabChange = (value: string) => {
    setValue(value);
    navigate({ to: value === "components" ? "/components" : "/" });
  }

  return (
    <PageLayout
      title="Mantine Modern Themes"
      description={
        <>
          Save time on styling with our ready-to-use themes for{" "}
          <Anchor target="_blank" href="https://mantine.dev/">
            Mantine
          </Anchor>{" "}
          components. Just copy, paste, and watch your app come to life.
        </>
      }
    >
      <Stack>
        <ThemeCustomizer />
        <Group justify="center">
          <SegmentedControl
            w={"200px"}
            size="xs"
            value={value}
            onChange={onTabChange} 
            data={[
              { label: "Example", value: "example" },
              { label: "All Components", value: "components" },
            ]}
          />
        </Group>

        {value === "example" ? <MantineCards /> : <ComponentsDemo />}

      </Stack>
   </PageLayout>
  );
}
