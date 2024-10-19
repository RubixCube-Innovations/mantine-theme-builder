
type ColorPalette = [string, string, string, string, string, string, string, string, string, string, string];
// Note: 500 shade in tailwind color is not included in the color palette except for orange, green and blue
// Color shades in tailwind are 50, 100, 200, 300, 400, 600, 700, 800, 900, 950

export const zincColors: ColorPalette = [
  "#fafafa",
  "#f4f4f5",
  "#e4e4e7", 
  "#d4d4d8",
  "#a1a1aa",
  "#52525b",
  "#3f3f46",
  "#27272a", 
  "#18181b",
  "#09090b", 
  "#71717A" // base color as zinc[10]
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
  "#020817", //orginal tailwind color was #020617
  "#64748B" // base color as slate[10]
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
  "#78716C" // base color as stone[10]
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
  "#6B7280" // base color as gray[10]
];

export const neutralColors: ColorPalette = [
  "#fafafa", //button text color in light mode
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#525252",
  "#404040",
  "#262626",
  "#171717", //button text color in dark mode
  "#0a0a0a",
  "#737373" // base color as neutral[10]
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
  "#EF4444" // base color as red[10]
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
  "#F43F5E" // base color as rose[10]
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
  "#F97316", // [10] -> orange base
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
  "#10B981", // [10] -> green base
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
  "#3B82F6", // [10] -> blue base
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
  "#F59E0B", // base color as yellow[10]
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
  "#8B5CF6", // base color as violet[10]
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
  "#F59E0B", // base color as amber[10]
];

export const SHADCN_DEFAULT_COLORS = [
  { id: "zinc", name: "Zinc", color: "#71717A", primaryPalette: zincColors, primaryShade: { light: 8, dark: 0 }, secondaryPalette: zincColors, secondaryShade: { light: 1, dark: 7}, },
  { id: "slate", name: "Slate", color: "#64748B", primaryPalette: slateColors, primaryShade: { light: 8, dark: 0 }, secondaryPalette: slateColors, secondaryShade: {light: 1, dark: 7} },
  { id: "stone", name: "Stone", color: "#78716C", primaryPalette: stoneColors, primaryShade: { light: 8, dark: 0 }, secondaryPalette: stoneColors, secondaryShade: {light: 1, dark: 7} },
  { id: "gray", name: "Gray", color: "#6B7280", primaryPalette: grayColors, primaryShade: { light: 8, dark: 0 }, secondaryPalette: grayColors, secondaryShade: {light: 1, dark: 7} },
  { id: "neutral", name: "Neutral", color: "#737373", primaryPalette: neutralColors, primaryShade: { light: 8, dark: 0 }, secondaryPalette: neutralColors, secondaryShade: {light: 1, dark: 7} },
  { id: "red", name: "Red", color: "#EF4444", primaryPalette: redColors, primaryShade: { light: 5, dark: 5 }, secondaryPalette: neutralColors, secondaryShade: { light: 1, dark: 7 } },
  { id: "rose", name: "Rose", color: "#F43F5E", primaryPalette: roseColors, primaryShade: { light: 5, dark: 5 }, secondaryPalette: zincColors, secondaryShade: { light: 1, dark: 7} },
  { id: "orange", name: "Orange", color: "#F97316", primaryPalette: orangeColors, primaryShade: { light: 5, dark: 6 }, secondaryPalette: stoneColors },
  { id: "green", name: "Green", color: "#10B981", primaryPalette: greenColors, primaryShade: { light: 6, dark: 5 }, secondaryPalette: zincColors },
  { id: "blue", name: "Blue", color: "#3B82F6", primaryPalette: blueColors, primaryShade: { light: 6, dark: 5 }, secondaryPalette: slateColors },
  { id: "yellow", name: "Yellow", color: "#F59E0B", primaryPalette: yellowColors, primaryShade: { light: 4, dark: 4 }, secondaryPalette: stoneColors },
  { id: "violet", name: "Violet", color: "#8B5CF6", primaryPalette: violetColors, primaryShade: { light: 5, dark: 6 }, secondaryPalette: grayColors },
];

export const MANTINE_DEFAULT_COLORS = [
  { id: "blue", name: "Blue", color: "#3B82F6", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "gray", name: "Gray", color: "#6B7280", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "red", name: "Red", color: "#EF4444", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "pink", name: "Pink", color: "#F43F5E", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "grape", name: "Grape", color: "#8B5CF6", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "violet", name: "Violet", color: "#8B5CF6", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "indigo", name: "Indigo", color: "#6366F1", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "cyan", name: "Cyan", color: "#22D3EE", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "teal", name: "Teal", color: "#14B8A6", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "green", name: "Green", color: "#10B981", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "lime", name: "Lime", color: "#65A30D", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "yellow", name: "Yellow", color: "#F59E0B", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
  { id: "orange", name: "Orange", color: "#F97316", primaryPalette: {}, primaryShade: { light: 6, dark: 6 } },
];
