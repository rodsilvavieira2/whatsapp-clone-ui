/* eslint-disable @typescript-eslint/no-empty-interface */
import '@mui/material/styles'

import { lithTheme } from './theme'

type ThemeSchema = typeof lithTheme;

declare module '@mui/material/styles' {
  interface Theme extends ThemeSchema {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends Partial<ThemeSchema> {}
}
