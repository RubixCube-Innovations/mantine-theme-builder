"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultBorderColorNight = exports.getDefaultBorderColorDay = exports.getPrimaryLightColorNight = exports.getPrimaryLightColorDay = exports.getPrimaryContrastColorNight = exports.getPrimaryContrastColorDay = exports.convertThemeToObj = exports.getCssResolverVariables = exports.getSecondaryPalette = exports.getCurrentCSSResolverVariables = exports.handleCopyCode = exports.formatCssVariable = exports.formatThemeObj = exports.traverseAndReplace = exports.getBasePrimaryShade = exports.getBaseTheme = void 0;
var mantine_css_variable_resolver_1 = require("../themes/mantine/mantine-css-variable-resolver");
var mantine_theme_1 = require("../themes/mantine/mantine-theme");
var shadcn_css_variable_resolver_1 = require("../themes/shadcn/shadcn-css-variable-resolver");
var shadcn_theme_1 = require("../themes/shadcn/shadcn-theme");
var colors_1 = require("./colors");
var themeTemplate_1 = require("./themeTemplate");
/**
 * Get the base theme based on the style.
 *
 * @param style - The style of the theme, e.g., "shadcn".
 * @returns The base theme for the given style.
 */
var getBaseTheme = function (style) {
    if (style === "shadcn") {
        return shadcn_theme_1.shadcnTheme;
    }
    return mantine_theme_1.mantineTheme;
};
exports.getBaseTheme = getBaseTheme;
/**
 * Get the base primary shade based on the theme style and color.
 *
 * @param style - The style of the theme, e.g., "shadcn".
 * @param color - The primary color of the theme.
 * @returns The primary shade for the given style and color.
 */
