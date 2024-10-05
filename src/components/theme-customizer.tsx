import * as React from "react"
import {
    CheckIcon,
    CopyIcon,
    InfoCircledIcon,
    MoonIcon,
    ResetIcon,
    SunIcon,
} from "@radix-ui/react-icons"
import { Button, Drawer, Popover, Tooltip, Skeleton, Dialog, Text, Group, Stack, Title, Paper, ActionIcon, Grid, useMantineTheme } from '@mantine/core';


export function ThemeCustomizer() {
  
    const mantimeTheme = useMantineTheme();

    const [theme, setTheme] = React.useState()

    return (
        <Group gap="xs">
            <Drawer
                opened={false}
                onClose={() => {}}
                title="Customize"
                padding="xl"
                size="xl"
            >
                <Customizer />
            </Drawer>
            <Popover width={340} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button size="sm">Customize</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Customizer />
                </Popover.Dropdown>
            </Popover>
            <Group gap="xs">
             <>
                        {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                            const baseColor = baseColors.find(
                                (baseColor) => baseColor.name === color
                            )
                            const isActive = config.theme === color

                            if (!baseColor) {
                                return null
                            }

                            return (
                                <Tooltip key={baseColor.name} label={baseColor.label}>
                                    <ActionIcon
                                        onClick={() =>
                                            setTheme({
                                                ...theme,
                                                theme: baseColor.name,
                                            })
                                        }
                                        variant={isActive ? "filled" : "outline"}
                                        color={baseColor.name}
                                        size="lg"
                                    >
                                        {isActive && <CheckIcon />}
                                    </ActionIcon>
                                </Tooltip>
                            )
                        })}
                    </>
                
            </Group>
            <Button variant="outline" size="sm" />
        </Group>
    )
}

function Customizer() {

    const theme = useMantineTheme();

    return (
        <ThemeWrapper defaultTheme="zinc">
            <Stack gap="md">
                <Group position="apart">
                    <Stack gap={0}>
                        <Title order={4}>Customize</Title>
                        <Text size="xs" color="dimmed">
                            Pick a style and color for your components.
                        </Text>
                    </Stack>
                    <Button
                        variant="outline"
                        size="xs"
                        onClick={() => {
                            setTheme({
                                ...config,
                                theme: "zinc",
                                radius: 0.5,
                            })
                        }}
                    >
                        <ResetIcon />
                    </Button>
                </Group>
                <Stack gap="xs">
                    <Group position="apart">
                        <Text size="xs">Style</Text>
                        <Popover width={200} position="right" withArrow shadow="md">
                            <Popover.Target>
                                <ActionIcon size="xs">
                                    <InfoCircledIcon />
                                </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Text size="sm">
                                    What is the difference between the New York and Default style?
                                </Text>
                                <Text size="sm">
                                    A style comes with its own set of components, animations,
                                    icons and more.
                                </Text>
                                <Text size="sm">
                                    The <strong>Default</strong> style has larger inputs, uses
                                    lucide-react for icons and tailwindcss-animate for animations.
                                </Text>
                                <Text size="sm">
                                    The <strong>New York</strong> style ships with smaller buttons
                                    and cards with shadows. It uses icons from Radix Icons.
                                </Text>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>
                    <Group gap="xs">
                        <Button
                            variant={config.style === "default" ? "filled" : "outline"}
                            size="xs"
                            onClick={() => setTheme({ ...config, style: "default" })}
                        >
                            Default
                        </Button>
                        <Button
                            variant={config.style === "new-york" ? "filled" : "outline"}
                            size="xs"
                            onClick={() => setTheme({ ...config, style: "new-york" })}
                        >
                            New York
                        </Button>
                    </Group>
                </Stack>
                <Stack gap="xs">
                    <Text size="xs">Color</Text>
                    <Grid>
                        {baseColors.map((theme) => {
                            const isActive = config.theme === theme.name

                            return mounted ? (
                                <Grid.Col span={4} key={theme.name}>
                                    <Button
                                        variant={isActive ? "filled" : "outline"}
                                        size="xs"
                                        onClick={() => {
                                            setTheme({
                                                ...config,
                                                theme: theme.name,
                                            })
                                        }}
                                        color={theme.name}
                                    >
                                        {isActive && <CheckIcon />}
                                        {theme.label}
                                    </Button>
                                </Grid.Col>
                            ) : (
                                <Grid.Col span={4} key={theme.name}>
                                    <Skeleton height={32} />
                                </Grid.Col>
                            )
                        })}
                    </Grid>
                </Stack>
                <Stack gap="xs">
                    <Text size="xs">Radius</Text>
                    <Group gap="xs">
                        {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
                            return (
                                <Button
                                    variant={config.radius === parseFloat(value) ? "filled" : "outline"}
                                    size="xs"
                                    key={value}
                                    onClick={() => {
                                        setTheme({
                                            ...config,
                                            radius: parseFloat(value),
                                        })
                                    }}
                                >
                                    {value}
                                </Button>
                            )
                        })}
                    </Group>
                </Stack>
                <Stack gap="xs">
                    <Text size="xs">Mode</Text>
                    <Group gap="xs">
                        {mounted ? (
                            <>
                                <Button
                                    variant={mode === "light" ? "filled" : "outline"}
                                    size="xs"
                                    onClick={() => setMode("light")}
                                >
                                    <SunIcon />
                                    Light
                                </Button>
                                <Button
                                    variant={mode === "dark" ? "filled" : "outline"}
                                    size="xs"
                                    onClick={() => setMode("dark")}
                                >
                                    <MoonIcon />
                                    Dark
                                </Button>
                            </>
                        ) : (
                            <>
                                <Skeleton height={32} />
                                <Skeleton height={32} />
                            </>
                        )}
                    </Group>
                </Stack>
            </Stack>
        </ThemeWrapper>
    )
}

