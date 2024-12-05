import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Checkbox,
  Chip,
  Code,
  Container,
  createTheme,
  Dialog,
  HoverCard,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Popover,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  Table,
  Tooltip
} from "@mantine/core";

// prettier-ignore
import { Spotlight } from "@mantine/spotlight";
import { amberColors, blueColors, cyanColors, emeraldColors, fuchsiaColors, grayColors, greenColors, indigoColors, limeColors, neutralColors, orangeColors, pinkColors, purpleColors, redColors, roseColors, skyColors, slateColors, stoneColors, tealColors, violetColors, yellowColors, zincColors } from "../../utils/colors";
import { getShadcnCardClassname } from "../../utils/theme-functions";
const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const shadcnTheme = createTheme({
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
    secondary: zincColors, // secondary will be dynamically changed baesd on the primary color
    dark: zincColors, // dark will always be secondary color

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
  },
  focusRing: "never",
  scale: 1,
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 0 },
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
  // variantColorResolver: (component) => {
  //   const defaultResolvedColors = defaultVariantColorsResolver(component);

  //   if (component.variant === "default") {
  //     return {
  //       ...defaultResolvedColors,
  //       background: "var(--mantine-color-default)",
  //       border: "1px solid var(--mantine-color-default-border)",
  //       hover: "var(--mantine-color-default-hover)",
  //     };
  //   }

  //   if (component.variant === "filled") {
  //     return {
  //       ...defaultResolvedColors,
  //       background: "var(--mantine-primary-color-filled)",
  //       hover: "var(--mantine-primary-color-filled-hover)",
  //       color: "var(--mantine-primary-color-contrast)",
  //     };
  //   }

  //   if (component.variant === "light") {
  //     return {
  //       ...defaultResolvedColors,
  //       background: "var(--mantine-primary-color-light)",
  //       hover: "var(--mantine-primary-color-light-hover)",
  //       color: "var(--mantine-primary-color-light-color)",
  //     };
  //   }

  //   if (component.variant === "outline") {
  //     return {
  //       ...defaultResolvedColors,
  //       background: "var(--mantine-color-default)",
  //       border: "1px solid var(--mantine-color-default-border)",
  //       hover: "var(--mantine-color-default-hover)",
  //       color: "var(--mantine-color-default-color)",
  //     };
  //   }

  //   if (component.variant === "subtle") {
  //     return {
  //       ...defaultResolvedColors,
  //       background: "transparent",
  //       hover: "var(--mantine-color-default-hover)",
  //       color: "var(--mantine-color-default-color)",
  //     };
  //   }

  //   return defaultResolvedColors;
  // },
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
      vars: (theme, props) => ({
        root: {
          "--checkbox-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? `var(--mantine-color-${props.color}-filled)`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? `var(--mantine-color-${props.color}-contrast)`
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    Chip: Chip.extend({
      vars: (theme, props) => ({
        root: {
          "--chip-bg": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? `var(--mantine-color-${props.color}-light)`
                : `var(--mantine-color-${props.color}-filled)`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? `var(--mantine-color-${props.color}-light-hover)`
                : props.variant === "outline"
                  ? `var(--mantine-color-${props.color}-outline-hover)`
                  : `var(--mantine-color-${props.color}-filled-hover)`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? `var(--mantine-color-${props.color}-light-color)`
                : `var(--mantine-color-${props.color}-contrast)`
              : props.color
            : "var(--mantine-primary-color-contrast)",
        },
      }),
    }),
    //  Styles of Input, Fieldset component addded in styles.css
    Radio: Radio.extend({
      vars: (theme, props) => ({
        root: {
          "--radio-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? `var(--mantine-color-${props.color}-filled)`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? `var(--mantine-color-${props.color}-contrast)`
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
                ? "var(--mantine-color-bright)"
                : `var(--mantine-color-${props.color}-filled)`
              : props.color
            : "var(--mantine-color-default)",
        },
      }),
    }),
    // Add styles for Switch component
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
        return {
          root: {
            "--ai-color":
              (props.variant === undefined || props.variant === "filled") && props.color === undefined
                ? "var(--mantine-primary-color-contrast)"
                : colorKey && props.variant === "filled"
                  ? `var(--mantine-color-${colorKey}-contrast)`
                  : props.variant === "white" && isNeutralColor
                    ? "var(--mantine-color-bright)"
                    : undefined,
          },
        };
      },
    }),
    Button: Button.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--button-color":
              (props.variant === undefined || props.variant === "filled") && props.color === undefined
                ? "var(--mantine-primary-color-contrast)"
                : colorKey && props.variant === "filled"
                  ? `var(--mantine-color-${colorKey}-contrast)`
                  : props.variant === "white" && isNeutralColor
                    ? "var(--mantine-color-bright)"
                    : undefined,
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
        return {
          root: {
            "--nl-color":
              colorKey && props.variant === "filled" ? `var(--mantine-color-${colorKey}-contrast)` : undefined,
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
            "--pagination-active-color": colorKey ? `var(--mantine-color-${colorKey}-contrast)` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? `var(--mantine-color-${colorKey}-contrast)` : undefined,
          },
        };
      },
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    // Todo: Add styles for HoverCard
    HoverCard: HoverCard.extend({
      classNames: () => ({
        dropdown: "globalMantineHoverCard",
      }),
    }),
    // Todo: Add styles for Modal
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    // Todo: Add styles for Popover
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    // Todo: Add styles for Tooltip
    Tooltip: Tooltip.extend({
      styles: () => ({
        tooltip: {
          fontSize: "var(--mantine-font-size-xs)",
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      }),
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    // Todo: Add styles for Card
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: getShadcnCardClassname(theme.primaryColor),
      }),
    }),
    // Todo: Add styles for Code
    Code: Code.extend({
      vars: () => ({
        root: {
          "--code-bg": "var(--mantine-color-dark-filled)",
        },
      }),
      styles: () => ({
        root: {
          border: "1px solid var(--mantine-color-default-border)",
          color: "var(--mantine-color-text)",
        },
      }),
    }),
    // Todo: Add styles for Table
    Table: Table.extend({
      styles: () => ({
        table: {
          borderColor: "var(--mantine-color-default-border)",
        },
        tr: {
          borderColor: "var(--mantine-color-default-border)",
        },
        th: {
          borderColor: "var(--mantine-color-default-border)",
        },
        td: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
      classNames: () => ({
        tr: "globalMantineTableRow",
      }),
    }),

    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
    // Todo: Add styles for Divider
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
  },
});
