export const generatedShadcnCssVariableResolver = {
  zinc: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-zinc-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-zinc-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  slate: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-slate-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-slate-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  gray: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-gray-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-gray-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  neutral: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-neutral-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-neutral-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  stone: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-stone-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-stone-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  red: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-red-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-red-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  rose: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-rose-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-zinc-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-zinc-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-zinc-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-rose-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-zinc-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  orange: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-stone-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-stone-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  yellow: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "#422006", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "#422006", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  green: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-rose-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-zinc-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-zinc-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-zinc-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-green-9)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-zinc-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  blue: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-slate-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-slate-8)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`,
  violet: `import { alpha, CSSVariablesResolver } from "@mantine/core";
import { SHADCN_DEFAULT_COLORS } from "../../utils/colors";

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    "--mantine-heading-font-weight": "600",
    "--mantine-primary-color-filled-hover": alpha("var(--mantine-primary-color-filled)", 0.9),
    "--mantine-primary-color-light": "var(--mantine-color-secondary-light)",
    "--mantine-primary-color-light-hover": alpha("var(--mantine-primary-color-light)", 0.8),
    "--mantine-primary-color-light-color": "var(--mantine-color-secondary-light-color)",
  },
  light: {
    // all variables that depend on light color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-gray-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-white)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
    "--mantine-color-body": "var(--mantine-color-white)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-0)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-1)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-9)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-2)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-10)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-bright)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": "var(--mantine-color-secondary-1)", // used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-1)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-8)", // used as primary light variant's text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-2)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-1)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-8\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-8\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-8\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-8\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-8\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-5\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-6)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-6\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-6\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-5\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-6)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-6)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-6)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-6)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-6)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-6)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-6)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-6)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-6)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-6)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-6)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-6)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-8)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.1)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-8)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.1)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-8)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.1)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-8)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.1)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-8)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.1)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.1)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.1)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-5)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.1)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.1)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-6)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.1)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.1)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-5)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.1)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-0)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-0)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-0)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-0)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
  dark: {
    // all variables that depend on dark color scheme
    "--mantine-primary-color-contrast": "var(--mantine-color-gray-0)", // used as primary color contrast
    "--mantine-color-bright": "var(--mantine-color-secondary-9)", // used as theme's bright color
    "--mantine-color-text": "var(--mantine-color-secondary-0)", // used as text color
    "--mantine-color-body": "var(--mantine-color-bright)", // used as body color
    "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
    "--mantine-color-placeholder": "var(--mantine-color-secondary-4)", // used as placeholder color
    "--mantine-color-anchor": "var(--mantine-color-secondary-4)", // used as anchor color

    "--mantine-color-default": "var(--mantine-color-secondary-9)", // used as default surface color
    "--mantine-color-default-hover": "var(--mantine-color-secondary-7)", // used as default hover color
    "--mantine-color-default-color": "var(--mantine-color-secondary-1)", // used as default text color
    "--mantine-color-default-border": "var(--mantine-color-secondary-7)", // used as default border color
    "--mantine-color-dimmed": "var(--mantine-color-secondary-4)", // used as dimmed text color

    "--mantine-color-secondary-filled": "var(--mantine-color-secondary-8)", // used as secondary surface color
    "--mantine-color-secondary-filled-hover": alpha("var(--mantine-color-secondary-filled)", 0.9), //used as secondary hover color

    "--mantine-color-secondary-light": "var(--mantine-color-secondary-7)", // used as primary light color
    "--mantine-color-secondary-light-hover": alpha("var(--mantine-color-secondary-light)", 0.8), // used as primary light hover color

    "--mantine-color-secondary-text": "var(--mantine-primary-color-contrast)", // can be used as secondary text color
    "--mantine-color-secondary-light-color": "var(--mantine-color-secondary-0)", // used as primary light text color

    "--mantine-color-secondary-outline": "var(--mantine-color-secondary-7)",
    "--mantine-color-secondary-outline-hover": "var(--mantine-color-secondary-7)",

    // all filled colors
    "--mantine-color-zinc-filled": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-filled-hover": "{alpha(\"var(--mantine-color-zinc-0\"), 0.9)}",
    "--mantine-color-slate-filled": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-filled-hover": "{alpha(\"var(--mantine-color-slate-0\"), 0.9)}",
    "--mantine-color-gray-filled": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-filled-hover": "{alpha(\"var(--mantine-color-gray-0\"), 0.9)}",
    "--mantine-color-neutral-filled": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-filled-hover": "{alpha(\"var(--mantine-color-neutral-0\"), 0.9)}",
    "--mantine-color-stone-filled": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-filled-hover": "{alpha(\"var(--mantine-color-stone-0\"), 0.9)}",
    "--mantine-color-red-filled": "var(--mantine-color-red-5)",
    "--mantine-color-red-filled-hover": "{alpha(\"var(--mantine-color-red-5\"), 0.9)}",
    "--mantine-color-rose-filled": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-filled-hover": "{alpha(\"var(--mantine-color-rose-5\"), 0.9)}",
    "--mantine-color-orange-filled": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-filled-hover": "{alpha(\"var(--mantine-color-orange-6\"), 0.9)}",
    "--mantine-color-yellow-filled": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-filled-hover": "{alpha(\"var(--mantine-color-yellow-4\"), 0.9)}",
    "--mantine-color-green-filled": "var(--mantine-color-green-5)",
    "--mantine-color-green-filled-hover": "{alpha(\"var(--mantine-color-green-5\"), 0.9)}",
    "--mantine-color-blue-filled": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-filled-hover": "{alpha(\"var(--mantine-color-blue-5\"), 0.9)}",
    "--mantine-color-violet-filled": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-filled-hover": "{alpha(\"var(--mantine-color-violet-6\"), 0.9)}",

    // all light colors
    "--mantine-color-zinc-light": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-zinc-light-hover": "{alpha(\"var(--mantine-color-zinc-light)\", 0.8)}",
    "--mantine-color-zinc-light-color": "var(--mantine-color-zinc-3)",
    "--mantine-color-slate-light": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-slate-light-hover": "{alpha(\"var(--mantine-color-slate-light)\", 0.8)}",
    "--mantine-color-slate-light-color": "var(--mantine-color-slate-3)",
    "--mantine-color-gray-light": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-gray-light-hover": "{alpha(\"var(--mantine-color-gray-light)\", 0.8)}",
    "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
    "--mantine-color-neutral-light": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-neutral-light-hover": "{alpha(\"var(--mantine-color-neutral-light)\", 0.8)}",
    "--mantine-color-neutral-light-color": "var(--mantine-color-neutral-3)",
    "--mantine-color-stone-light": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-stone-light-hover": "{alpha(\"var(--mantine-color-stone-light)\", 0.8)}",
    "--mantine-color-stone-light-color": "var(--mantine-color-stone-3)",
    "--mantine-color-red-light": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-red-light-hover": "{alpha(\"var(--mantine-color-red-light)\", 0.8)}",
    "--mantine-color-red-light-color": "var(--mantine-color-red-3)",
    "--mantine-color-rose-light": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-rose-light-hover": "{alpha(\"var(--mantine-color-rose-light)\", 0.8)}",
    "--mantine-color-rose-light-color": "var(--mantine-color-rose-3)",
    "--mantine-color-orange-light": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-orange-light-hover": "{alpha(\"var(--mantine-color-orange-light)\", 0.8)}",
    "--mantine-color-orange-light-color": "var(--mantine-color-orange-3)",
    "--mantine-color-yellow-light": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-yellow-light-hover": "{alpha(\"var(--mantine-color-yellow-light)\", 0.8)}",
    "--mantine-color-yellow-light-color": "var(--mantine-color-yellow-3)",
    "--mantine-color-green-light": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-green-light-hover": "{alpha(\"var(--mantine-color-green-light)\", 0.8)}",
    "--mantine-color-green-light-color": "var(--mantine-color-green-3)",
    "--mantine-color-blue-light": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-blue-light-hover": "{alpha(\"var(--mantine-color-blue-light)\", 0.8)}",
    "--mantine-color-blue-light-color": "var(--mantine-color-blue-3)",
    "--mantine-color-violet-light": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",
    "--mantine-color-violet-light-hover": "{alpha(\"var(--mantine-color-violet-light)\", 0.8)}",
    "--mantine-color-violet-light-color": "var(--mantine-color-violet-3)",

    // all outline colors
    "--mantine-color-zinc-outline": "var(--mantine-color-zinc-0)",
    "--mantine-color-zinc-outline-hover": "{alpha(\"var(--mantine-color-zinc-4)\", 0.15)}",
    "--mantine-color-slate-outline": "var(--mantine-color-slate-0)",
    "--mantine-color-slate-outline-hover": "{alpha(\"var(--mantine-color-slate-4)\", 0.15)}",
    "--mantine-color-gray-outline": "var(--mantine-color-gray-0)",
    "--mantine-color-gray-outline-hover": "{alpha(\"var(--mantine-color-gray-4)\", 0.15)}",
    "--mantine-color-neutral-outline": "var(--mantine-color-neutral-0)",
    "--mantine-color-neutral-outline-hover": "{alpha(\"var(--mantine-color-neutral-4)\", 0.15)}",
    "--mantine-color-stone-outline": "var(--mantine-color-stone-0)",
    "--mantine-color-stone-outline-hover": "{alpha(\"var(--mantine-color-stone-4)\", 0.15)}",
    "--mantine-color-red-outline": "var(--mantine-color-red-5)",
    "--mantine-color-red-outline-hover": "{alpha(\"var(--mantine-color-red-4)\", 0.15)}",
    "--mantine-color-rose-outline": "var(--mantine-color-rose-5)",
    "--mantine-color-rose-outline-hover": "{alpha(\"var(--mantine-color-rose-4)\", 0.15)}",
    "--mantine-color-orange-outline": "var(--mantine-color-orange-6)",
    "--mantine-color-orange-outline-hover": "{alpha(\"var(--mantine-color-orange-4)\", 0.15)}",
    "--mantine-color-yellow-outline": "var(--mantine-color-yellow-4)",
    "--mantine-color-yellow-outline-hover": "{alpha(\"var(--mantine-color-yellow-4)\", 0.15)}",
    "--mantine-color-green-outline": "var(--mantine-color-green-5)",
    "--mantine-color-green-outline-hover": "{alpha(\"var(--mantine-color-green-4)\", 0.15)}",
    "--mantine-color-blue-outline": "var(--mantine-color-blue-5)",
    "--mantine-color-blue-outline-hover": "{alpha(\"var(--mantine-color-blue-4)\", 0.15)}",
    "--mantine-color-violet-outline": "var(--mantine-color-violet-6)",
    "--mantine-color-violet-outline-hover": "{alpha(\"var(--mantine-color-violet-4)\", 0.15)}",

    // all contrast colors
    "--mantine-color-zinc-contrast": "var(--mantine-color-zinc-8)",
    "--mantine-color-slate-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-gray-contrast": "var(--mantine-color-gray-8)",
    "--mantine-color-neutral-contrast": "var(--mantine-color-neutral-8)",
    "--mantine-color-stone-contrast": "var(--mantine-color-stone-8)",
    "--mantine-color-red-contrast": "var(--mantine-color-red-0)",
    "--mantine-color-rose-contrast": "var(--mantine-color-rose-0)",
    "--mantine-color-orange-contrast": "var(--mantine-color-stone-0)",
    "--mantine-color-yellow-contrast": "#422006",
    "--mantine-color-green-contrast": "var(--mantine-color-green-9)",
    "--mantine-color-blue-contrast": "var(--mantine-color-slate-8)",
    "--mantine-color-violet-contrast": "var(--mantine-color-gray-0)",
  },
});
`
};