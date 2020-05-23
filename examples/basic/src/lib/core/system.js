"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.system = exports.systemWithDefaults = void 0;
var react_1 = require("react");
var pick_1 = require("./pick");
var Defaults = {
    Breakpoints: ['40em', '52em', '64em'],
};
var system = function (breakpoints) { return function (value) {
    if (!Array.isArray(breakpoints)) {
        throw new Error('Breakpoints should be an array of media');
    }
    var getInitialData = react_1.useCallback(function (value) {
        return pick_1.pick(breakpoints)(value);
    }, []);
    var _a = react_1.useState(getInitialData(value)), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        getInitialData(value);
    }, [getInitialData, value]);
    react_1.useEffect(function () {
        var handleResize = function () {
            var newData = pick_1.pick(breakpoints)(value);
            setData(newData);
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [value]);
    return data;
}; };
exports.system = system;
var systemWithDefaults = system(Defaults.Breakpoints);
exports.systemWithDefaults = systemWithDefaults;
