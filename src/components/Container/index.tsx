import { ReactNode } from "react"
import { MainContainer } from "./styles"

interface ContainerProps{
    children: ReactNode
}
export const Container = ({children}: ContainerProps) => {
    return(
        <MainContainer>{children}</MainContainer>
    )
}