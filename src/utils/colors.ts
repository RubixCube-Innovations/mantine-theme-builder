
type ColorPalette = [string, string, string, string, string, string, string, string, string, string];
// Note: 500 shade in tailwind color is not included in the color palette except for orange, green and blue
// Color shades in tailwind are 50, 100, 200, 300, 400, 600, 700, 800, 900, 950

export const zincColors: ColorPalette = [
  "#fafafa",
  "#f4f4f5",
  "#e4e4e7", // card light border color
  "#d4d4d8",
  "#a1a1aa",
  "#52525b",
  "#3f3f46",
  "#27272a", // card dark border color
  "#18181b", // button text color
  "#09090b", // card dark background
];

export const darkColors: ColorPalette = [
  "#fafafa",
  "#f4f4f5",
  "#e4e4e7",
  "#1e293b", 
  "#27272a", //correct
  "#71717a",
  "#09090b", //correct
  "#27272a",
  "#18181b",
  "#09090b",
];

export const slateColors: ColorPalette = [
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
  "#94a3b8",
  "#475569",
  "#334155",
  "#1e293b",
  "#0f172a",
  "#020617",
];

export const stoneColors: ColorPalette = [
  "#fafaf9",
  "#f5f5f4",
  "#e7e5e4",
  "#d6d3d1",
  "#a8a29e",
  "#57534e",
  "#44403c",
  "#292524",
  "#1c1917",
  "#0c0a09",
];

export const grayColors: ColorPalette = [
  "#f9fafb",
  "#f3f4f6",
  "#e5e7eb",
  "#d1d5db",
  "#9ca3af",
  "#4b5563",
  "#374151",
  "#1f2937",
  "#111827",
  "#030712",
];

export const neutralColors: ColorPalette = [
  "#fafafa",
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#525252",
  "#404040",
  "#262626",
  "#171717",
  "#0a0a0a",
];

export const redColors: ColorPalette = [
  "#FEF2F2",
  "#FEE2E2",
  "#FECACA",
  "#FCA5A5",
  "#F87171",
  "#DC2626",
  "#B91C1C",
  "#991B1B",
  "#7F1D1D",
  "#450A0A",
];

export const roseColors: ColorPalette = [
  "#fff1f2", 
  "#ffe4e6",
  "#fecdd3",
  "#fda4af",
  "#fb7185",
  "#e11d48",
  "#be123c",
  "#9f1239",
  "#881337",
  "#4c0519",
];

export const orangeColors: ColorPalette = [
  "#fff7ed", // [0] -> shade 50
  "#ffedd5", // [1] -> shade 100
  "#fed7aa", // [2] -> shade 200
  "#fdba74", // [3] -> shade 300
  "#fb923c", // [4] -> shade 400
  "#f97316", // [5] -> shade 500 
  "#ea580c", // [6] -> shade 600
  "#9a3412", // [7] -> shade 800
  "#7c2d12", // [8] -> shade 900
  "#431407", // [9] -> shade 950
];

export const greenColors: ColorPalette = [
  "#F0FDF4", // [0] -> shade 50
  "#DCFCE7", // [1] -> shade 100
  "#BBF7D0", // [2] -> shade 200
  "#86EFAC", // [3] -> shade 300
  "#4ADE80", // [4] -> shade 400
  "#22c55e", // [5] -> shade 500
  "#16A34A", // [6] -> shade 600
  "#166534", // [7] -> shade 800
  "#14532D", // [8] -> shade 900
  "#052E16", // [9] -> shade 950
];

export const blueColors: ColorPalette = [
  "#eff6ff", // [0] -> shade 50
  "#dbeafe", // [1] -> shade 100
  "#bfdbfe", // [2] -> shade 200
  "#93c5fd", // [3] -> shade 300
  "#60a5fa", // [4] -> shade 400
  "#3b82f6", // [5] -> shade 500
  "#2563eb", // [6] -> shade 600
  "#1e40af", // [7] -> shade 800
  "#1e3a8a", // [8] -> shade 900
  "#172554", // [9] -> shade 950
];

