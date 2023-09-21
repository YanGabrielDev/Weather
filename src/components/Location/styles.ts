import { styled, css } from "styled-components";

export const LocationContainer = styled.div`
${({theme}) =>css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: ${theme.font?.family.poppins};
  font-weight: 500;
  font-size: ${theme.font?.sizes.small};

  svg{
    color: ${theme.colors.text}
  }
  
`}
`
export const LocationDetails = styled.div`
${({theme}) => css`

span.city{
   color: ${theme.colors.text}
  }

 span.country{
    color: ${theme.colors.gray};
  }
`}`