function CopyCodeButton({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    const [config] = useConfig()
    const activeTheme = baseColors.find((theme) => theme.name === config.theme)
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    return (
        <>
            {activeTheme && (
                <Button
                    onClick={() => {
                        copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
                            name: "copy_theme_code",
                            properties: {
                                theme: activeTheme.name,
                                radius: config.radius,
                            },
                        })
                        setHasCopied(true)
                    }}
                    className={className}
                    {...props}
                >
                    {hasCopied ? (
                        <CheckIcon />
                    ) : (
                        <CopyIcon />
                    )}
                    Copy code
                </Button>
            )}
            <Dialog opened={false} onClose={() => {}}>
                <Dialog.Target>
                    <Button className={className} {...props}>
                        Copy code
                    </Button>
                </Dialog.Target>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Theme</Dialog.Title>
                        <Dialog.Description>
                            Copy and paste the following code into your CSS file.
                        </Dialog.Description>
                    </Dialog.Header>
                    <ThemeWrapper defaultTheme="zinc">
                        <CustomizerCode />
                        {activeTheme && (
                            <Button
                                size="xs"
                                onClick={() => {
                                    copyToClipboardWithMeta(
                                        getThemeCode(activeTheme, config.radius),
                                        {
                                            name: "copy_theme_code",
                                            properties: {
                                                theme: activeTheme.name,
                                                radius: config.radius,
                                            },
                                        }
                                    )
                                    setHasCopied(true)
                                }}
                            >
                                {hasCopied ? (
                                    <CheckIcon />
                                ) : (
                                    <CopyIcon />
                                )}
                                Copy
                            </Button>
                        )}
                    </ThemeWrapper>
                </Dialog.Content>
            </Dialog>
        </>
    )
}

