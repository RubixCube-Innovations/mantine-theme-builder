export const generatedShadcnTheme = {
  zinc: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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
    secondary: zincColors, 
    dark: zincColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  slate: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: slateColors,
    secondary: slateColors, 
    dark: slateColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  gray: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: grayColors,
    secondary: grayColors, 
    dark: grayColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  neutral: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: neutralColors,
    secondary: neutralColors, 
    dark: neutralColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  stone: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: stoneColors,
    secondary: stoneColors, 
    dark: stoneColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  red: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: redColors,
    secondary: neutralColors, 
    dark: neutralColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  rose: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: roseColors,
    secondary: stoneColors, 
    dark: stoneColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot__roseGreen",
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
`,
  orange: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: orangeColors,
    secondary: stoneColors, 
    dark: stoneColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  yellow: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: yellowColors,
    secondary: stoneColors, 
    dark: stoneColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  green: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: greenColors,
    secondary: stoneColors, 
    dark: stoneColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot__roseGreen",
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
`,
  blue: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: blueColors,
    secondary: slateColors, 
    dark: slateColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`,
  violet: `import {
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];

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

    primary: violetColors,
    secondary: grayColors, 
    dark: grayColors, 

    error: redColors,
    success: greenColors,
    info: blueColors,
    warning: amberColors,
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--checkbox-icon-color": props.color
            ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                ? \`var(--mantine-color-\${props.color}-light)\`
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled",

          "--chip-hover": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light"
                ? \`var(--mantine-color-\${props.color}-light-hover)\`
                : props.variant === "outline"
                  ? \`var(--mantine-color-\${props.color}-outline-hover)\`
                  : \`var(--mantine-color-\${props.color}-filled-hover)\`
              : props.color
            : "var(--mantine-primary-color-filled-hover)",
          "--chip-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? props.variant === "light" || props.variant === "outline"
                ? \`var(--mantine-color-\${props.color}-light-color)\`
                : \`var(--mantine-color-\${props.color}-contrast)\`
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
              ? \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-primary-color-filled)",

          "--radio-icon-color": props.color
            ? Object.keys(theme.colors).includes(props.color)
              ? \`var(--mantine-color-\${props.color}-contrast)\`
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
                : \`var(--mantine-color-\${props.color}-filled)\`
              : props.color
            : "var(--mantine-color-default)",
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
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
              colorKey && props.variant === "filled" ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
            "--pagination-active-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : undefined,
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
        root: "globalMantineCardRoot",
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
`
};