var getBasePrimaryShade = function (style, color) {
    var _a, _b;
    var baseColor = color;
    //check for primary color
    if (color === "primary") {
        baseColor = style === "shadcn" ? "zinc" : "blue";
    }
    if (style === "shadcn") {
        return (_a = colors_1.SHADCN_DEFAULT_COLORS.find(function (item) { return item.id === baseColor; })) === null || _a === void 0 ? void 0 : _a.primaryShade;
    }
    return (_b = colors_1.MANTINE_DEFAULT_COLORS.find(function (item) { return item.id === baseColor; })) === null || _b === void 0 ? void 0 : _b.primaryShade;
};
exports.getBasePrimaryShade = getBasePrimaryShade;
// Helper function to recursively replace all matching values
var replaceCalcWithRem = function (value) {
    // Regex to match the pattern calc(<dynamic_value>rem * var(--mantine-scale))
    var regex = /calc\(([\d.]+)rem \* var\(--mantine-scale\)\)/;
    // If the value is a string and matches the regex pattern
    if (typeof value === "string" && regex.test(value)) {
        // Replace with rem(<dynamic_value>)
        return value.replace(regex, function (_, dynamicValue) { return "rem(".concat(dynamicValue, ")"); });
    }
    // Return the value if no match is found
    return value;
};
// Recursively walk through theme object and replace values matching the pattern
var traverseAndReplace = function (obj) {
    var result = {};
    for (var key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            // If the value is an object or array, recursively apply the function
            result[key] = (0, exports.traverseAndReplace)(obj[key]);
        }
        else {
            // Otherwise, replace the value if it matches the pattern
            result[key] = replaceCalcWithRem(obj[key]);
        }
    }
    return result;
};
exports.traverseAndReplace = traverseAndReplace;
var formatThemeObj = function (theme) {
    var replacedJSON = (0, exports.traverseAndReplace)(theme);
    var JSONstring = (0, exports.convertThemeToObj)(replacedJSON);
    var currentCssResolver = (0, exports.getCurrentCSSResolverVariables)(theme);
    var variableResolver = (0, exports.formatCssVariable)(currentCssResolver);
    return (0, themeTemplate_1.generateThemeTemplate)(JSONstring, variableResolver);
};
exports.formatThemeObj = formatThemeObj;
var formatCssVariable = function (obj) {
    return JSON.stringify(obj, null, 2);
};
exports.formatCssVariable = formatCssVariable;
var handleCopyCode = function (theme) { return __awaiter(void 0, void 0, void 0, function () {
    var prettyObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prettyObject = JSON.stringify(theme, null, 2);
                return [4 /*yield*/, navigator.clipboard.writeText(prettyObject)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.handleCopyCode = handleCopyCode;
var getCurrentCSSResolverVariables = function (theme) {
    var _a;
    var cssResolverVars = ((_a = theme.other) === null || _a === void 0 ? void 0 : _a.style) === "shadcn" ? (0, shadcn_css_variable_resolver_1.shadcnCssVariableResolver)(theme) : (0, mantine_css_variable_resolver_1.mantineCssVariableResolver)(theme);
    return cssResolverVars;
};
exports.getCurrentCSSResolverVariables = getCurrentCSSResolverVariables;
/**
 * Retrieves the secondary color palette based on the provided style and color.
 *
 * @param style - The style identifier, which can be "shadcn" or "mantine" or undefined.
 * @param color - The color identifier, which can be undefined.
 * @returns An array of color strings representing the secondary palette.
 *          If the style is "shadcn" and a matching color is found, the corresponding secondary palette is returned.
 *          Otherwise, a default grayscale palette is returned.
 */
var getSecondaryPalette = function (style, color) {
    var _a;
    if (style === "shadcn") {
        return (_a = colors_1.SHADCN_DEFAULT_COLORS.find(function (item) { return item.id === color; })) === null || _a === void 0 ? void 0 : _a.secondaryPalette;
    }
    return [
        "#C9C9C9", // dark 0
        "#b8b8b8", // dark 1
        "#828282", // dark 2
        "#696969", // dark 3
        "#424242", // dark 4
        "#3b3b3b", // dark 5
        "#2e2e2e", // dark 6
        "#242424", // dark 7
        "#1f1f1f", // dark 8
        "#141414", // dark 9
    ];
};
exports.getSecondaryPalette = getSecondaryPalette;
var getCssResolverVariables = function (theme) {
    var cssResolverVars = (0, exports.getCurrentCSSResolverVariables)(theme);
    return (0, exports.formatCssVariable)(cssResolverVars);
};
exports.getCssResolverVariables = getCssResolverVariables;
var convertThemeToObj = function (obj) {
    var ret = "{";
    for (var k in obj) {
        var v = obj[k];
        if (typeof v === "function") {
            // v = v.toString();
            v = "".concat(v);
        }
        else if (v instanceof Array) {
            v = JSON.stringify(v);
        }
        else if (typeof v === "object") {
            v = (0, exports.convertThemeToObj)(v);
        }
        else {
            v = "\"".concat(v, "\"");
        }
        ret += "\n  ".concat(k, ": ").concat(v, ",");
    }
    ret += "\n}";
    return ret;
};
exports.convertThemeToObj = convertThemeToObj;
/**
 * Retrieves the text color for a given color identifier based on predefined palettes.
 *
 * @param color - The color identifier to retrieve the text color for.
 *                Accepted values are "zinc", "slate", "stone", "gray", "neutral",
 *                "red", "rose", "orange", "blue", "violet", "green", and "yellow".
 * @returns The corresponding text color from the predefined palettes.
 *          If the color is "yellow", a specific hex color code is returned.
 *          If the color is "green", the primary palette color for "rose" is returned.
 *          Otherwise, the primary or secondary palette color for the given color is returned.
 */
var getPrimaryContrastColorDay = function (color) {
    if (color === "zinc" ||
        color === "slate" ||
        color === "stone" ||
        color === "gray" ||
        color === "neutral" ||
        color === "red" ||
        color === "rose") {
        return "var(--mantine-primary-color-0)";
    }
    else if (color === "orange" || color === "blue" || color === "violet") {
        return "var(--mantine-color-dark-0)";
    }
    else if (color === "green") {
        return "var(--mantine-color-rose-0)";
    }
    else if (color === "yellow") {
        return "#422006";
    }
    else {
        return "var(--mantine-primary-color-0)";
    }
};
exports.getPrimaryContrastColorDay = getPrimaryContrastColorDay;
/**
 * Retrieves the text color for a given color identifier based on predefined palettes.
 *
 * @param color - The color identifier to retrieve the text color for.
 *                Accepted values are "zinc", "slate", "stone", "gray", "neutral",
 *                "red", "rose", "orange", "blue", "violet", "green", and "yellow".
 * @returns The corresponding text color from the predefined palettes.
 *          If the color is "yellow", a specific hex color code is returned.
 *          If the color is "green", the primary palette color for "rose" is returned.
 *          Otherwise, the primary or secondary palette color for the given color is returned.
 */
var getPrimaryContrastColorNight = function (color) {
    if (color === "zinc" ||
        color === " slate" ||
        color === "stone" ||
        color === "gray" ||
        color === "neutral" ||
        color === "blue") {
        return "var(--mantine-color-dark-8)";
    }
    else if (color === "red" || color === "rose") {
        return "var(--mantine-primary-color-0)";
    }
    else if (color === "orange" || color === "violet") {
        return "var(--mantine-color-dark-0)";
    }
    else if (color === "green") {
        return "var(--mantine-primary-color-9)";
    }
    else if (color === "yellow") {
        return "#422006";
    }
    else {
        return "var(--mantine-color-dark-8)";
    }
};
exports.getPrimaryContrastColorNight = getPrimaryContrastColorNight;
var getPrimaryLightColorDay = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-1)";
    }
    else {
        return "var(--mantine-color-dark-1)";
    }
};
exports.getPrimaryLightColorDay = getPrimaryLightColorDay;
var getPrimaryLightColorNight = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-dark-7)";
    }
    else {
        return "var(--mantine-color-dark-7)";
    }
};
exports.getPrimaryLightColorNight = getPrimaryLightColorNight;
var getDefaultBorderColorDay = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-2)";
    }
    else {
        return "var(--mantine-color-dark-2)";
    }
};
exports.getDefaultBorderColorDay = getDefaultBorderColorDay;
var getDefaultBorderColorNight = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-7)";
    }
    else {
        return "var(--mantine-color-dark-7)";
    }
};
exports.getDefaultBorderColorNight = getDefaultBorderColorNight;
