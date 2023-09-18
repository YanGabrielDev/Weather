import { DefaultTheme } from "styled-components";
import { Poppins } from "@next/font/google";

export const poppins = Poppins({
    weight: "500",
    style: "normal",
    subsets: ["latin"]

})

export const darkTheme: DefaultTheme = {
    colors:{
        main: "#101112",
        background: "#101112",
        text: "#fff",
        secondaryMain: "#202224",
        primary: "#7dd7ff",
        gray: "#b5b5b5ab"
    },
    font:{
        family:{
            poppins: poppins.style.fontFamily
        },
        sizes: {
            small: "0.875rem",
            medium: "1rem",
            large: "1.5rem"
        }
    }
}