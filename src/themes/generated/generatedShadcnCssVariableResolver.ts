export const generatedShadcnCssVariableResolver = {
  zinc: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  slate: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  stone: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  gray: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  neutral: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  red: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
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
    },
  });`,
  rose: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-0)", // used as primary color contrast
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
    },
  });`,
  orange: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-0)", // used as primary color contrast
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
    },
  });`,
  green: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-rose-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-primary-color-9)", // used as primary color contrast
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
    },
  });`,
  blue: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-8)", // used as primary color contrast
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
    },
  });`,
  yellow: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "#422006", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
  });`,
  violet: `import { alpha, CSSVariablesResolver } from "@mantine/core";

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
      // all variables that depend on lighth color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-0)", // used as primary color contrast
      "--mantine-color-bright": "var(--mantine-color-secondary-0)", // used as theme's bright color
      "--mantine-color-text": "var(--mantine-color-secondary-9)", // used as text color
      "--mantine-color-body": "var(--mantine-color-white)", // used as body color
      "--mantine-color-error": "var(--mantine-color-error-10)", // used as error color
      "--mantine-color-placeholder": "var(--mantine-color-secondary-10)", // used as placeholder color
      "--mantine-color-anchor": "var(--mantine-color-secondary-10)", // used as anchor color
  
      "--mantine-color-default": "var(--mantine-color-bright)", // used as default surface color
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
    },
    dark: {
      // all variables that depend on dark color scheme
      "--mantine-primary-color-contrast": "var(--mantine-color-secondary-0)", // used as primary color contrast
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
    },
  });`
};