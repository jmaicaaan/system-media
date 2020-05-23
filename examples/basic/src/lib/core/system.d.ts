import { Breakpoints } from '../types';
declare const system: (breakpoints: Breakpoints) => (value: any) => any;
declare const systemWithDefaults: (value: any) => any;
export { systemWithDefaults, system };
