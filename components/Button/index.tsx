import { ComponentProps, ReactNode } from "react"
import { Container } from "./styles"

export interface ButtonProps extends ComponentProps<"button">{
    children: ReactNode,
    color?: "primary" | "secondaty";
    fontSize?: "small" | "medium" | "large";
    rounded?: "full" | "medium"
}
export const Button = ({children, color, fontSize,rounded,...rest}: ButtonProps) => {
    return(
        <Container color={color} fontSize={fontSize}  rounded={rounded} {...rest}>{children}</Container>
    )
}