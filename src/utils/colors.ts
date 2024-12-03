export type ColorPalette = [string, string, string, string, string, string, string, string, string, string, string];

// Note: 500 shade in tailwind color is not included in the color palette except for orange, green and blue
// Color shades in tailwind are 50, 100, 200, 300, 400, 600, 700, 800, 900, 950

export const zincColors: ColorPalette = [
  "#fafafa", // [0] -> shade 50
  "#f4f4f5", // [1] -> shade 100
  "#e4e4e7", // [2] -> shade 200
  "#d4d4d8", // [3] -> shade 300
  "#a1a1aa", // [4] -> shade 400
  "#52525b", // [5] -> shade 600
  "#3f3f46", // [6] -> shade 700
  "#27272a", // [7] -> shade 800
  "#18181b", // [8] -> shade 900
  "#09090b", // [9] -> shade 950
  "#71717A"  // [10] -> zinc base
];

export const slateColors: ColorPalette = [
  "#f8fafc", // [0] -> shade 50
  "#f1f5f9", // [1] -> shade 100
  "#e2e8f0", // [2] -> shade 200
  "#cbd5e1", // [3] -> shade 300
  "#94a3b8", // [4] -> shade 400
  "#475569", // [5] -> shade 600
  "#334155", // [6] -> shade 700
  "#1e293b", // [7] -> shade 800
  "#0f172a", // [8] -> shade 900
  "#020817", // [9] -> shade 950 (original tailwind color was #020617)
  "#64748B"  // [10] -> slate base
];

export const stoneColors: ColorPalette = [
  "#fafaf9", // [0] -> shade 50
  "#f5f5f4", // [1] -> shade 100
  "#e7e5e4", // [2] -> shade 200
  "#d6d3d1", // [3] -> shade 300
  "#a8a29e", // [4] -> shade 400
  "#57534e", // [5] -> shade 600
  "#44403c", // [6] -> shade 700
  "#292524", // [7] -> shade 800
  "#1c1917", // [8] -> shade 900
  "#0c0a09", // [9] -> shade 950
  "#78716C"  // [10] -> stone base
];

export const grayColors: ColorPalette = [
  "#f9fafb", // [0] -> shade 50
  "#f3f4f6", // [1] -> shade 100
  "#e5e7eb", // [2] -> shade 200
  "#d1d5db", // [3] -> shade 300
  "#9ca3af", // [4] -> shade 400
  "#4b5563", // [5] -> shade 600
  "#374151", // [6] -> shade 700
  "#1f2937", // [7] -> shade 800
  "#111827", // [8] -> shade 900
  "#030712", // [9] -> shade 950
  "#6B7280"  // [10] -> gray base
];

export const neutralColors: ColorPalette = [
  "#fafafa", // [0] -> shade 50
  "#f5f5f5", // [1] -> shade 100
  "#e5e5e5", // [2] -> shade 200
  "#d4d4d4", // [3] -> shade 300
  "#a3a3a3", // [4] -> shade 400
  "#525252", // [5] -> shade 600
  "#404040", // [6] -> shade 700
  "#262626", // [7] -> shade 800
  "#171717", // [8] -> shade 900
  "#0a0a0a", // [9] -> shade 950
  "#737373"  // [10] -> neutral base
];

export const redColors: ColorPalette = [
  "#FEF2F2", // [0] -> shade 50
  "#FEE2E2", // [1] -> shade 100
  "#FECACA", // [2] -> shade 200
  "#FCA5A5", // [3] -> shade 300
  "#F87171", // [4] -> shade 400
  "#DC2626", // [5] -> shade 600
  "#B91C1C", // [6] -> shade 700
  "#991B1B", // [7] -> shade 800
  "#7F1D1D", // [8] -> shade 900
  "#450A0A", // [9] -> shade 950
  "#EF4444"  // [10] -> red base
];

export const roseColors: ColorPalette = [
  "#fff1f2", // [0] -> shade 50
  "#ffe4e6", // [1] -> shade 100
  "#fecdd3", // [2] -> shade 200
  "#fda4af", // [3] -> shade 300
  "#fb7185", // [4] -> shade 400
  "#e11d48", // [5] -> shade 600
  "#be123c", // [6] -> shade 700
  "#9f1239", // [7] -> shade 800
  "#881337", // [8] -> shade 900
  "#4c0519", // [9] -> shade 950
  "#F43F5E"  // [10] -> base color as rose[10]
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
  "#fefce8", // [0] -> shade 50
  "#fef9c3", // [1] -> shade 100
  "#fef08a", // [2] -> shade 200
  "#fde047", // [3] -> shade 300
  "#facc15", // [4] -> shade 400
  "#ca8a04", // [5] -> shade 500
  "#a16207", // [6] -> shade 600
  "#854d0e", // [7] -> shade 700
  "#713f12", // [8] -> shade 800
  "#3f2c06", // [9] -> shade 950
  "#F59E0B", // [10] -> yellow base
];

