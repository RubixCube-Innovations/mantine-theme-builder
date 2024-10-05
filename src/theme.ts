import { createTheme, Paper } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */

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
  },
});
