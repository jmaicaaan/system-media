import { Breakpoint } from '../types';

export const createMediaQuery = (breakpoint: Breakpoint) =>
  `(min-width: ${breakpoint})`;
