export const generatedShadcnTheme = {
  zinc: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: zincColors,
    secondary: zincColors, // secondary will be dynamically changed baesd on the primary color
    dark: zincColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  slate: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: slateColors,
    secondary: slateColors, // secondary will be dynamically changed baesd on the primary color
    dark: slateColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  stone: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: stoneColors,
    secondary: stoneColors, // secondary will be dynamically changed baesd on the primary color
    dark: stoneColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  gray: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: grayColors,
    secondary: grayColors, // secondary will be dynamically changed baesd on the primary color
    dark: grayColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  neutral: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: neutralColors,
    secondary: neutralColors, // secondary will be dynamically changed baesd on the primary color
    dark: neutralColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  red: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: redColors,
    secondary: neutralColors, // secondary will be dynamically changed baesd on the primary color
    dark: neutralColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  rose: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: roseColors,
    secondary: stoneColors, // secondary will be dynamically changed baesd on the primary color
    dark: stoneColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot__roseGreen",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-dark-filled)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  orange: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: orangeColors,
    secondary: stoneColors, // secondary will be dynamically changed baesd on the primary color
    dark: stoneColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  green: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: greenColors,
    secondary: stoneColors, // secondary will be dynamically changed baesd on the primary color
    dark: stoneColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot__roseGreen",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-dark-filled)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  blue: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: blueColors,
    secondary: slateColors, // secondary will be dynamically changed baesd on the primary color
    dark: slateColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  yellow: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: yellowColors,
    secondary: stoneColors, // secondary will be dynamically changed baesd on the primary color
    dark: stoneColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`,
  violet: `import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Divider,
  Input,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

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
  /** Put your shadcn theme override here */
  colors: {
    zinc: zincColors,
    slate: slateColors,
    stone: stoneColors,
    gray: grayColors,
    neutral: neutralColors,
    red: redColors,
    rose: roseColors,
    orange: orangeColors,
    green: greenColors,
    blue: blueColors,
    yellow: yellowColors,
    violet: violetColors,

    primary: violetColors,
    secondary: grayColors, // secondary will be dynamically changed baesd on the primary color
    dark: grayColors, // dark will always be secondary color

    error: redColors,
    warning: amberColors,
    success: greenColors,
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
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
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
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);

    if (component.variant === "default") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") {
      //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
        color: "var(--mantine-primary-color-contrast)",
      };
    }

    if (component.variant === "light") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-light)",
        hover: "var(--mantine-primary-color-light-hover)",
        color: "var(--mantine-primary-color-light-color)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-color-default-border)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "transparent",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
      };
    }

    if (component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "contained") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    if (component.variant === "separated") {
      //only for accordion
      return {
        ...defaultResolvedColors,
      };
    }

    return defaultResolvedColors;
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
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      classNames: (theme) => ({
        root: "globalMantineCardRoot",
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Popover: Popover.extend({
      styles: () => ({
        dropdown: {
          backgroundColor: "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
    Input: Input.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            input: "globalMantineInput",
          };

        return {};
      },
      vars: (theme) => {
        return {
          input: {
            "--input-bd": "var(--mantine-color-default-border)",
            "--input-bd-focus": "var(--mantine-primary-color-filled)",
            "--input-bg": "var(--mantine-color-default)",
          },
          wrapper: {},
        };
      },
    }),
    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Checkbox: Checkbox.extend({
      classNames: () => {
        return {
          input: "globalMantineCheckbox",
        };
      },
      vars: () => ({
        root: {
          "--checkbox-color": "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": "var(--mantine-primary-color-contrast)",
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
    Modal: Modal.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
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
    Spotlight: Spotlight.extend({
      styles: () => ({
        content: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant !== "unstyled")
          return {
            root: "globalMantineButton",
          };

        return {};
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "always",
      },
    }),
  },
});
`
};