import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      gray100: string,
      gray300: string,
      gray400: string,
      gray600: string,
      gray700: string,
      gray800: string,
      gray900: string,

      primaryText: string,
      
      primary:string,
      secondary:string,

      background:string,
      borderColor: string,
    }
  }
}