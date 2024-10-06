import {
  Box,
  Button,
  Group,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useTheme } from "../ThemeContext";

const baseColors = [
  "blue",
  "slate",
  "stone",
  "gray",
  "neutral",
  "red",
  "rose",
  "orange",
  "green",
  "lime",
  "yellow",
  "violet",
];

export default function ThemeCustomizer() {
  return (
    <Group>
      <Popover position="bottom-start">
        <Popover.Target>
          <Button size="sm">Customize</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Customizer />
        </Popover.Dropdown>
      </Popover>

      <Button variant="light" size="sm">
        Copy Code
      </Button>
    </Group>
  );
}

function Customizer() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { setTheme } = useTheme();

  const [config, setConfig] = React.useState({
    theme: "blue",
    style: "default",
    radius: 0.5,
  });
  return (
    <Box>
      <Stack gap="md">
        <Group justify="space-between">
          <Box>
            <Text fw={500}>Customize</Text>
            <Text size="xs" c="dimmed">
              Pick a style and color for your components.
            </Text>
          </Box>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              setConfig({
                ...config,
                theme: "blue",
                radius: 0.5,
              });
            }}
          >
            <ResetIcon />
          </Button>
        </Group>
        <Stack gap="xs">
          <Text size="xs">Style</Text>

          <SimpleGrid cols={3}>
            <Button
              variant={config.style === "default" ? "filled" : "outline"}
              size="xs"
              onClick={() => setConfig({ ...config, style: "default" })}
            >
              Mantine
            </Button>
            <Button
              variant={config.style === "new-york" ? "filled" : "outline"}
              size="xs"
              onClick={() => setConfig({ ...config, style: "new-york" })}
            >
              Shadcn
            </Button>
          </SimpleGrid>
        </Stack>
        <Stack gap="xs">
          <Text size="xs">Color</Text>
          <SimpleGrid cols={3}>
            {baseColors.map((theme) => {
              const isActive = config.theme === theme;

              return (
                <Button
                  variant={isActive ? "filled" : "outline"}
                  size="xs"
                  key={theme}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme,
                    });
                    setTheme((currentTheme) => ({
                      ...currentTheme,
                      primaryColor: theme,
                    }));
                  }}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </Button>
              );
            })}
          </SimpleGrid>
        </Stack>
        <Stack gap="xs">
          <Text size="xs">Radius</Text>
          <SimpleGrid cols={5}>
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={
                    config.radius === parseFloat(value) ? "filled" : "outline"
                  }
                  size="xs"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                  }}
                >
                  {value}
                </Button>
              );
            })}
          </SimpleGrid>
        </Stack>
        <Stack gap="xs">
          <Text size="xs">Mode</Text>
          <SimpleGrid cols={3}>
            <Button
              variant={colorScheme === "light" ? "filled" : "outline"}
              size="xs"
              onClick={() => setColorScheme("light")}
            >
              <Group gap="xs">
                <SunIcon />
                <Text>Light</Text>
              </Group>
            </Button>
            <Button
              variant={colorScheme === "dark" ? "filled" : "outline"}
              size="xs"
              onClick={() => setColorScheme("dark")}
            >
              <Group gap="xs">
                <MoonIcon />
                <Text>Dark</Text>
              </Group>
            </Button>
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  );
}