export const violetColors: ColorPalette = [
  "#f5f3ff", // [0] -> shade 50
  "#ede9fe", // [1] -> shade 100
  "#ddd6fe", // [2] -> shade 200
  "#c4b5fd", // [3] -> shade 300
  "#a78bfa", // [4] -> shade 400
  "#7c3aed", // [5] -> shade 500
  "#6d28d9", // [6] -> shade 600
  "#5b21b6", // [7] -> shade 700
  "#4c1d95", // [8] -> shade 800
  "#1e1b4b", // [9] -> shade 950
  "#8B5CF6", // [10] -> violet base
];

export const amberColors: ColorPalette = [
  "#FFFBEB", // [0] -> shade 50
  "#FEF3C7", // [1] -> shade 100
  "#FDE68A", // [2] -> shade 200
  "#FCD34D", // [3] -> shade 300
  "#FBBF24", // [4] -> shade 400
  "#f59e0b", // [5] -> shade 500
  "#D97706", // [6] -> shade 600
  "#92400E", // [7] -> shade 800
  "#78350F", // [8] -> shade 900
  "#451A03", // [9] -> shade 950
  "#F59E0B", // [10] -> amber base
];

export const limeColors: ColorPalette = [
  "#f7fee7", // [0] -> shade 50
  "#ecfccb", // [1] -> shade 100
  "#d9f99d", // [2] -> shade 200
  "#bef264", // [3] -> shade 300
  "#a3e635", // [4] -> shade 400
  "#4d7c0f", // [5] -> shade 600
  "#3f6212", // [6] -> shade 700
  "#365314", // [7] -> shade 800
  "#1a2e05", // [8] -> shade 900
  "#0f1903", // [9] -> shade 950
  "#84CC16"  // [10] -> lime base
];

export const emeraldColors: ColorPalette = [
  "#ecfdf5", // [0] -> shade 50
  "#d1fae5", // [1] -> shade 100
  "#a7f3d0", // [2] -> shade 200
  "#6ee7b7", // [3] -> shade 300
  "#34d399", // [4] -> shade 400
  "#059669", // [5] -> shade 600
  "#047857", // [6] -> shade 700
  "#065f46", // [7] -> shade 800
  "#064e3b", // [8] -> shade 900
  "#022c22", // [9] -> shade 950
  "#10B981"  // [10] -> emerald base
];

export const tealColors: ColorPalette = [
  "#f0fdfa", // [0] -> shade 50
  "#ccfbf1", // [1] -> shade 100
  "#99f6e4", // [2] -> shade 200
  "#5eead4", // [3] -> shade 300
  "#2dd4bf", // [4] -> shade 400
  "#0d9488", // [5] -> shade 600
  "#0f766e", // [6] -> shade 700
  "#115e59", // [7] -> shade 800
  "#134e4a", // [8] -> shade 900
  "#042f2e", // [9] -> shade 950
  "#14B8A6"  // [10] -> teal base
];

export const cyanColors: ColorPalette = [
  "#ecfeff", // [0] -> shade 50
  "#cffafe", // [1] -> shade 100
  "#a5f3fc", // [2] -> shade 200
  "#67e8f9", // [3] -> shade 300
  "#22d3ee", // [4] -> shade 400
  "#0891b2", // [5] -> shade 600
  "#0e7490", // [6] -> shade 700
  "#155e75", // [7] -> shade 800
  "#164e63", // [8] -> shade 900
  "#083344", // [9] -> shade 950
  "#06B6D4"  // [10] -> cyan base
];

export const skyColors: ColorPalette = [
  "#f0f9ff", // [0] -> shade 50
  "#e0f2fe", // [1] -> shade 100
  "#bae6fd", // [2] -> shade 200
  "#7dd3fc", // [3] -> shade 300
  "#38bdf8", // [4] -> shade 400
  "#0284c7", // [5] -> shade 600
  "#0369a1", // [6] -> shade 700
  "#075985", // [7] -> shade 800
  "#0c4a6e", // [8] -> shade 900
  "#082f49", // [9] -> shade 950
  "#0EA5E9"  // [10] -> sky base
];

export const indigoColors: ColorPalette = [
  "#eef2ff", // [0] -> shade 50
  "#e0e7ff", // [1] -> shade 100
  "#c7d2fe", // [2] -> shade 200
  "#a5b4fc", // [3] -> shade 300
  "#818cf8", // [4] -> shade 400
  "#4f46e5", // [5] -> shade 600
  "#4338ca", // [6] -> shade 700
  "#3730a3", // [7] -> shade 800
  "#312e81", // [8] -> shade 900
  "#1e1b4b", // [9] -> shade 950
  "#6366F1"  // [10] -> indigo base
];