function CustomizerCode() {
    const [config] = useConfig()
    const activeTheme = baseColors.find((theme) => theme.name === config.theme)

    return (
        <ThemeWrapper defaultTheme="zinc">
            <Paper shadow="xs" padding="md">
                <pre>
                    <code>
                        <span>@layer base &#123;</span>
                        <span>&nbsp;&nbsp;:root &#123;</span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
                            {activeTheme?.cssVars.light["background"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
                            {activeTheme?.cssVars.light["foreground"]};
                        </span>
                        {[
                            "card",
                            "popover",
                            "primary",
                            "secondary",
                            "muted",
                            "accent",
                            "destructive",
                        ].map((prefix) => (
                            <>
                                <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                                    {
                                        activeTheme?.cssVars.light[
                                            prefix as keyof typeof activeTheme.cssVars.light
                                        ]
                                    }
                                    ;
                                </span>
                                <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                                    {
                                        activeTheme?.cssVars.light[
                                            `${prefix}-foreground` as keyof typeof activeTheme.cssVars.light
                                        ]
                                    }
                                    ;
                                </span>
                            </>
                        ))}
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
                            {activeTheme?.cssVars.light["border"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
                            {activeTheme?.cssVars.light["input"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
                            {activeTheme?.cssVars.light["ring"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
                        </span>
                        {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(
                            (prefix) => (
                                <>
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                                        {
                                            activeTheme?.cssVars.light[
                                                prefix as keyof typeof activeTheme.cssVars.light
                                            ]
                                        }
                                        ;
                                    </span>
                                </>
                            )
                        )}
                        <span>&nbsp;&nbsp;&#125;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;&nbsp;.dark &#123;</span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
                            {activeTheme?.cssVars.dark["background"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
                            {activeTheme?.cssVars.dark["foreground"]};
                        </span>
                        {[
                            "card",
                            "popover",
                            "primary",
                            "secondary",
                            "muted",
                            "accent",
                            "destructive",
                        ].map((prefix) => (
                            <>
                                <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                                    {
                                        activeTheme?.cssVars.dark[
                                            prefix as keyof typeof activeTheme.cssVars.dark
                                        ]
                                    }
                                    ;
                                </span>
                                <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                                    {
                                        activeTheme?.cssVars.dark[
                                            `${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark
                                        ]
                                    }
                                    ;
                                </span>
                            </>
                        ))}
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
                            {activeTheme?.cssVars.dark["border"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
                            {activeTheme?.cssVars.dark["input"]};
                        </span>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
                            {activeTheme?.cssVars.dark["ring"]};
                        </span>
                        {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(
                            (prefix) => (
                                <>
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                                        {
                                            activeTheme?.cssVars.dark[
                                                prefix as keyof typeof activeTheme.cssVars.dark
                                            ]
                                        }
                                        ;
                                    </span>
                                </>
                            )
                        )}
                        <span>&nbsp;&nbsp;&#125;</span>
                        <span>&#125;</span>
                    </code>
                </pre>
            </Paper>
        </ThemeWrapper>
    )
}

function getThemeCode(theme: BaseColor, radius: number) {
    if (!theme) {
        return ""
    }

    return template(BASE_STYLES_WITH_VARIABLES)({
        colors: theme.cssVars,
        radius,
    })
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
    :root {
        --background: <%- colors.light["background"] %>;
        --foreground: <%- colors.light["foreground"] %>;
        --card: <%- colors.light["card"] %>;
        --card-foreground: <%- colors.light["card-foreground"] %>;
        --popover: <%- colors.light["popover"] %>;
        --popover-foreground: <%- colors.light["popover-foreground"] %>;
        --primary: <%- colors.light["primary"] %>;
        --primary-foreground: <%- colors.light["primary-foreground"] %>;
        --secondary: <%- colors.light["secondary"] %>;
        --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
        --muted: <%- colors.light["muted"] %>;
        --muted-foreground: <%- colors.light["muted-foreground"] %>;
        --accent: <%- colors.light["accent"] %>;
        --accent-foreground: <%- colors.light["accent-foreground"] %>;
        --destructive: <%- colors.light["destructive"] %>;
        --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
        --border: <%- colors.light["border"] %>;
        --input: <%- colors.light["input"] %>;
        --ring: <%- colors.light["ring"] %>;
        --radius: <%- radius %>rem;
        --chart-1: <%- colors.light["chart-1"] %>;
        --chart-2: <%- colors.light["chart-2"] %>;
        --chart-3: <%- colors.light["chart-3"] %>;
        --chart-4: <%- colors.light["chart-4"] %>;
        --chart-5: <%- colors.light["chart-5"] %>;
    }

    .dark {
        --background: <%- colors.dark["background"] %>;
        --foreground: <%- colors.dark["foreground"] %>;
        --card: <%- colors.dark["card"] %>;
        --card-foreground: <%- colors.dark["card-foreground"] %>;
        --popover: <%- colors.dark["popover"] %>;
        --popover-foreground: <%- colors.dark["popover-foreground"] %>;
        --primary: <%- colors.dark["primary"] %>;
        --primary-foreground: <%- colors.dark["primary-foreground"] %>;
        --secondary: <%- colors.dark["secondary"] %>;
        --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
        --muted: <%- colors.dark["muted"] %>;
        --muted-foreground: <%- colors.dark["muted-foreground"] %>;
        --accent: <%- colors.dark["accent"] %>;
        --accent-foreground: <%- colors.dark["accent-foreground"] %>;
        --destructive: <%- colors.dark["destructive"] %>;
        --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
        --border: <%- colors.dark["border"] %>;
        --input: <%- colors.dark["input"] %>;
        --ring: <%- colors.dark["ring"] %>;
        --chart-1: <%- colors.dark["chart-1"] %>;
        --chart-2: <%- colors.dark["chart-2"] %>;
        --chart-3: <%- colors.dark["chart-3"] %>;
        --chart-4: <%- colors.dark["chart-4"] %>;
        --chart-5: <%- colors.dark["chart-5"] %>;
    }
}
`
