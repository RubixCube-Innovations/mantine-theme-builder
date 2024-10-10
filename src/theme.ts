import {
  Card,
  Container,
  createTheme,
  CSSVariablesResolver,
  mergeThemeOverrides,
  Paper,
  rem,
} from "@mantine/core";
import {
  amberColors,
  blueColors,
  darkColors,
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
      styles: (theme) => ({
        root: {
          backgroundColor: theme?.other?.cardBg,
        },
      }),
    }),
  },
});

const mantine = createTheme({
  /** Put your mantine theme override here */
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

    // dark: zincColors,
    dark: darkColors,
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
    cardBg: "var(--mantine-color-white)",
  },
  components: {
    Card: Card.extend({
      styles: () => ({
        root: {
        
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
  },
  light: {
    // variables for light color scheme only
   // variables for light color scheme only
   "--mantine-color-body": theme.white,
   "--mantine-color-default-color": theme?.black,
   // "--mantine-primary-color-contrast": theme.white,
   "--mantine-color-default-border": theme.colors.dark[2],

    // all variables that depend on lighth color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-black)",
    // "--mantine-color-text": "#000",
    // "--mantine-color-body": "#fff",
    // "--mantine-color-error": "var(--mantine-color-red-6)",
    // "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-6)",
    // "--mantine-color-default": "var(--mantine-color-white)",
    // "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
    // "--mantine-color-default-color": "var(--mantine-color-black)",
    // "--mantine-color-default-border": "var(--mantine-color-gray-4)",
    // "--mantine-color-dimmed": "var(--mantine-color-gray-6)",

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",
    // "--mantine-color-dark-filled": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-filled-hover": "var(--mantine-color-dark-7)",
    // "--mantine-color-dark-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-dark-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-dark-light-color": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-zinc-text": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-filled": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-filled-hover": "var(--mantine-color-zinc-7)",
    // "--mantine-color-zinc-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-zinc-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-slate-text": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-filled": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-filled-hover": "var(--mantine-color-slate-7)",
    // "--mantine-color-slate-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-slate-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-stone-text": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-filled": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-filled-hover": "var(--mantine-color-stone-7)",
    // "--mantine-color-stone-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-stone-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-gray-text": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-filled": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-7)",
    // "--mantine-color-gray-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-gray-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-neutral-text": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-filled": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-filled-hover": "var(--mantine-color-neutral-7)",
    // "--mantine-color-neutral-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-neutral-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-red-text": "var(--mantine-color-red-6)",
    // "--mantine-color-red-filled": "var(--mantine-color-red-6)",
    // "--mantine-color-red-filled-hover": "var(--mantine-color-red-7)",
    // "--mantine-color-red-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-red-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-rose-text": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-filled": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-filled-hover": "var(--mantine-color-rose-7)",
    // "--mantine-color-rose-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-rose-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-orange-text": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-filled-hover": "var(--mantine-color-orange-7)",
    // "--mantine-color-orange-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-orange-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-green-text": "var(--mantine-color-green-6)",
    // "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    // "--mantine-color-green-filled-hover": "var(--mantine-color-green-7)",
    // "--mantine-color-green-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-green-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-blue-text": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-7)",
    // "--mantine-color-blue-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-blue-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-yellow-text": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-filled": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-filled-hover": "var(--mantine-color-yellow-7)",
    // "--mantine-color-yellow-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-yellow-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-violet-text": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-filled-hover": "var(--mantine-color-violet-7)",
    // "--mantine-color-violet-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-violet-light-hover": "rgba(46, 46, 46, 0.12)",
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
    "--mantine-color-default-border": theme.colors.dark[7],
    "--mantine-color-bright": theme?.white,

    // all variables that depend on dark color scheme
    // "--mantine-primary-color-contrast": "var(--mantine-color-white)",
    // "--mantine-color-bright": "var(--mantine-color-white)",
    // "--mantine-color-text": "var(--mantine-color-dark-0)",
    // "--mantine-color-body": "var(--mantine-color-dark-7)",
    // "--mantine-color-error": "var(--mantine-color-red-8)",
    // "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
    // "--mantine-color-anchor": "var(--mantine-color-blue-4)",
    // "--mantine-color-default": "var(--mantine-color-dark-6)",
    // "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
    // "--mantine-color-default-color": "var(--mantine-color-white)",
    // "--mantine-color-default-border": "var(--mantine-color-dark-4)",
    // "--mantine-color-dimmed": "var(--mantine-color-dark-2)",  

    // "--mantine-color-dark-text": "var(--mantine-color-dark-filled)",
    // "--mantine-color-dark-filled": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-filled-hover": "var(--mantine-color-dark-7)",
    // "--mantine-color-dark-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-dark-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-dark-light-color": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline": "var(--mantine-color-dark-6)",
    // "--mantine-color-dark-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-zinc-text": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-filled": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-filled-hover": "var(--mantine-color-zinc-7)",
    // "--mantine-color-zinc-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-zinc-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline": "var(--mantine-color-zinc-6)",
    // "--mantine-color-zinc-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-slate-text": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-filled": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-filled-hover": "var(--mantine-color-slate-7)",
    // "--mantine-color-slate-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-slate-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline": "var(--mantine-color-slate-6)",
    // "--mantine-color-slate-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-stone-text": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-filled": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-filled-hover": "var(--mantine-color-stone-7)",
    // "--mantine-color-stone-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-stone-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline": "var(--mantine-color-stone-6)",
    // "--mantine-color-stone-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-gray-text": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-filled": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-7)",
    // "--mantine-color-gray-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-gray-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline": "var(--mantine-color-gray-6)",
    // "--mantine-color-gray-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-neutral-text": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-filled": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-filled-hover": "var(--mantine-color-neutral-7)",
    // "--mantine-color-neutral-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-neutral-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline": "var(--mantine-color-neutral-6)",
    // "--mantine-color-neutral-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-red-text": "var(--mantine-color-red-6)",
    // "--mantine-color-red-filled": "var(--mantine-color-red-6)",
    // "--mantine-color-red-filled-hover": "var(--mantine-color-red-7)",
    // "--mantine-color-red-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-red-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline": "var(--mantine-color-red-6)",
    // "--mantine-color-red-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-rose-text": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-filled": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-filled-hover": "var(--mantine-color-rose-7)",
    // "--mantine-color-rose-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-rose-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline": "var(--mantine-color-rose-6)",
    // "--mantine-color-rose-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-orange-text": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-filled-hover": "var(--mantine-color-orange-7)",
    // "--mantine-color-orange-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-orange-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    // "--mantine-color-orange-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-green-text": "var(--mantine-color-green-6)",
    // "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    // "--mantine-color-green-filled-hover": "var(--mantine-color-green-7)",
    // "--mantine-color-green-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-green-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    // "--mantine-color-green-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-blue-text": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-7)",
    // "--mantine-color-blue-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-blue-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    // "--mantine-color-blue-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-yellow-text": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-filled": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-filled-hover": "var(--mantine-color-yellow-7)",
    // "--mantine-color-yellow-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-yellow-light-hover": "rgba(46, 46, 46, 0.12)",
    // "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline": "var(--mantine-color-yellow-6)",
    // "--mantine-color-yellow-outline-hover": "rgba(46, 46, 46, 0.05)",

    // "--mantine-color-violet-text": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    // "--mantine-color-violet-filled-hover": "var(--mantine-color-violet-7)",
    // "--mantine-color-violet-light": "rgba(46, 46, 46, 0.1)",
    // "--mantine-color-violet-light-hover": "rgba(46, 46, 46, 0.12)",
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
