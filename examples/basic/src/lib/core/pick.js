"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
var createMediaQuery_1 = require("../utils/createMediaQuery");
exports.pick = function (breakpoints) { return function (value) {
    var defaultValue = Array.isArray(value) ? value[0] : value;
    var mapToBreakpointBaseStructure = function (breakpoint, index) { return ({
        breakpoint: breakpoint,
        index: index,
    }); };
    var mapWithMatchMedia = function (_a) {
        var breakpoint = _a.breakpoint, index = _a.index;
        var mediaQuery = createMediaQuery_1.createMediaQuery(breakpoint);
        var _b = window.matchMedia(mediaQuery), media = _b.media, matches = _b.matches;
        return {
            breakpoint: breakpoint,
            index: index,
            media: media,
            matches: matches,
        };
    };
    var pickOnlyMatchingQueries = function (_a) {
        var matches = _a.matches;
        return matches;
    };
    var mediaQueryResult = __spreadArrays(breakpoints).map(mapToBreakpointBaseStructure)
        .map(mapWithMatchMedia)
        .filter(pickOnlyMatchingQueries);
    if (!mediaQueryResult.length) {
        // The default value is always the first item in the array
        // or the value itself if it's not an array
        return defaultValue;
    }
    // Always get the nearest result which is the last item in the array
    var lastMatchedQuery = __spreadArrays(mediaQueryResult).pop();
    // The idea here is to also try to pick the value
    // from its "index" from right to left
    // until we fallback to default value
    if (Array.isArray(value)) {
        if (!lastMatchedQuery) {
            return value.slice(0).pop();
        }
        return (
        // Added + 1 to skip picking the "base" value which is the first item in the array
        value[lastMatchedQuery.index + 1] ||
            // If above fails, try to pick the specific index
            value[lastMatchedQuery.index] ||
            // If it still fails, let's just get the last item from the array
            value.slice(0).pop());
    }
    else {
        return value || defaultValue;
    }
}; };
