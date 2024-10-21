export const generateThemeTemplate = (theme: string, variableResolver: string) => {
  const template = `
    import {
  alpha,
  Card,
  Checkbox,
  Code,
  Container,
  createTheme,
  CSSVariablesResolver,
  defaultVariantColorsResolver,
  Divider,
  Input,
  mergeThemeOverrides,
  Modal,
  Paper,
  Popover,
  rem,
  Switch,
  Table,
  Tooltip,
} from "@mantine/core";

import { Spotlight } from "@mantine/spotlight";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(200),
  xs: rem(300),
  sm: rem(400),
  md: rem(500),
  lg: rem(600),
  xl: rem(1400),
  xxl: rem(1600),
};

const theme = createTheme({
  /** Put your mantine theme override here */
  ${theme}
});

${generateVariableResolverTemplate(variableResolver)}

`;

  return template;
};

export const generateVariableResolverTemplate = (value: any) => {
  const template = `
export const mantineCssVariableResolver: CSSVariablesResolver = () => ({
${value}
});
`;

  return template;
};