export const yellowColors: ColorPalette = [
  "#fefce8",
  "#fef9c3",
  "#fef08a",
  "#fde047",
  "#facc15",
  "#ca8a04",
  "#a16207",
  "#854d0e",
  "#713f12",
  "#3f2c06",
];

export const violetColors: ColorPalette = [
  "#f5f3ff",
  "#ede9fe",
  "#ddd6fe",
  "#c4b5fd",
  "#a78bfa",
  "#7c3aed",
  "#6d28d9",
  "#5b21b6",
  "#4c1d95",
  "#1e1b4b",
];

export const amberColors: ColorPalette = [
  "#FFFBEB",
  "#FEF3C7",
  "#FDE68A",
  "#FCD34D",
  "#FBBF24",
  "#D97706",
  "#B45309",
  "#92400E",
  "#78350F",
  "#451A03",
];

export const SHADCN_DEFAULT_COLORS = [
  { id: "zinc", name: "Zinc", color: "#71717A", colorPalette: zincColors, primaryShade: { light: 8, dark: 0 }, secondaryShade: { light: 1, dark: 7} },
  { id: "slate", name: "Slate", color: "#64748B", colorPalette: slateColors, primaryShade: { light: 8, dark: 0 }, secondaryShade: {light: 8, dark: 7} },
  { id: "stone", name: "Stone", color: "#78716C", colorPalette: stoneColors, primaryShade: { light: 8, dark: 0 }, secondaryShade: {light: 1, dark: 7} },
  { id: "gray", name: "Gray", color: "#6B7280", colorPalette: grayColors, primaryShade: { light: 8, dark: 0 }, secondaryShade: {light: 1, dark: 7} },
  { id: "neutral", name: "Neutral", color: "#737373", colorPalette: neutralColors, primaryShade: { light: 8, dark: 0 }, secondaryShade: {light: 1, dark: 7} },
  { id: "red", name: "Red", color: "#EF4444", colorPalette: redColors, primaryShade: { light: 5, dark: 5 } },
  { id: "rose", name: "Rose", color: "#F43F5E", colorPalette: roseColors, primaryShade: { light: 5, dark: 5 } },
  { id: "orange", name: "Orange", color: "#F97316", colorPalette: orangeColors, primaryShade: { light: 5, dark: 6 } },
  { id: "green", name: "Green", color: "#10B981", colorPalette: greenColors, primaryShade: { light: 6, dark: 5 } },
  { id: "blue", name: "Blue", color: "#3B82F6", colorPalette: blueColors, primaryShade: { light: 6, dark: 5 } },
  { id: "yellow", name: "Yellow", color: "#F59E0B", colorPalette: yellowColors, primaryShade: { light: 4, dark: 4 } },
  { id: "violet", name: "Violet", color: "#8B5CF6", colorPalette: violetColors, primaryShade: { light: 5, dark: 6 } },
];

export const MANTINE_DEFAULT_COLORS = [
  { id: "blue", name: "Blue", color: "#3B82F6", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "gray", name: "Gray", color: "#6B7280", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "red", name: "Red", color: "#EF4444", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "pink", name: "Pink", color: "#F43F5E", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "grape", name: "Grape", color: "#8B5CF6", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "violet", name: "Violet", color: "#8B5CF6", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "indigo", name: "Indigo", color: "#6366F1", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "cyan", name: "Cyan", color: "#22D3EE", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "teal", name: "Teal", color: "#14B8A6", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "green", name: "Green", color: "#10B981", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "lime", name: "Lime", color: "#65A30D", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "yellow", name: "Yellow", color: "#F59E0B", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "orange", name: "Orange", color: "#F97316", colorPalette: {}, primaryShade: { light: 6, dark: 6 } },
];
