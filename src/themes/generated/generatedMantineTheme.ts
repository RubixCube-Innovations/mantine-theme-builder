export const generatedMantineTheme = {
  blue: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "blue",
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
    other: {
        style: "mantine",
      },
  });`,
  gray: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "gray",
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
    other: {
        style: "mantine",
      },
  });`,
  red: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "red",
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
    other: {
        style: "mantine",
      },
  });`,
  pink: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "pink",
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
    other: {
        style: "mantine",
      },
  });`,
  grape: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "grape",
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
    other: {
        style: "mantine",
      },
  });`,
  violet: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "violet",
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
    other: {
        style: "mantine",
      },
  });`,
  indigo: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "indigo",
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
    other: {
        style: "mantine",
      },
  });`,
  cyan: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "cyan",
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
    other: {
        style: "mantine",
      },
  });`,
  teal: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "teal",
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
    other: {
        style: "mantine",
      },
  });`,
  green: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "green",
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
    other: {
        style: "mantine",
      },
  });`,
  lime: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "lime",
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
    other: {
        style: "mantine",
      },
  });`,
  yellow: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "yellow",
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
    other: {
        style: "mantine",
      },
  });`,
  orange: `import {
    Card,
    Container,
    createTheme,
    Paper,
    rem
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

  
  export const mantineTheme = createTheme({
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
    primaryColor: "orange",
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
    other: {
        style: "mantine",
      },
  });`
};