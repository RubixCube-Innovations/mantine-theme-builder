import { alpha, CSSVariablesResolver } from '@mantine/core';
import { generateShadcnCSSContrastColorVariables, generateShadcnCSSFilledColorVariables, generateShadcnCSSLightColorVariables, generateShadcnCSSOutlineColorVariables, getDefaultBorderColorDay, getDefaultBorderColorNight, getPrimaryColorLight, getPrimaryColorLightColor, getPrimaryColorLightHover, getPrimaryContrastColorDay, getPrimaryContrastColorNight, getSecondaryLightColorDay, getSecondaryLightColorNight } from '../../utils/theme-functions';

export const shadcnCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // variables that do not depend on color scheme
    '--mantine-heading-font-weight': '600',
    '--mantine-primary-color-filled-hover': alpha('var(--mantine-primary-color-filled)', 0.9),
    '--mantine-primary-color-light': getPrimaryColorLight(theme.primaryColor),
    '--mantine-primary-color-light-hover': getPrimaryColorLightHover(theme.primaryColor),
    '--mantine-primary-color-light-color': getPrimaryColorLightColor(theme.primaryColor),
  },
  light: {
    // all variables that depend on light color scheme
    '--mantine-primary-color-contrast': getPrimaryContrastColorDay(theme.primaryColor), // used as primary color contrast
    '--mantine-color-text': 'var(--mantine-color-secondary-9)', // used as text color
    '--mantine-color-body': 'var(--mantine-color-white)', // used as body color
    '--mantine-color-error': 'var(--mantine-color-error-10)', // used as error color
    '--mantine-color-placeholder': 'var(--mantine-color-secondary-10)', // used as placeholder color
    '--mantine-color-anchor': 'var(--mantine-color-secondary-10)', // used as anchor color

    '--mantine-color-default': 'var(--mantine-color-secondary-0)', // used as default surface color
    '--mantine-color-default-hover': getSecondaryLightColorDay(theme.primaryColor), // used as default hover color
    '--mantine-color-default-color': 'var(--mantine-color-secondary-9)', // used as default text color
    '--mantine-color-default-border': getDefaultBorderColorDay(theme.primaryColor), // used as default border color
    '--mantine-color-dimmed': 'var(--mantine-color-secondary-10)', // used as dimmed text color

    '--mantine-color-secondary-filled': 'var(--mantine-color-white)', // used as secondary surface color
    '--mantine-color-secondary-filled-hover': 'var(--mantine-color-secondary-1)', // used as secondary hover color

    '--mantine-color-secondary-light': getSecondaryLightColorDay(theme.primaryColor), // used as primary light color
    '--mantine-color-secondary-light-hover': alpha('var(--mantine-color-secondary-light)', 0.8), // used as primary light hover color

    '--mantine-color-secondary-text': 'var(--mantine-primary-color-contrast)', // can be used as secondary text color
    '--mantine-color-secondary-light-color': 'var(--mantine-color-secondary-8)', // used as primary light variant's text color

    '--mantine-color-secondary-outline': 'var(--mantine-color-secondary-2)',
    '--mantine-color-secondary-outline-hover': 'var(--mantine-color-secondary-1)',

    // all filled colors
    ...generateShadcnCSSFilledColorVariables('light'),

    // all light colors
    ...generateShadcnCSSLightColorVariables('light'),

    // all outline colors
    ...generateShadcnCSSOutlineColorVariables('light'),

    // all contrast colors
    ...generateShadcnCSSContrastColorVariables('light'),
  },
  dark: {
    // all variables that depend on dark color scheme
    '--mantine-primary-color-contrast': getPrimaryContrastColorNight(theme.primaryColor), // used as primary color contrast
    '--mantine-color-text': 'var(--mantine-color-secondary-0)', // used as text color
    '--mantine-color-body': 'var(--mantine-color-secondary-9)', // used as body color
    '--mantine-color-error': 'var(--mantine-color-error-10)', // used as error color
    '--mantine-color-placeholder': 'var(--mantine-color-secondary-4)', // used as placeholder color
    '--mantine-color-anchor': 'var(--mantine-color-secondary-4)', // used as anchor color

    '--mantine-color-default': 'var(--mantine-color-secondary-9)', // used as default surface color
    '--mantine-color-default-hover': getSecondaryLightColorNight(theme.primaryColor), // used as default hover color
    '--mantine-color-default-color': 'var(--mantine-color-secondary-1)', // used as default text color
    '--mantine-color-default-border': getDefaultBorderColorNight(theme.primaryColor), // used as default border color
    '--mantine-color-dimmed': 'var(--mantine-color-secondary-4)', // used as dimmed text color

    '--mantine-color-secondary-filled': 'var(--mantine-color-secondary-8)', // used as secondary surface color
    '--mantine-color-secondary-filled-hover': alpha('var(--mantine-color-secondary-filled)', 0.9), //used as secondary hover color

    '--mantine-color-secondary-light': getSecondaryLightColorNight(theme.primaryColor), // used as primary light color
    '--mantine-color-secondary-light-hover': alpha('var(--mantine-color-secondary-light)', 0.8), // used as primary light hover color

    '--mantine-color-secondary-text': 'var(--mantine-primary-color-contrast)', // can be used as secondary text color
    '--mantine-color-secondary-light-color': 'var(--mantine-color-secondary-0)', // used as primary light text color

    '--mantine-color-secondary-outline': 'var(--mantine-color-secondary-7)',
    '--mantine-color-secondary-outline-hover': 'var(--mantine-color-secondary-7)',

    // all filled colors
    ...generateShadcnCSSFilledColorVariables('dark'),

    // all light colors
    ...generateShadcnCSSLightColorVariables('dark'),

    // all outline colors
    ...generateShadcnCSSOutlineColorVariables('dark'),

    // all contrast colors
    ...generateShadcnCSSContrastColorVariables('dark'),
  },
});
