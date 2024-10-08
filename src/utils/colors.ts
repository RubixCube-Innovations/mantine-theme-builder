import { generateColorPalette } from "./color-functions";

export const MANTINE_DEFAULT_COLORS = [
  { id: "blue", name: "Blue", color: "#3B82F6" },
  { id: "gray", name: "Gray", color: "#6B7280" },
  { id: "red", name: "Red", color: "#EF4444" },
  { id: "pink", name: "Pink", color: "#F43F5E" },
  { id: "grape", name: "Grape", color: "#8B5CF6" },
  { id: "violet", name: "Violet", color: "#8B5CF6" },
  { id: "indigo", name: "Indigo", color: "#6366F1" },
  { id: "cyan", name: "Cyan", color: "#22D3EE" },
  { id: "teal", name: "Teal", color: "#14B8A6" },
  { id: "green", name: "Green", color: "#10B981" },
  { id: "lime", name: "Lime", color: "#65A30D" },
  { id: "yellow", name: "Yellow", color: "#F59E0B" },
  { id: "orange", name: "Orange", color: "#F97316" },
];

export const SHADCN_DEFAULT_COLORS = [
  { id: "zinc", name: "Zinc", color: "#71717A" },
  { id: "slate", name: "Slate", color: "#64748B" },
  { id: "stone", name: "Stone", color: "#78716C" },
  { id: "gray", name: "Gray", color: "#6B7280" },
  { id: "neutral", name: "Neutral", color: "#737373" },
  { id: "red", name: "Red", color: "#EF4444" },
  { id: "rose", name: "Rose", color: "#F43F5E" },
  { id: "orange", name: "Orange", color: "#F97316" },
  { id: "green", name: "Green", color: "#10B981" },
  { id: "blue", name: "Blue", color: "#3B82F6" },
  { id: "yellow", name: "Yellow", color: "#F59E0B" },
  { id: "violet", name: "Violet", color: "#8B5CF6" },
];

export const zincColors = generateColorPalette("zinc", [
  "#fafafa",
  "#f4f4f5",
  "#e4e4e7",
  "#d4d4d8",
  "#a1a1aa",
  "#71717a",
  "#3f3f46",
  "#27272a",
  "#18181b",
  "#09090b",
]);

export const darkColors = generateColorPalette("dark", [
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
]);

export const slateColors = generateColorPalette("slate", [
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
  "#94a3b8",
  "#64748b",
  "#334155",
  "#1e293b",
  "#0f172a",
  "#020617",
]);

export const stoneColors = generateColorPalette("stone", [
  "#fafaf9",
  "#f5f5f4",
  "#e7e5e4",
  "#d6d3d1",
  "#a8a29e",
  "#78716c",
  "#44403c",
  "#292524",
  "#1c1917",
  "#0c0a09",
]);

export const grayColors = generateColorPalette("gray", [
  "#f9fafb",
  "#f3f4f6",
  "#e5e7eb",
  "#d1d5db",
  "#9ca3af",
  "#6b7280",
  "#374151",
  "#1f2937",
  "#111827",
  "#030712",
]);

export const neutralColors = generateColorPalette("neutral", [
  "#fafafa",
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#404040",
  "#262626",
  "#171717",
  "#0a0a0a",
]);

export const redColors = generateColorPalette("red", [
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
]);

export const roseColors = generateColorPalette("rose", [
  "#fff1f2",
  "#ffe4e6",
  "#fecdd3",
  "#fda4af",
  "#fb7185",
  "#f43f5e",
  "#be123c",
  "#9f1239",
  "#881337",
  "#4c0519",
]);

export const orangeColors = generateColorPalette("orange", [
  "#fff7ed",
  "#ffedd5",
  "#fed7aa",
  "#fdba74",
  "#fb923c",
  "#f97316",
  "#c2410c",
  "#9a3412",
  "#7c2d12",
  "#431407",
]);

export const greenColors = generateColorPalette("green", [
  "#F0FDF4",
  "#DCFCE7",
  "#BBF7D0",
  "#86EFAC",
  "#4ADE80",
  "#22C55E",
  "#15803D",
  "#166534",
  "#14532D",
  "#052E16",
]);

export const blueColors = generateColorPalette("blue", [
  "#eff6ff",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
  "#172554",
]);

export const yellowColors = generateColorPalette("yellow", [
  "#fefce8",
  "#fef9c3",
  "#fef08a",
  "#fde047",
  "#facc15",
  "#eab308",
  "#a16207",
  "#854d0e",
  "#713f12",
  "#3f2c06",
]);

export const violetColors = generateColorPalette("violet", [
  "#f5f3ff",
  "#ede9fe",
  "#ddd6fe",
  "#c4b5fd",
  "#a78bfa",
  "#8b5cf6",
  "#6d28d9",
  "#5b21b6",
  "#4c1d95",
  "#1e1b4b",
]);

export const amberColors = generateColorPalette("amber", [
  "#FFFBEB",
  "#FEF3C7",
  "#FDE68A",
  "#FCD34D",
  "#FBBF24",
  "#F59E0B",
  "#B45309",
  "#92400E",
  "#78350F",
  "#451A03",
]);
