import { DefaultTheme } from "styled-components";
import { Poppins, Roboto } from "@next/font/google";

export const poppins = Poppins({
    weight: "500",
    style: "normal",
    subsets: ["latin"]
})

export const roboto = Roboto({
    weight: ["300", "500"],
    style: "normal",
    subsets: ["latin"]
})

export const darkTheme: DefaultTheme = {
    colors:{
        main: "#1e1e1e",
        background: "#101112",
        text: "#fff",
        secondaryMain: "#202224",
        primary: "#7dd7ff",
        gray: "#7f7e83"
    },
    font:{
        family:{
            poppins: poppins.style.fontFamily,
            roboto: roboto.style.fontFamily
        },
        sizes: {
            small: "0.875rem",
            medium: "1rem",
            large: "1.5rem"
        }
    }
}