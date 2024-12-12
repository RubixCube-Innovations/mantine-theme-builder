"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadcnInputBg = exports.getShadcnCardClassname = exports.getDefaultBorderColorNight = exports.getDefaultBorderColorDay = exports.getSecondaryLightColorNight = exports.getSecondaryLightColorDay = exports.getPrimaryContrastColorNight = exports.getPrimaryContrastColorDay = void 0;
exports.generateShadcnCSSFilledColorVariables = generateShadcnCSSFilledColorVariables;
exports.generateShadcnCSSLightColorVariables = generateShadcnCSSLightColorVariables;
exports.generateShadcnCSSOutlineColorVariables = generateShadcnCSSOutlineColorVariables;
exports.generateShadcnCSSContrastColorVariables = generateShadcnCSSContrastColorVariables;
var core_1 = require("@mantine/core");
var colors_1 = require("./colors.cjs");
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
        color === "neutral") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.secondary, "-8)");
    }
    else if (color === "red" || color === "rose") {
        return "var(--mantine-color-".concat(colorObj === null || colorObj === void 0 ? void 0 : colorObj.id, "-0)");
    }
    else if (color === "orange" ||
        color === "violet" ||
        color === "emerald" ||
        color === "purple" ||
        color === "indigo" ||
        color === "pink" ||
        color === "fuchsia" ||
        color === "blue") {
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
var getSecondaryLightColorDay = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-zinc-1)";
    }
    else {
        return "var(--mantine-color-secondary-1)";
    }
};
exports.getSecondaryLightColorDay = getSecondaryLightColorDay;
var getSecondaryLightColorNight = function (color) {
    if (color === "rose" || color === "green") {
        return "var(--mantine-color-secondary-7)";
    }
    else {
        return "var(--mantine-color-secondary-7)";
    }
};
exports.getSecondaryLightColorNight = getSecondaryLightColorNight;
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
function generateShadcnCSSFilledColorVariables(mode, isGeneration) {
    if (isGeneration === void 0) { isGeneration = false; }
    var lightMode = {};
    var darkMode = {};
    colors_1.SHADCN_DEFAULT_COLORS.forEach(function (_a) {
        var id = _a.id, primaryShade = _a.primaryShade;
        lightMode["--mantine-color-".concat(id, "-filled")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.light, ")");
        lightMode["--mantine-color-".concat(id, "-filled-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-").concat(primaryShade.light, ")\", 0.9)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-").concat(primaryShade.light, ")"), 0.9);
        darkMode["--mantine-color-".concat(id, "-filled")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.dark, ")");
        darkMode["--mantine-color-".concat(id, "-filled-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-").concat(primaryShade.dark, ")\", 0.9)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-").concat(primaryShade.dark, ")"), 0.9);
    });
    if (mode === "light") {
        return lightMode;
    }
    return darkMode;
}
function generateShadcnCSSLightColorVariables(mode, isGeneration) {
    if (isGeneration === void 0) { isGeneration = false; }
    var lightMode = {};
    var darkMode = {};
    colors_1.SHADCN_DEFAULT_COLORS.forEach(function (_a) {
        var id = _a.id;
        lightMode["--mantine-color-".concat(id, "-light")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-4)\", 0.1)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-4)"), 0.1);
        lightMode["--mantine-color-".concat(id, "-light-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-light)\", 0.8)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-light)"), 0.8);
        lightMode["--mantine-color-".concat(id, "-light-color")] = "var(--mantine-color-".concat(id, "-6)");
        darkMode["--mantine-color-".concat(id, "-light")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-4)\", 0.15)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-4)"), 0.15);
        darkMode["--mantine-color-".concat(id, "-light-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-light)\", 0.8)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-light)"), 0.8);
        darkMode["--mantine-color-".concat(id, "-light-color")] = "var(--mantine-color-".concat(id, "-3)");
    });
    if (mode === "light") {
        return lightMode;
    }
    return darkMode;
}
function generateShadcnCSSOutlineColorVariables(mode, isGeneration) {
    if (isGeneration === void 0) { isGeneration = false; }
    var lightMode = {};
    var darkMode = {};
    colors_1.SHADCN_DEFAULT_COLORS.forEach(function (_a) {
        var id = _a.id, primaryShade = _a.primaryShade;
        lightMode["--mantine-color-".concat(id, "-outline")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.light, ")");
        lightMode["--mantine-color-".concat(id, "-outline-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-4)\", 0.1)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-4)"), 0.1);
        darkMode["--mantine-color-".concat(id, "-outline")] = "var(--mantine-color-".concat(id, "-").concat(primaryShade.dark, ")");
        darkMode["--mantine-color-".concat(id, "-outline-hover")] = isGeneration
            ? "{alpha(\"var(--mantine-color-".concat(id, "-4)\", 0.15)}")
            : (0, core_1.alpha)("var(--mantine-color-".concat(id, "-4)"), 0.15);
    });
    if (mode === "light") {
        return lightMode;
    }
    return darkMode;
}
function generateShadcnCSSContrastColorVariables(mode) {
    var lightMode = {};
    var darkMode = {};
    colors_1.SHADCN_DEFAULT_COLORS.forEach(function (_a) {
        var id = _a.id;
        lightMode["--mantine-color-".concat(id, "-contrast")] = (0, exports.getPrimaryContrastColorDay)(id);
        darkMode["--mantine-color-".concat(id, "-contrast")] = (0, exports.getPrimaryContrastColorNight)(id);
    });
    if (mode === "light") {
        return lightMode;
    }
    return darkMode;
}
