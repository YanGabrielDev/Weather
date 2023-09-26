import styled, {css} from 'styled-components'


export const ForecastContainer = styled.div`
${({theme}) =>css`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-auto-rows: minmax(50px, auto);
gap: 1rem;

@media (max-width: 980px) {
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(50px, auto);
gap: 4rem;
}

@media (max-width: 600px) {
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: minmax(50px, auto);
gap: 4rem;
}
`}
`
export const ForecastDetails = styled.div`
${({theme}) =>css`
padding: 1.25rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0.5rem;
color: ${theme.colors.text};
background-color: ${theme.colors.main};
color: ${theme.colors.text};
`}
`