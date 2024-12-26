import { alpha } from '@mantine/core';
import { SHADCN_DEFAULT_COLORS } from './colors';

export const getPrimaryContrastColorDay = (color: string) => {
  const colorObj = SHADCN_DEFAULT_COLORS.find((c) => c.id === color);
  if (
    color === 'zinc' ||
    color === 'slate' ||
    color === 'stone' ||
    color === 'gray' ||
    color === 'neutral' ||
    color === 'red' ||
    color === 'rose'
  ) {
    return `var(--mantine-color-${colorObj?.id}-0)`;
  } else if (color === 'orange' || color === 'blue' || color === 'violet') {
    return `var(--mantine-color-${colorObj?.secondary}-0)`;
  } else if (color === 'green') {
    return `var(--mantine-color-rose-0)`;
  } else if (color === 'yellow') {
    return '#422006';
  } else {
    return `var(--mantine-color-${colorObj?.id}-0)`;
  }
};

export const getPrimaryContrastColorNight = (color: string) => {
  const colorObj = SHADCN_DEFAULT_COLORS.find((c) => c.id === color);
  if (
    color === 'zinc' ||
    color === ' slate' ||
    color === 'stone' ||
    color === 'gray' ||
    color === 'neutral'
  ) {
    return `var(--mantine-color-${colorObj?.secondary}-8)`;
  } else if (color === 'red' || color === 'rose') {
    return `var(--mantine-color-${colorObj?.id}-0)`;
  } else if (
    color === 'orange' ||
    color === 'violet' ||
    color === 'emerald' ||
    color === 'purple' ||
    color === 'indigo' ||
    color === 'pink' ||
    color === 'fuchsia' ||
    color === 'blue' 
  ) {
    return `var(--mantine-color-${colorObj?.secondary}-0)`;
  } else if (color === 'green') {
    return `var(--mantine-color-${colorObj?.id}-9)`;
  } else if (color === 'yellow') {
    return '#422006';
  } else {
    return `var(--mantine-color-${colorObj?.secondary}-8)`;
  }
};

export const getSecondaryLightColorDay = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'var(--mantine-color-zinc-1)';
  } else {
    return 'var(--mantine-color-secondary-1)';
  }
};

export const getSecondaryLightColorNight = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'var(--mantine-color-secondary-7)';
  } else {
    return 'var(--mantine-color-secondary-7)';
  }
};

export const getDefaultBorderColorDay = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'var(--mantine-color-zinc-2)';
  } else {
    return 'var(--mantine-color-secondary-2)';
  }
};

export const getDefaultBorderColorNight = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'var(--mantine-color-zinc-7)';
  } else {
    return 'var(--mantine-color-secondary-7)';
  }
};

export const getShadcnCardClassname = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'globalMantineCardRoot__roseGreen';
  } else {
    return 'globalMantineCardRoot';
  }
};

export const getShadcnInputBg = (color: string) => {
  if (color === 'rose' || color === 'green') {
    return 'var(--mantine-color-secondary-filled)';
  } else {
    return 'var(--mantine-color-default)';
  }
};

export function generateShadcnCSSFilledColorVariables(mode: string, isGeneration = false) {
  const lightMode: Record<string, string> = {};
  const darkMode: Record<string, string> = {};

  SHADCN_DEFAULT_COLORS.forEach(({ id, primaryShade }) => {
    lightMode[`--mantine-color-${id}-filled`] = `var(--mantine-color-${id}-${primaryShade.light})`;
    lightMode[`--mantine-color-${id}-filled-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-${primaryShade.light})', 0.9)}`
      : alpha(`var(--mantine-color-${id}-${primaryShade.light})`, 0.9);
    darkMode[`--mantine-color-${id}-filled`] = `var(--mantine-color-${id}-${primaryShade.dark})`;
    darkMode[`--mantine-color-${id}-filled-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-${primaryShade.dark})', 0.9)}`
      : alpha(`var(--mantine-color-${id}-${primaryShade.dark})`, 0.9);
  });

  if (mode === 'light') {
    return lightMode;
  }
  return darkMode;
}

export function getPrimaryColorLight(color: string) {
  return `var(--mantine-color-${color}-light)`;
};

export function getPrimaryColorLightHover(color: string) {
  return `var(--mantine-color-${color}-light-hover)`;
}

export function getPrimaryColorLightColor(color: string) {
  return `var(--mantine-color-${color}-light-color)`;
}

export function generateShadcnCSSLightColorVariables(mode: string, isGeneration = false) {
  const lightMode: Record<string, string> = {};
  const darkMode: Record<string, string> = {};

  SHADCN_DEFAULT_COLORS.forEach(({ id }) => {
    lightMode[`--mantine-color-${id}-light`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-4)', 0.1)}`
      : alpha(`var(--mantine-color-${id}-4)`, 0.1);
    lightMode[`--mantine-color-${id}-light-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-light)', 0.8)}`
      : alpha(`var(--mantine-color-${id}-light)`, 0.8);
    lightMode[`--mantine-color-${id}-light-color`] = `var(--mantine-color-${id}-6)`;
    darkMode[`--mantine-color-${id}-light`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-4)', 0.15)}`
      : alpha(`var(--mantine-color-${id}-4)`, 0.15);
    darkMode[`--mantine-color-${id}-light-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-light)', 0.8)}`
      : alpha(`var(--mantine-color-${id}-light)`, 0.8);
    darkMode[`--mantine-color-${id}-light-color`] = `var(--mantine-color-${id}-3)`;
  });

  if (mode === 'light') {
    return lightMode;
  }
  return darkMode;
}

export function generateShadcnCSSOutlineColorVariables(mode: string, isGeneration = false) {
  const lightMode: Record<string, string> = {};
  const darkMode: Record<string, string> = {};

  SHADCN_DEFAULT_COLORS.forEach(({ id, primaryShade }) => {
    lightMode[`--mantine-color-${id}-outline`] = `var(--mantine-color-${id}-${primaryShade.light})`;
    lightMode[`--mantine-color-${id}-outline-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-4)', 0.1)}`
      : alpha(`var(--mantine-color-${id}-4)`, 0.1);
    darkMode[`--mantine-color-${id}-outline`] = `var(--mantine-color-${id}-${primaryShade.dark})`;
    darkMode[`--mantine-color-${id}-outline-hover`] = isGeneration
      ? `{alpha('var(--mantine-color-${id}-4)', 0.15)}`
      : alpha(`var(--mantine-color-${id}-4)`, 0.15);
  });

  if (mode === 'light') {
    return lightMode;
  }
  return darkMode;
}

export function generateShadcnCSSContrastColorVariables(mode: string) {
  const lightMode: Record<string, string> = {};
  const darkMode: Record<string, string> = {};

  SHADCN_DEFAULT_COLORS.forEach(({ id }) => {
    lightMode[`--mantine-color-${id}-contrast`] = getPrimaryContrastColorDay(id);
    darkMode[`--mantine-color-${id}-contrast`] = getPrimaryContrastColorNight(id);
  });

  if (mode === 'light') {
    return lightMode;
  }
  return darkMode;
}
