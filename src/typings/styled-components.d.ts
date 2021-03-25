import theme from 'style/theme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Defaulttheme extends Theme {}
}
