import { Card, createTheme, Paper, rem } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    xxl: rem("24px"),
    xxxl: rem("30px"),
    xxxxl: rem("36px"),
    xxxxxl: rem("48px"),
  },
  components: {
    /** Put your mantine component override here */
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "md",
        radius: "md",
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "md",
        shadow: "md",
        radius: "md",
        withBorder: true,
      },
    }),
  },
});
