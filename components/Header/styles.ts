import { styled,css } from 'styled-components'

export const Container = styled.header`
${({theme}) => css`
background-color: ${theme.colors.main};
display: flex;
align-items: center;
padding: 1rem;

`}
`