import styled, { css } from "styled-components";

export const WeatherContainer = styled.div`
${({theme}) =>css`
display: flex;
gap: 1rem;
flex-direction: column;

`}
`
export const LoaderContainer = styled.div`
${({theme}) =>css`
display: flex;
width: 100%;
height: 50vh;
justify-content: center;
align-items: center;
`}
`