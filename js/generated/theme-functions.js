"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadcnInputBg = exports.getShadcnCardClassname = exports.getDefaultBorderColorNight = exports.getDefaultBorderColorDay = exports.getPrimaryLightColorNight = exports.getPrimaryLightColorDay = exports.getPrimaryContrastColorNight = exports.getPrimaryContrastColorDay = void 0;
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
        return "var(--mantine-color-secondary-0)";
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
        return "var(--mantine-color-secondary-8)";
    }
    else if (color === "red" || color === "rose") {
        return "var(--mantine-primary-color-0)";
    }
    else if (color === "orange" || color === "violet") {
        return "var(--mantine-color-secondary-0)";
    }
    else if (color === "green") {
        return "var(--mantine-primary-color-9)";
    }
    else if (color === "yellow") {
        return "#422006";
    }
    else {
        return "var(--mantine-color-secondary-8)";
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