export const purpleColors: ColorPalette = [
  "#faf5ff", // [0] -> shade 50
  "#f3e8ff", // [1] -> shade 100
  "#e9d5ff", // [2] -> shade 200
  "#d8b4fe", // [3] -> shade 300
  "#c084fc", // [4] -> shade 400
  "#9333ea", // [5] -> shade 600
  "#7e22ce", // [6] -> shade 700
  "#6b21a8", // [7] -> shade 800
  "#581c87", // [8] -> shade 900
  "#2e1065", // [9] -> shade 950
  "#A855F7"  // [10] -> purple base
];

export const fuchsiaColors: ColorPalette = [
  "#fdf4ff", // [0] -> shade 50
  "#fae8ff", // [1] -> shade 100
  "#f5d0fe", // [2] -> shade 200
  "#f0abfc", // [3] -> shade 300
  "#e879f9", // [4] -> shade 400
  "#c026d3", // [5] -> shade 600
  "#a21caf", // [6] -> shade 700
  "#86198f", // [7] -> shade 800
  "#701a75", // [8] -> shade 900
  "#4a044e", // [9] -> shade 950
  "#D946EF"  // [10] -> fuchsia base
];

export const pinkColors: ColorPalette = [
  "#fdf2f8", // [0] -> shade 50
  "#fce7f3", // [1] -> shade 100
  "#fbcfe8", // [2] -> shade 200
  "#f9a8d4", // [3] -> shade 300
  "#f472b6", // [4] -> shade 400
  "#db2777", // [5] -> shade 600
  "#be185d", // [6] -> shade 700
  "#9d174d", // [7] -> shade 800
  "#831843", // [8] -> shade 900
  "#500724", // [9] -> shade 950
  "#EC4899"  // [10] -> pink base
];

// export const SHADCN_DEFAULT_COLORS = [
//   { id: "zinc", name: "Zinc", color: "#71717A", primaryPalette: zincColors, primaryShade: { light: 8, dark: 0 }, secondary: "zinc", secondaryPalette: zincColors },
//   { id: "slate", name: "Slate", color: "#64748B", primaryPalette: slateColors, primaryShade: { light: 8, dark: 0 }, secondary: "slate", secondaryPalette: slateColors },
//   { id: "stone", name: "Stone", color: "#78716C", primaryPalette: stoneColors, primaryShade: { light: 8, dark: 0 }, secondary: "stone", secondaryPalette: stoneColors},
//   { id: "gray", name: "Gray", color: "#6B7280", primaryPalette: grayColors, primaryShade: { light: 8, dark: 0 }, secondary: "gray", secondaryPalette: grayColors },
//   { id: "neutral", name: "Neutral", color: "#737373", primaryPalette: neutralColors, primaryShade: { light: 8, dark: 0 }, secondary: "neutral", secondaryPalette: neutralColors },
//   { id: "red", name: "Red", color: "#EF4444", primaryPalette: redColors, primaryShade: { light: 5, dark: 5 }, secondary: "neutral", secondaryPalette: neutralColors },
//   { id: "rose", name: "Rose", color: "#F43F5E", primaryPalette: roseColors, primaryShade: { light: 5, dark: 5 }, secondary: "stone", secondaryPalette: stoneColors },
//   { id: "orange", name: "Orange", color: "#F97316", primaryPalette: orangeColors, primaryShade: { light: 5, dark: 6 }, secondary: "stone", secondaryPalette: stoneColors },
//   { id: "green", name: "Green", color: "#10B981", primaryPalette: greenColors, primaryShade: { light: 6, dark: 5 }, secondary: 'stone', secondaryPalette: stoneColors },
//   { id: "blue", name: "Blue", color: "#3B82F6", primaryPalette: blueColors, primaryShade: { light: 6, dark: 5 }, secondary: "slate", secondaryPalette: slateColors },
//   { id: "yellow", name: "Yellow", color: "#F59E0B", primaryPalette: yellowColors, primaryShade: { light: 4, dark: 4 }, secondary: "stone", secondaryPalette: stoneColors },
//   { id: "violet", name: "Violet", color: "#8B5CF6", primaryPalette: violetColors, primaryShade: { light: 5, dark: 6 }, secondary: "gray", secondaryPalette: grayColors },
// ];

