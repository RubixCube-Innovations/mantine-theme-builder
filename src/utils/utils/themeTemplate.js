"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVariableResolverTemplate = exports.generateThemeTemplate = void 0;
var generateThemeTemplate = function (theme, variableResolver) {
    var template = "\n    import {\n  alpha,\n  Card,\n  Checkbox,\n  Code,\n  Container,\n  createTheme,\n  CSSVariablesResolver,\n  defaultVariantColorsResolver,\n  Divider,\n  Input,\n  mergeThemeOverrides,\n  Modal,\n  Paper,\n  Popover,\n  rem,\n  Switch,\n  Table,\n  Tooltip,\n} from \"@mantine/core\";\n\nimport { Spotlight } from \"@mantine/spotlight\";\n\nconst CONTAINER_SIZES: Record<string, string> = {\n  xxs: rem(200),\n  xs: rem(300),\n  sm: rem(400),\n  md: rem(500),\n  lg: rem(600),\n  xl: rem(1400),\n  xxl: rem(1600),\n};\n\nconst theme = createTheme({\n  /** Put your mantine theme override here */\n  ".concat(theme, "\n});\n\n").concat((0, exports.generateVariableResolverTemplate)(variableResolver), "\n\n");
    return template;
};
exports.generateThemeTemplate = generateThemeTemplate;
var generateVariableResolverTemplate = function (value) {
    var template = "\nexport const mantineCssVariableResolver: CSSVariablesResolver = () => ({\n".concat(value, "\n});\n");
    return template;
};
exports.generateVariableResolverTemplate = generateVariableResolverTemplate;
