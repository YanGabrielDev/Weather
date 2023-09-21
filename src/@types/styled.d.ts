import 'styled-components'

declare module 'styled-components'{
 export interface DefaultTheme{
    colors:{
        main: string,
        text: string,
        secondaryMain: string,
        background: string,
        primary: string,
        gray: string
    }
    font?:{
            family:{
                poppins: string
            }
        sizes: {
            small: string,
            medium: string,
            large: string
        }
    }
 }
}