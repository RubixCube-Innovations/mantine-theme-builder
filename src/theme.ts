import {
  alpha,
  Button,
  Card,
  Checkbox,
  Container,
  createTheme,
  CSSVariablesResolver,
  defaultVariantColorsResolver,
  Divider,
  Input,
  InputCssVariables,
  mergeThemeOverrides,
  Paper,
  parseThemeColor,
  PartialTransformVars,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
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

    if (component.variant === "default") {
      return {
        ...defaultResolvedColors,
       backgroundColor: "var(--mantine-color-default)",
       border: "1px solid var(--mantine-color-default-border)",
      };
    }

    if (component.variant === "outline") {
      return {
        ...defaultResolvedColors,
        background: "var(--mantine-color-default)",
        border: "1px solid var(--mantine-primary-color-filled)",
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
      styles: () => ({
        input: {
        
        },
      }),
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
        },
        track: {
          borderColor: "var(--mantine-color-default-border)",
          "&:focus": {
            borderColor: "var(--mantine-primary-color-filled)",
          },
        },
      }),
    }),
    Tooltip: Tooltip.extend({
      styles: () => ({
        tooltip: {
          backgroundColor: "var(--mantine-color-default)",
          border: "1px solid var(--mantine-color-default-border)",
          "&:focus": {
            borderColor: "var(--mantine-primary-color-filled)",
          },
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
   
    "--mantine-primary-color-filled-hover": `${alpha("var(--mantine-primary-color-filled)", 0.9)}`,
    "--mantine-primary-color-light-hover": `${alpha("var(--mantine-primary-color-light)", 0.8)}`,
    // "--mantine-primary-color-light-color": "var(--mantine-primary-color-filled)",
  },
  light: {
   // variables for light color scheme only

   "--mantine-color-body": theme.white,
   "--mantine-color-default-color": theme?.black,
   // "--mantine-primary-color-contrast": theme.white,

    // all variables that depend on lighth color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-black)",
    // "--mantine-color-text": "#000",
    // "--mantine-color-body": "#fff",
    // "--mantine-color-error": "var(--mantine-color-red-6)",
    // "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-6)",
    "--mantine-color-default": "var(--mantine-color-white)",
    // "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
    // "--mantine-color-default-color": "var(--mantine-color-black)",
    "--mantine-color-default-border": "var(--mantine-color-dark-2)",
    // "--mantine-color-dimmed": "var(--mantine-color-gray-6)",

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",
    // "--mantine-color-dark-light-color": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-zinc-text": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-slate-text": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-stone-text": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-gray-text": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-neutral-text": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-red-text": "var(--mantine-color-red-6)",
    // "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-rose-text": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-orange-text": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-green-text": "var(--mantine-color-green-6)",
    // "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-blue-text": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-yellow-text": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-violet-text": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-outline-hover": "rgba(46, 46, 46, 0.05)",
  },
  dark: {
    // variables for dark color scheme only
    "--mantine-color-body": theme.black,
    "--mantine-color-placeholder": theme?.white,
    "--mantine-color-white": "var(--mantine-primary-color-contrast)",
    "--mantine-color-default-color": theme?.white,
    // "--mantine-primary-color-contrast": theme.black,
    "--mantine-color-bright": theme?.white,

    // all variables that depend on dark color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-white)",
    // "--mantine-color-text": "var(--mantine-color-dark-0)",
    // "--mantine-color-body": "var(--mantine-color-dark-7)",
    // "--mantine-color-error": "var(--mantine-color-red-8)",
    // "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-4)",
    "--mantine-color-default": "var(--mantine-color-dark-9)",
    // "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
    // "--mantine-color-default-color": "var(--mantine-color-white)",
    "--mantine-color-default-border": "var(--mantine-color-dark-7)",
    // "--mantine-color-dimmed": "var(--mantine-color-dark-2)",  

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",
    // "--mantine-color-dark-light-color": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-zinc-text": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-slate-text": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-stone-text": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-gray-text": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-neutral-text": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-red-text": "var(--mantine-color-red-6)",
    // "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-rose-text": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-orange-text": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-green-text": "var(--mantine-color-green-6)",
    // "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-blue-text": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-yellow-text": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-violet-text": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-outline-hover": "rgba(46, 46, 46, 0.05)",
   
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
