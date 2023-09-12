import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button">{
    children: ReactNode,
    rounded?: string
}
export const Button = ({children, rounded,...rest}: ButtonProps) => {
    return(
        <button {...rest}>{children}</button>
    )
}