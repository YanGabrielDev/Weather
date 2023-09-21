import { Search } from "lucide-react"
import { InputContainer, InputText } from "./styles"
import { ComponentProps, HTMLInputTypeAttribute } from "react"

interface TextFieldProps extends ComponentProps<'input'>{
    
}
export const TextField = ({...props}: TextFieldProps) => {
    return(
        <InputContainer>
            <Search/>
            <InputText {...props}/>
        </InputContainer>
    )
}