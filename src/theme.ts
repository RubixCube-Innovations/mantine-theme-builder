import { Card, Container, createTheme, CSSVariablesResolver, mergeThemeOverrides, Paper, rem } from "@mantine/core";
import { generateColorArray } from "./utils/color-functions";
import { amberColors, blueColors, grayColors, greenColors, neutralColors, orangeColors, redColors, roseColors, slateColors, stoneColors, violetColors, yellowColors, zincColors } from "./utils/colors";

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
    "xs": rem("12px"),
    "sm": rem("14px"),
    "md": rem("16px"),
    "lg": rem("18px"),
    "xl": rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  spacing: {
    "2xs": rem("8px"),
    "xs": rem("10px"),
    "sm": rem("12px"),
    "md": rem("16px"),
    "lg": rem("20px"),
    "xl": rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
  components: {
    /** Put your mantine component override here */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
     
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "lg",
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
    zinc: generateColorArray(zincColors, "zinc"),
    slate: generateColorArray(slateColors, "slate"),
    stone: generateColorArray(stoneColors, "stone"),
    gray: generateColorArray(grayColors, "gray"),
    neutral: generateColorArray(neutralColors, "neutral"),
    red: generateColorArray(redColors, "red"),
    rose: generateColorArray(roseColors, "rose"),
    orange: generateColorArray(orangeColors, "orange"),
    green: generateColorArray(greenColors, "green"),
    blue: generateColorArray(blueColors, "blue"),
    yellow: generateColorArray(yellowColors, "yellow"),
    violet: generateColorArray(violetColors, "violet"),

    dark: generateColorArray(zincColors, "dark"),
    error: generateColorArray(redColors, "error"),
    warning: generateColorArray(amberColors, "warning"),
    success: generateColorArray(greenColors, "success"),
  },
  focusRing: "never",
  scale: 1,
  white: "#FFFFFF",
  black: zincColors["zinc900"],
  primaryColor: "zinc",
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
  // breakpoints: { // TODO: Correct breakpoint values
  //   xs: 0,
  //   sm: 640,
  //   md: 768,
  //   lg: 1024,
  //   xl: 1280,
  //   xxl: 1536,
  // },
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
    //TODO: Correct shadow values
    // xs: "0px 1px 2px rgba(0, 0, 0, 0.04)",
    // sm: "0px 2px 4px rgba(0, 0, 0, 0.04)",
    // md: "0px 4px 8px rgba(0, 0, 0, 0.04)",
    // lg: "0px 8px 16px rgba(0, 0, 0, 0.04)",
    // xl: "0px 12px 24px rgba(0, 0, 0, 0.04)",
    // xxl: "0px 16px 32px rgba(0, 0,0, 0.04)",
  },
  cursorType: "pointer",
  other: {
    style: "shadcn",
  },

});

export const mantineTheme = mergeThemeOverrides(common, mantine);

export const shadcnTheme = mergeThemeOverrides(common, shadcn);


export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    //  variables that do not depend on color scheme
  },
  light: {
    // variables for light color scheme only
    "--mantine-color-body": theme.white,
    // "--mantine-primary-color-contrast": theme.white,
  },
  dark: {
    // variables for dark color scheme only
    "--mantine-color-body": theme.black,
    // "--mantine-primary-color-contrast": theme.black,
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

