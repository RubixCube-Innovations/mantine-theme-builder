"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadcnInputBg = exports.getShadcnCardClassname = exports.getDefaultBorderColorNight = exports.getDefaultBorderColorDay = exports.getPrimaryLightColorNight = exports.getPrimaryLightColorDay = exports.getPrimaryContrastColorNight = exports.getPrimaryContrastColorDay = void 0;
exports.generateCSSFilledColorVariables = generateCSSFilledColorVariables;
exports.generateCSSContrastColorVariables = generateCSSContrastColorVariables;
var colors_1 = require("./colors");
var getPrimaryContrastColorDay = function (color) {
    var colorObj = colors_1.SHADCN_DEFAULT_COLORS.find(function (c) { return c.id === color; });
    if (color === "zinc" ||
        color === "slate" ||
        color === "stone" ||
        color === "gray" ||
        color === "neutral" ||
        color === "red" ||
        color === "rose") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.id, "-0)");
    }
    else if (color === "orange" || color === "blue" || color === "violet") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.secondary, "-0)");
    }
    else if (color === "green") {
        return "var(--mantine-color-rose-0)";
    }
    else if (color === "yellow") {
        return "#422006";
    }
    else {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.id, "-0)");
    }
};
exports.getPrimaryContrastColorDay = getPrimaryContrastColorDay;
var getPrimaryContrastColorNight = function (color) {
    var colorObj = colors_1.SHADCN_DEFAULT_COLORS.find(function (c) { return c.id === color; });
    if (color === "zinc" ||
        color === " slate" ||
        color === "stone" ||
        color === "gray" ||
        color === "neutral" ||
        color === "blue") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.secondary, "-8)");
    }
    else if (color === "red" || color === "rose") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.id, "-0)");
    }
    else if (color === "orange" || color === "violet" || color === "emerald" || color === "purple" || color === "indigo" || color === "pink" || color === "fuchsia") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.secondary, "-0)");
    }
    else if (color === "green") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.id, "-9)");
    }
    else if (color === "yellow") {
        return "#422006";
    }
    else {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.secondary, "-8)");
    }
};
exports.getPrimaryContrastColorNight = getPrimaryContrastColorNight;
var getPrimaryLightColorDay = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-1)";
    }
    else {
        return "var(--mantine-color-secondary-1)";
    }
};
exports.getPrimaryLightColorDay = getPrimaryLightColorDay;
var getPrimaryLightColorNight = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-secondary-7)";
    }
    else {
        return "var(--mantine-color-secondary-7)";
    }
};
exports.getPrimaryLightColorNight = getPrimaryLightColorNight;
var getDefaultBorderColorDay = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-2)";
    }
    else {
        return "var(--mantine-color-secondary-2)";
    }
};
exports.getDefaultBorderColorDay = getDefaultBorderColorDay;
var getDefaultBorderColorNight = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-7)";
    }
    else {
        return "var(--mantine-color-secondary-7)";
    }
};
exports.getDefaultBorderColorNight = getDefaultBorderColorNight;
var getShadcnCardClassname = function (color) {
    if (color === "rose" || color === "green") {
        return "globalMantineCardRoot__roseGreen";
    }
    else {
        return "globalMantineCardRoot";
    }
};
exports.getShadcnCardClassname = getShadcnCardClassname;
var getShadcnInputBg = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-secondary-filled)";
    }
    else {
        return "var(--mantine-color-default)";
    }
};
exports.getShadcnInputBg = getShadcnInputBg;
function generateCSSFilledColorVariables(colors, mode) {
    var lightMode = {};
    var darkMode = {};
    colors.forEach(function (_a) {
        var id = _a.id, primaryShade = _a.primaryShade;
        lightMode["--mantine-color-".concat(id, "-filled")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.light, ")");
        darkMode["--mantine-color-".concat(id, "-filled")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.dark, ")");
    });
    if (mode === "light") {
        return lightMode;
    }
    return darkMode;
}
function generateCSSContrastColorVariables(colors, mode) {
    var lightMode = {};
    var darkMode = {};
    colors.forEach(function (_a) {
        var id = _a.id;
        lightMode["--mantine-color-".concat(id, "-contrast")] = (0, exports.getPrimaryContrastColorDay)(id);
        darkMode["--mantine-color-".concat(id, "-contrast")] = (0, exports.getPrimaryContrastColorNight)(id);
    });
    console.log(lightMode);
    console.log(darkMode);
    if (mode === "light") {
        console.log(lightMode);
        return lightMode;
    }
    return darkMode;
}
