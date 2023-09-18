import { DefaultTheme } from "styled-components";
import { Poppins } from "@next/font/google";

export const poppins = Poppins({
    weight: "500",
    style: "normal",
    subsets: ["latin"]
})
export const lightTheme: DefaultTheme = {
    colors:{
        main: "#fff",
        background: "#f2f3f4",
        text: "#1e1e1f",
        secondaryMain: "#d4d4d4",
        primary: "#5193fd",
        gray: "#b1b0b0fa"
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