import { styled, css } from "styled-components";

export const LocationContainer = styled.div`
${({theme}) =>css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: ${theme.font?.family.poppins};
  font-weight: 500;
  font-size: ${theme.font?.sizes.small};

  span.state{
    color: #303030;
  }
`}
`
export const LocationDetails = styled.div`
${({theme}) => css`
 span.state{
    color: ${theme.colors.gray};
  }
`}`