export const generatedShadcnTheme = {
  zinc: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: zincColors,
    secondary: zincColors,
    dark: zincColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":8,"dark":0},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  slate: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: slateColors,
    secondary: slateColors,
    dark: slateColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":8,"dark":0},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  gray: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: grayColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":8,"dark":0},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  neutral: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: neutralColors,
    secondary: neutralColors,
    dark: neutralColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":8,"dark":0},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  stone: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: stoneColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":8,"dark":0},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  red: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: redColors,
    secondary: neutralColors,
    dark: neutralColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  rose: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: roseColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  orange: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: orangeColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":6},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  amber: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: amberColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  yellow: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: yellowColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":4,"dark":4},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  lime: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: limeColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":4},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  green: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: greenColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":6,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  emerald: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: emeraldColors,
    secondary: stoneColors,
    dark: stoneColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  teal: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: tealColors,
    secondary: slateColors,
    dark: slateColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":4},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  cyan: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: cyanColors,
    secondary: slateColors,
    dark: slateColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":4},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  sky: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: skyColors,
    secondary: slateColors,
    dark: slateColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":4},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  blue: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: blueColors,
    secondary: slateColors,
    dark: slateColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":6,"dark":5},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  indigo: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: indigoColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":6},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  violet: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: violetColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":6},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  purple: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: purpleColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":6},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  fuchsia: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: fuchsiaColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":7},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`,
  pink: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  MantineColorsTuple,
  MantineThemeOverride,
  Mark,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme: MantineThemeOverride = createTheme({
  colors: {
    slate: slateColors,
    gray: grayColors,
    zinc: zincColors,
    neutral: neutralColors,
    stone: stoneColors,

    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    amber: amberColors,
    yellow: yellowColors,

    lime: limeColors,
    green: greenColors,
    emerald: emeraldColors,

    teal: tealColors,
    cyan: cyanColors,
    sky: skyColors,
    blue: blueColors,

    indigo: indigoColors,
    violet: violetColors,
    purple: purpleColors,
    fuchsia: fuchsiaColors,
    pink: pinkColors,

    primary: pinkColors,
    secondary: grayColors,
    dark: grayColors,

    error: redColors as MantineColorsTuple,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: {"light":5,"dark":6},
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "Geist",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
  defaultRadius: "sm",
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  },
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },

  headings: {
    fontFamily: "Geist",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  cursorType: "pointer",
  other: {
    style: "shadcn",
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? ["zinc", "slate", "gray", "neutral", "stone"].includes(props.color)
                ? "var(--mantine-color-body)"
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    Switch: Switch.extend({
      styles: () => ({
        thumb: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";

        return {
          root: {
            "--ai-color": (() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      }
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--button-color":(() => {
              if (variant === "filled") {
                if (colorKey) {
                  return \`var(--mantine-color-\${colorKey}-contrast)\`;
                }
                return "var(--mantine-primary-color-contrast)";
              }
              if (variant === "white") {
                if (isNeutralColor || isNeutralPrimaryColor) {
                  return "var(--mantine-color-black)";
                }
                return undefined;
              }
              return undefined;
            })(),
          },
        };
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
    NavLink: NavLink.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
          },
          children: {},
        };
      },
    }),
    Pagination: Pagination.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({   
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--alert-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "white"
                ? (isNeutralColor || isNeutralPrimaryColor
                  ? \`var(--mantine-color-black)\`
                  : undefined)
                : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "light";
        return {
          root: {
            "--avatar-bg":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light)\`
                    : "var(--mantine-primary-color-light)"
                  : undefined,

            "--avatar-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : variant === "light"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-light-color)\`
                    : "var(--mantine-primary-color-light-color)"
                  : variant === "white"
                    ? isNeutralColor || isNeutralPrimaryColor
                      ? \`var(--mantine-color-black)\`
                      : colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                    : variant === "outline" || variant === "transparent"
                      ? colorKey
                        ? \`var(--mantine-color-\${colorKey}-outline)\`
                        : "var(--mantine-primary-color-filled)"
                      : undefined,

            "--avatar-bd":
              variant === "outline"
                ? colorKey
                  ? \`1px solid var(--mantine-color-\${colorKey}-outline)\`
                  : "1px solid var(--mantine-primary-color-filled)"
                : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
        const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor);

        const variant = props.variant ?? "filled";
        return {
          root: {
              "--ti-color": variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (isNeutralColor || isNeutralPrimaryColor
                    ? \`var(--mantine-color-black)\`
                    : undefined)
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});`
};