export const MANTINE_DEFAULT_COLORS = [
  { id: "blue", name: "Blue", color: "#3B82F6", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "gray", name: "Gray", color: "#6B7280", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "red", name: "Red", color: "#EF4444", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "pink", name: "Pink", color: "#F43F5E", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "grape", name: "Grape", color: "#8B5CF6", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "violet", name: "Violet", color: "#8B5CF6", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "indigo", name: "Indigo", color: "#6366F1", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "cyan", name: "Cyan", color: "#22D3EE", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "teal", name: "Teal", color: "#14B8A6", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "green", name: "Green", color: "#10B981", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "lime", name: "Lime", color: "#65A30D", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "yellow", name: "Yellow", color: "#F59E0B", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
  { id: "orange", name: "Orange", color: "#F97316", primaryPalette: [], primaryShade: { light: 6, dark: 6 } },
];

export const SHADCN_DEFAULT_COLORS = [
  { id: "zinc", name: "Zinc", color: "#71717A", primaryPalette: zincColors, primaryShade: { light: 8, dark: 0 }, secondary: "zinc", secondaryPalette: zincColors },
  { id: "slate", name: "Slate", color: "#64748B", primaryPalette: slateColors, primaryShade: { light: 8, dark: 0 }, secondary: "slate", secondaryPalette: slateColors },
  { id: "gray", name: "Gray", color: "#6B7280", primaryPalette: grayColors, primaryShade: { light: 8, dark: 0 }, secondary: "gray", secondaryPalette: grayColors },
  { id: "neutral", name: "Neutral", color: "#737373", primaryPalette: neutralColors, primaryShade: { light: 8, dark: 0 }, secondary: "neutral", secondaryPalette: neutralColors },
  { id: "stone", name: "Stone", color: "#78716C", primaryPalette: stoneColors, primaryShade: { light: 8, dark: 0 }, secondary: "stone", secondaryPalette: stoneColors },
  
  { id: "red", name: "Red", color: "#EF4444", primaryPalette: redColors, primaryShade: { light: 5, dark: 5 }, secondary: "neutral", secondaryPalette: neutralColors },
  { id: "rose", name: "Rose", color: "#F43F5E", primaryPalette: roseColors, primaryShade: { light: 5, dark: 5 }, secondary: "stone", secondaryPalette: stoneColors },
  { id: "orange", name: "Orange", color: "#F97316", primaryPalette: orangeColors, primaryShade: { light: 5, dark: 6 }, secondary: "stone", secondaryPalette: stoneColors },
  // { id: "amber", name: "Amber", color: "#F59E0B", primaryPalette: amberColors, primaryShade: { light: 5, dark: 5 }, secondary: "stone", secondaryPalette: stoneColors },
  { id: "yellow", name: "Yellow", color: "#EAB308", primaryPalette: yellowColors, primaryShade: { light: 4, dark: 4 }, secondary: "stone", secondaryPalette: stoneColors },
  
  // { id: "lime", name: "Lime", color: "#84CC16", primaryPalette: limeColors, primaryShade: { light: 5, dark: 4 }, secondary: "stone", secondaryPalette: stoneColors },
  { id: "green", name: "Green", color: "#22C55E", primaryPalette: greenColors, primaryShade: { light: 6, dark: 5 }, secondary: "stone", secondaryPalette: stoneColors },
  // { id: "emerald", name: "Emerald", color: "#10B981", primaryPalette: emeraldColors, primaryShade: { light: 5, dark: 5 }, secondary: "stone", secondaryPalette: stoneColors },
  
  // { id: "teal", name: "Teal", color: "#14B8A6", primaryPalette: tealColors, primaryShade: { light: 5, dark: 4 }, secondary: "slate", secondaryPalette: slateColors },
  // { id: "cyan", name: "Cyan", color: "#06B6D4", primaryPalette: cyanColors, primaryShade: { light: 5, dark: 4 }, secondary: "slate", secondaryPalette: slateColors },
  // { id: "sky", name: "Sky", color: "#0EA5E9", primaryPalette: skyColors, primaryShade: { light: 5, dark: 4 }, secondary: "slate", secondaryPalette: slateColors },
  { id: "blue", name: "Blue", color: "#3B82F6", primaryPalette: blueColors, primaryShade: { light: 6, dark: 5 }, secondary: "slate", secondaryPalette: slateColors },
  
  { id: "indigo", name: "Indigo", color: "#6366F1", primaryPalette: indigoColors, primaryShade: { light: 5, dark: 6 }, secondary: "gray", secondaryPalette: grayColors },
  // { id: "violet", name: "Violet", color: "#8B5CF6", primaryPalette: violetColors, primaryShade: { light: 5, dark: 6 }, secondary: "gray", secondaryPalette: grayColors },
  // { id: "purple", name: "Purple", color: "#A855F7", primaryPalette: purpleColors, primaryShade: { light: 5, dark: 6 }, secondary: "gray", secondaryPalette: grayColors },
  // { id: "fuchsia", name: "Fuchsia", color: "#D946EF", primaryPalette: fuchsiaColors, primaryShade: { light: 5, dark: 7 }, secondary: "gray", secondaryPalette: grayColors },
  // { id: "pink", name: "Pink", color: "#EC4899", primaryPalette: pinkColors, primaryShade: { light: 5, dark: 6 }, secondary: "gray", secondaryPalette: grayColors },
];