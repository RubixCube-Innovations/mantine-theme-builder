import {
  Box,
  Button,
  ColorSwatch,
  Group,
  MantineColorShade,
  MantineColorsTuple,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useTheme } from "../ThemeContext";
import { mantineTheme, shadcnTheme } from "../theme";
import { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } from "../utils/colors";
import CopyThemeModal from "./modals/copy-modal";
import { getSecondaryPalette } from "../utils/functions";

export interface IThemeConfig {
  style: string;
  color: string;
  radius: string;
}

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

      <CopyThemeModal />
    </Group>
  );
}

function Customizer() {
  const { setTheme } = useTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const [localThemeConfig, setLocalThemeConfig, removeLocalThemeConfig] = useLocalStorage<IThemeConfig>({
    key: "mantine-theme",
  });

  const [baseColors, setBaseColors] = React.useState(MANTINE_DEFAULT_COLORS);
  const [config, setConfig] = React.useState<IThemeConfig>({
    style: "mantine",
    color: MANTINE_DEFAULT_COLORS[0].id,
    radius: "md",
  });

  console.log("localThemeConfig", localThemeConfig);
  console.log("config", config);

  React.useEffect(() => {
    if (localThemeConfig) {
      setConfig(localThemeConfig);

      if (localThemeConfig?.style === "shadcn") {
        setBaseColors(SHADCN_DEFAULT_COLORS);
      } else {
        setBaseColors(MANTINE_DEFAULT_COLORS);
      }
    }
  }, [localThemeConfig]);

  const mantineColorButtons = baseColors.map((color) => (
    <Button
    variant={"outline"}
    style={{ borderColor: config.color === color.id ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
      leftSection={<ColorSwatch size={20} color={color.color} />}
      key={color.id}
      onClick={() => {
        const updatedConfig = {
          ...config,
          color: color.id,
        };
        setConfig(updatedConfig);
        setLocalThemeConfig(updatedConfig);
        setTheme((currentTheme) => ({
          ...currentTheme,
          primaryColor: color.id,
          primaryShade: color?.primaryShade as unknown as MantineColorShade,
          colors: {
            ...currentTheme?.colors,
            secondary: getSecondaryPalette(config.style, color.id) as unknown as MantineColorsTuple,
            dark: getSecondaryPalette(config.style, color.id) as unknown as MantineColorsTuple,
          },
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
                radius: "md",
              });
              setTheme({
                ...mantineTheme,
                primaryColor: MANTINE_DEFAULT_COLORS[0].id,
              });
              removeLocalThemeConfig();
            }}
          >
            <ResetIcon />
          </Button>
        </Group>

        <Stack gap="xs">
          <Text size="xs">Style</Text>

          <SimpleGrid cols={3}>
            <Button
              variant={"outline"}
              style={{ borderColor: config.style === "mantine" ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
              size="xs"
              onClick={() => {
                //TODO: Refactoring needed
                const updatedConfig = {
                  ...config,
                  style: "mantine",
                  color: MANTINE_DEFAULT_COLORS[0].id,
                };
                setConfig(updatedConfig);
                setLocalThemeConfig(updatedConfig);
                setTheme(() => ({
                  ...mantineTheme,
                  primaryColor: MANTINE_DEFAULT_COLORS[0].id,
                }));
              }}
            >
              Mantine
            </Button>
            <Button
              variant={"outline"}
              style={{ borderColor: config.style === "shadcn" ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
              size="xs"
              onClick={() => {
                const updatedConfig = {
                  ...config,
                  style: "shadcn",
                  color: SHADCN_DEFAULT_COLORS[0].id,
                };
                setConfig(updatedConfig);
                setLocalThemeConfig(updatedConfig);
                setTheme(() => ({
                  ...shadcnTheme,
                  primaryColor: SHADCN_DEFAULT_COLORS[0].id,
                }));
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
            {["0", "xs", "sm", "md", "lg", "xl"].map((value: string) => {
              return (
                <Button
                  variant={"outline"}
                  style={{ borderColor: config.radius === value ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
                  size="xs"
                  key={value}
                  onClick={() => {
                    const updatedConfig = {
                      ...config,
                      radius: value,
                    };
                    setConfig(updatedConfig);
                    setLocalThemeConfig(updatedConfig);
                    setTheme((prev) => ({
                      ...prev,
                      defaultRadius: value,
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
              variant={"outline"}
              style={{ borderColor: colorScheme === "light" ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
              size="xs"
              onClick={() => setColorScheme("light")}
            >
              <Group gap="xs">
                <SunIcon />
                <Text fw="500">Light</Text>
              </Group>
            </Button>
            <Button
                variant={"outline"}
              style={{ borderColor: colorScheme === "dark" ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-default-border)" }}
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
