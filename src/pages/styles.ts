import styled, { css } from "styled-components";

export const CurrentDayContainer = styled.div`
${({theme}) =>css`
width: 100%;
display: flex;
padding: 1.25rem;
flex-direction: column;
border-radius: 8px;
background-color: ${theme.colors.primary};
`}
`