/* eslint-disable @typescript-eslint/no-empty-interface */
import '@mui/material/styles'

import { LithTheme } from './theme'

type ThemeSchema = typeof LithTheme;

declare module '@mui/material/styles' {
  interface Theme extends ThemeSchema {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends Partial<ThemeSchema> {}
}
