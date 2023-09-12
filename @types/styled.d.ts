import 'styled-components'

declare module 'styled-components'{
 export interface DefaultTheme{
    colors:{
        main: string,
        text: string,
        secondaryMain: string,
        primary: string,
    }
    font?:{
        sizes: {
            small: "0.5rem",
            medium: "1rem",
            large: "1.5rem"
        }
    }
 }
}