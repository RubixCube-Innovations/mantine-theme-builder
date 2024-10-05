import { Card, Container, createTheme, Paper, rem } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(200),
  xs: rem(300),
  sm: rem(400),
  md: rem(500),
  lg: rem(600),
  xl: rem(1400),
  xxl: rem(1600),
};


export const theme = createTheme({
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    xl2: rem("24px"),
    xl3: rem("30px"),
    xl4: rem("36px"),
    xl5: rem("48px"),
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
        p: "md",
        shadow: "lg",
        radius: "md",
        withBorder: true,
      },
    }),
  },
});
