import {
  alpha,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  CSSVariablesResolver,
  defaultVariantColorsResolver,
  Divider,
  Input,
  mergeThemeOverrides,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip
} from "@mantine/core";

import {
  amberColors,
  blueColors,
  grayColors,
  greenColors,
  neutralColors,
  orangeColors,
  redColors,
  roseColors,
  slateColors,
  stoneColors,
  violetColors,
  yellowColors,
  zincColors,
} from "./utils/colors";
import { Spotlight } from "@mantine/spotlight";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(200),
  xs: rem(300),
  sm: rem(400),
  md: rem(500),
  lg: rem(600),
  xl: rem(1400),
  xxl: rem(1600),
};

// add common theme here
const common = createTheme({
  /** Put your mantine theme override here */
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
  spacing: {
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
  components: {
    /** Put your mantine component override here */
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
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
      styles: () => ({
        root: {
          // backgroundColor: theme?.other?.cardBg,
        },
      }),
    }),
  },
});

const mantine = createTheme({
  /** Put your mantine theme override here */
  primaryColor: "blue",
  other: {
    style: "mantine",
  },
});

const shadcn = createTheme({
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
  white: "#FFFFFF",
  black: zincColors[9],
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 0 },
  autoContrast: true, //TODO: Remove if causing issuing
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

  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },
  breakpoints: {
    // xs: rem(480),
    // sm: rem(640),
    // md: rem(768),
    // lg: rem(1024),
    // xl: rem(1280),
    // xxl: rem(1536),
  },
  headings: {
    fontFamily: "Geist",
    // fontWeight: string;
    // textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
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
    // cardBg: "var(--mantine-color-white)",
  },
  variantColorResolver: (component) => {
    const defaultResolvedColors = defaultVariantColorsResolver(component);
    // const parsedColor = parseThemeColor({
    //   color: component.color || component.theme.primaryColor,
    //   theme: component.theme,
    // });

    if (component.variant === "default") { //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
       background: "var(--mantine-color-default)",
       border: "1px solid var(--mantine-color-default-border)",
       hover: "var(--mantine-color-default-hover)",
      };
    }

    if (component.variant === "filled") { //TODO: style is different in accordion for this variant. Handle it later here or in component section
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-primary-color-filled)",
        hover: "var(--mantine-primary-color-filled-hover)",
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
        // border: "1px solid var(--mantine-color-default-border)",
      };
    }

    if(component.variant === "subtle") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        hover: "var(--mantine-color-default-hover)",
      };
    }

    if(component.variant === "transparent") {
      return {
        ...defaultResolvedColors,
        // background: "transparent",
        // border: "1px solid var(--mantine-color-default-border)",
      };
    }

    if (component.variant === "unstyled") {
      return {
        ...defaultResolvedColors,
        // background: "transparent",
        // border: "1px solid var(--mantine-color-default-border)",
      };
    }

    if (component.variant === "pills") {
      return {
        ...defaultResolvedColors,
        // backgroundColor: "var(--mantine-primary-color-filled)",
        // borderRadius: "1000px",
        // border: "1px solid var(--mantine-primary-color-filled)",
        // hover: "var(--mantine-primary-color-filled-hover)",
      };
    }

    if (component.variant === "contained") { //only for accordion
      return {
        ...defaultResolvedColors,
        // backgroundColor: "var(--mantine-primary-color-filled)",
        // border: "1px solid var(--mantine-primary-color-filled)",
        // hover: "var(--mantine-primary-color-filled-hover)",
      };
    }

    if (component.variant === "separated") { //only for accordion
      return {
        ...defaultResolvedColors,
        // backgroundColor: "var(--mantine-primary-color-filled)",
        // border: "1px solid var(--mantine-primary-color-filled)",
        // hover: "var(--mantine-primary-color-filled-hover)",
      };
    }

    return defaultResolvedColors;
  },
  components: {
    Card: Card.extend({
      styles: () => ({
        root: {
          backgroundColor:  "var(--mantine-color-default)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
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
        if(props.variant !== "unstyled") 
          return {
          input: "globalMantineInput",
          };

        return {
        };
      },
      vars: () => {
          return {
            input: {
              "--input-bd": "var(--mantine-color-default-border)",
              "--input-bd-focus": "var(--mantine-primary-color-filled)", // border color not changing on focus
              "--input-bg": "var(--mantine-color-default)",
            },
            wrapper: {
            },
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
    }),
    Checkbox: Checkbox.extend({
      styles: () => ({
        input: {
          borderColor: "var(--mantine-primary-color-filled)",
          backgroundColor: "var(--mantine-color-default)",
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
          backgroundColor: "var(--mantine-color-default)",
          border: "1px solid var(--mantine-color-default-border)",
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
  },
});

export const mantineTheme = mergeThemeOverrides(common, mantine);

export const shadcnTheme = mergeThemeOverrides(common, shadcn);

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight":	"600",
    "--mantine-primary-color-filled-hover": `${alpha("var(--mantine-primary-color-filled)", 0.9)}`,
    "--mantine-primary-color-light":	"var(--mantine-color-dark-light)",
    "--mantine-primary-color-light-hover": `${alpha("var(--mantine-primary-color-light)", 0.8)}`,
    "--mantine-primary-color-light-color": "var(--mantine-color-dark-light-color)",
  },
  light: {
   // variables for light color scheme only

    // all variables that depend on lighth color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-black)",
    // "--mantine-color-text": "#000",
    "--mantine-color-body": theme.white,
    // "--mantine-color-error": "var(--mantine-color-red-6)",
    // "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-6)",

    "--mantine-color-default": "var(--mantine-color-white)", //used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-dark-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-dark-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-dark-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-dark-10)", // used as dimmed text color


    "--mantine-color-dark-filled": "var(--mantine-color-white)", //used as secondary surface color
    "--mantine-color-dark-filled-hover": "var(--mantine-color-dark-1)", //used as secondary hover color

    "--mantine-color-dark-light": "var(--mantine-color-dark-1)", //used as primary light color
    "--mantine-color-dark-light-hover": `${alpha("var(--mantine-color-dark-light)", 0.8)}`, //used as primary light hover color

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",    
    "--mantine-color-dark-light-color": "var(--mantine-color-dark-8)", // used as primary light variant's text color

    "--mantine-color-dark-outline": "var(--mantine-color-dark-2)",
    "--mantine-color-dark-outline-hover": "var(--mantine-color-dark-1)",

  },
  dark: {
    // variables for dark color scheme only
   
    "--mantine-color-placeholder": theme?.white,
    // "--mantine-color-white": "var(--mantine-primary-color-contrast)",
    // "--mantine-color-default-color": theme?.white,
    // "--mantine-primary-color-contrast": theme.black,
    "--mantine-color-bright": theme?.white,

    // all variables that depend on dark color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-white)",
    // "--mantine-color-text": "var(--mantine-color-dark-0)",
    "--mantine-color-body": theme.black,
    // "--mantine-color-error": "var(--mantine-color-red-8)",
    // "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-4)",

    "--mantine-color-default": "var(--mantine-color-dark-9)", //used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-dark-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-dark-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-dark-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-dark-4)", // used as dimmed text color

    "--mantine-color-dark-filled": "var(--mantine-color-dark-8)", //used as secondary surface color
    "--mantine-color-dark-filled-hover": `${alpha("var(--mantine-color-dark-filled)", 0.9)}`, //used as secondary hover color

    "--mantine-color-dark-light": "var(--mantine-color-dark-7)", //used as primary light color
    "--mantine-color-dark-light-hover": `${alpha("var(--mantine-color-dark-light)", 0.8)}`, //used as primary light hover color

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",
    "--mantine-color-dark-light-color": "var(--mantine-color-dark-0)", // used as primary light text color

    "--mantine-color-dark-outline": "var(--mantine-color-dark-7)",
    "--mantine-color-dark-outline-hover": "var(--mantine-color-dark-7)",
  },
});

export const mantineCssVariableResolver: CSSVariablesResolver = () => ({
  variables: {
    //  variables that do not depend on color scheme
  },
  light: {
    // variables for light color scheme only
  },
  dark: {
    // variables for dark color scheme only
  },
});
