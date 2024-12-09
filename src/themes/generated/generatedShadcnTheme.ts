export const generatedShadcnTheme = {
  zinc: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  slate: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  gray: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  neutral: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  stone: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  red: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  rose: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  orange: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  amber: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: amberColors,
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  yellow: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  lime: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: limeColors,
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
  primaryShade: {"light":5,"dark":4},
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  green: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  emerald: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: emeraldColors,
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  teal: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: tealColors,
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
  primaryShade: {"light":5,"dark":4},
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  cyan: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: cyanColors,
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
  primaryShade: {"light":5,"dark":4},
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  sky: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: skyColors,
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
  primaryShade: {"light":5,"dark":4},
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  blue: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  indigo: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: indigoColors,
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  violet: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  purple: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: purpleColors,
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  fuchsia: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: fuchsiaColors,
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
  primaryShade: {"light":5,"dark":7},
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`,
  pink: `import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  createTheme,
  Dialog,
  Indicator,
  Mark,
  Modal,
  NavLink,
  Pagination,
  Paper,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  ThemeIcon,
  Timeline,
  Tooltip
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

const zincColors = ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#52525b","#3f3f46","#27272a","#18181b","#09090b","#71717A"];
const slateColors = ["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#475569","#334155","#1e293b","#0f172a","#020817","#64748B"];
const grayColors = ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1f2937","#111827","#030712","#6B7280"];
const neutralColors = ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#525252","#404040","#262626","#171717","#0a0a0a","#737373"];
const stoneColors = ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#57534e","#44403c","#292524","#1c1917","#0c0a09","#78716C"];
const redColors = ["#FEF2F2","#FEE2E2","#FECACA","#FCA5A5","#F87171","#DC2626","#B91C1C","#991B1B","#7F1D1D","#450A0A","#EF4444"];
const roseColors = ["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#e11d48","#be123c","#9f1239","#881337","#4c0519","#F43F5E"];
const orangeColors = ["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#9a3412","#7c2d12","#431407","#F97316"];
const amberColors = ["#FFFBEB","#FEF3C7","#FDE68A","#FCD34D","#FBBF24","#f59e0b","#D97706","#92400E","#78350F","#451A03","#F59E0B"];
const yellowColors = ["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#ca8a04","#a16207","#854d0e","#713f12","#3f2c06","#F59E0B"];
const limeColors = ["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#4d7c0f","#3f6212","#365314","#1a2e05","#0f1903","#84CC16"];
const greenColors = ["#F0FDF4","#DCFCE7","#BBF7D0","#86EFAC","#4ADE80","#22c55e","#16A34A","#166534","#14532D","#052E16","#10B981"];
const emeraldColors = ["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#059669","#047857","#065f46","#064e3b","#022c22","#10B981"];
const tealColors = ["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#0d9488","#0f766e","#115e59","#134e4a","#042f2e","#14B8A6"];
const cyanColors = ["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#0891b2","#0e7490","#155e75","#164e63","#083344","#06B6D4"];
const skyColors = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];
const blueColors = ["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1e40af","#1e3a8a","#172554","#3B82F6"];
const indigoColors = ["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#4f46e5","#4338ca","#3730a3","#312e81","#1e1b4b","#6366F1"];
const violetColors = ["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#7c3aed","#6d28d9","#5b21b6","#4c1d95","#1e1b4b","#8B5CF6"];
const purpleColors = ["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#9333ea","#7e22ce","#6b21a8","#581c87","#2e1065","#A855F7"];
const fuchsiaColors = ["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#c026d3","#a21caf","#86198f","#701a75","#4a044e","#D946EF"];
const pinkColors = ["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#db2777","#be185d","#9d174d","#831843","#500724","#EC4899"];
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

    primary: pinkColors,
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
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        console.log(colorKey)
        return {
          root: {
            "--checkbox-color": colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)',

            "--checkbox-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Chip: Chip.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--chip-bg":
              variant !== "light"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-filled)\`
                  : "var(--mantine-primary-color-filled)"
                : undefined,
            "--chip-color":
              variant === "filled"
                ? colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)"
                : undefined,
          },
        };
      },
    }),
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
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ai-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white" && (isNeutralColor || !props.color)
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
              props.variant === undefined || props.variant === "filled"
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
        const variant = props.variant ?? "light";
        return {
          root: {
            "--nl-color":
              variant === "filled" ? colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)' : undefined,
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
            "--pagination-active-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Stepper: Stepper.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--stepper-icon-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    Alert: Alert.extend({ 
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--alert-color": (variant === 'filled' || variant === 'white') ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)') : undefined,
          },
        };
      }
    }),
    Dialog: Dialog.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        p: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      vars: () => ({
        tooltip: {
          "--tooltip-bg": "var(--mantine-color-primary-color-filled)",
          "--tooltip-color": "var(--mantine-color-primary-color-contrast)",
        },
      }),
    }),
    Avatar: Avatar.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--avatar-bg": variant === "filled" ? (colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : 'var(--mantine-primary-color-filled)') : undefined,
            "--avatar-color":
              variant === "filled"
                ? !props.color
                  ? "var(--mantine-primary-color-contrast)"
                  : colorKey
                    ? \`var(--mantine-color-\${colorKey}-contrast)\`
                    : undefined
                : variant === "white"
                  ? colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)"
                  : undefined,
          },
        };
      },
    }),
    Badge: Badge.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--badge-bg": variant === "filled" && colorKey ? \`var(--mantine-color-\${colorKey}-filled)\` : undefined,
            "--badge-color":
              variant === "filled"
                ? (colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)')
                : variant === "white"
                  ? (colorKey ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\` : 'var(--mantine-primary-color-contrast)')
                  : undefined,
          },
        };
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        withBorder: true,
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor:
              theme.primaryColor === "rose" || theme.primaryColor === "green"
                ? "var(--mantine-color-secondary-filled)"
                : undefined,
          },
        };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--indicator-text-color": colorKey
              ? \`var(--mantine-color-\${colorKey}-contrast)\`
              : "var(--mantine-primary-color-contrast)",
          },
        };
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        const variant = props.variant ?? "filled";
        return {
          root: {
            "--ti-color":
              variant === "filled"
                ? (colorKey
                  ? \`var(--mantine-color-\${colorKey}-contrast)\`
                  : "var(--mantine-primary-color-contrast)")
                : variant === "white"
                  ? (colorKey
                    ? \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? "contrast" : "filled"})\`
                    : "var(--mantine-primary-color-contrast)")
                  : undefined,
          },
        };
      },
    }),
    Timeline: Timeline.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--tl-icon-color": colorKey ? \`var(--mantine-color-\${colorKey}-contrast)\` : 'var(--mantine-primary-color-contrast)',
          },
        };
      },
    }),
    Blockquote: Blockquote.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
        return {
          root: {
            "--bq-bg-dark": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
            "--bq-bg-light": colorKey ? \`var(--mantine-color-\${colorKey}-light)\` : 'var(--mantine-primary-color-light)',
          },
        };
      },
    }),
    Mark: Mark.extend({
      vars: (theme, props) => {
        const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : 'yellow';
        const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey);
        return {
          root: {
            "--mark-bg-light": \`var(--mantine-color-\${colorKey}-\${isNeutralColor ? '3' : 'filled-hover'})\`,
            "--mark-bg-dark": \`var(--mantine-color-\${colorKey}-filled)\`
          },
        };
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "xl",
      },
    }),
  },
});
`
};