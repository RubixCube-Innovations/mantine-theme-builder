import {
  Box,
  Button,
  ColorSwatch,
  Group,
  MantineColorShade,
  Popover,
  rgba,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } from "../utils/colors";
import { MantineLocalStorageTheme, useTheme } from "../ThemeContext";
import { mantineTheme, shadcnTheme } from "../theme";
import { radiusMapping } from "../utils/data";
import { useLocalStorage } from "@mantine/hooks";

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

      <Button variant="subtle" size="sm">
        Copy Code
      </Button>
    </Group>
  );
}

function Customizer() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const [localTheme, setLocalTheme, removeLocalTheme] =
    useLocalStorage<MantineLocalStorageTheme>({ key: "mantine-theme" });

  const { setTheme } = useTheme();
  const [config, setConfig] = React.useState({
    color: MANTINE_DEFAULT_COLORS[0].id,
    style: localTheme?.style ?? "mantine",
    radius: 0.5,
  });

  React.useEffect(() => {
    setConfig({
      ...config,
      style: localTheme?.style ?? "mantine",
    });
  }, [config, localTheme]);

  const [baseColors, setBaseColors] = React.useState(MANTINE_DEFAULT_COLORS);

  const mantineColorButtons = baseColors.map((color) => (
    <Button
      variant={config.color === color.id ? "outline" : "default"}
      leftSection={<ColorSwatch size={20} color={color.color} />}
      key={color.id}
      onClick={() => {
        setConfig({
          ...config,
          color: color.id,
        });
        setTheme((currentTheme) => ({
          ...currentTheme,
          primaryColor: color.id,
          primaryShade: color?.primaryShade as unknown as MantineColorShade,
          ...(colorScheme === "dark" && {
            other: {
              ...currentTheme?.other,
              cardBg:
                color?.id === "zinc"
                  ? "var(--mantine-color-dark-6)"
                  : rgba("var(--mantine-primary-color-light-hover)", 0.05),
            },
          }),
        }));
      }}
    >
      {color.name}
    </Button>
  ));

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
            variant="subtle"
            size="xs"
            onClick={() => {
              setConfig({
                ...config,
                color: MANTINE_DEFAULT_COLORS[0].id,
                style: "mantine",
                radius: 0.5,
              });
              setTheme({
                ...mantineTheme,
                primaryColor: MANTINE_DEFAULT_COLORS[0].id,
              });
              removeLocalTheme();
            }}
          >
            <ResetIcon />
          </Button>
        </Group>

        <Stack gap="xs">
          <Text size="xs">Style</Text>

          <SimpleGrid cols={3}>
            <Button
              variant={config.style === "mantine" ? "outline" : "default"}
              size="xs"
              onClick={() => {
                //TODO: Refactoring needed
                setConfig({
                  ...config,
                  style: "mantine",
                  color: MANTINE_DEFAULT_COLORS[0].id,
                });
                setBaseColors(MANTINE_DEFAULT_COLORS);
                setTheme(() => ({
                  ...mantineTheme,
                  primaryColor: MANTINE_DEFAULT_COLORS[0].id,
                }));
                setLocalTheme({ style: "mantine" });
              }}
            >
              Mantine
            </Button>
            <Button
              variant={config.style === "shadcn" ? "outline" : "default"}
              size="xs"
              onClick={() => {
                setConfig({
                  ...config,
                  style: "shadcn",
                  color: SHADCN_DEFAULT_COLORS[0].id,
                });
                setBaseColors(SHADCN_DEFAULT_COLORS);
                setTheme(() => ({
                  ...shadcnTheme,
                  primaryColor: SHADCN_DEFAULT_COLORS[0].id,
                }));
                setLocalTheme({ style: "shadcn" });
              }}
            >
              Shadcn
            </Button>
          </SimpleGrid>
        </Stack>
        <Stack gap="xs">
          <Text size="xs">Color</Text>
          <SimpleGrid cols={3}>{mantineColorButtons}</SimpleGrid>
        </Stack>
        <Stack gap="xs">
          <Text size="xs">Radius</Text>
          <SimpleGrid cols={5}>
            {["0", "0.375", "0.5", "0.75", "1.0"].map((value: string) => {
              return (
                <Button
                  variant={
                    config.radius === parseFloat(value) ? "outline" : "default"
                  }
                  size="xs"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                    setTheme((prev) => ({
                      ...prev,
                      defaultRadius: radiusMapping[value as string],
                    }));
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
              variant={colorScheme === "light" ? "outline" : "default"}
              size="xs"
              onClick={() => setColorScheme("light")}
            >
              <Group gap="xs">
                <SunIcon />
                <Text fw="500">Light</Text>
              </Group>
            </Button>
            <Button
              variant={colorScheme === "dark" ? "outline" : "default"}
              size="xs"
              onClick={() => setColorScheme("dark")}
            >
              <Group gap="xs">
                <MoonIcon />
                <Text fw="500">Dark</Text>
              </Group>
            </Button>
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  );
}
