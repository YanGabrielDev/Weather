import styled, { css } from "styled-components";

export const CurrentDayContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;
    background-color: ${theme.colors.main};
    color: ${theme.colors.text};
    padding: 1.25rem;
  `}
`;
export const CurrentDayContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 400px;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;

    @media (max-width: 650px) {
      max-width: 430px;
    }
    @media (max-width: 440px) {
      flex-direction: column;
      max-width: 186px;
    }
    `}
`;
export const CurrentDayMain = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    background-color: transparent;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    span.temp {
      font-size: 2rem;
      font-family: ${theme.font?.family.roboto};
      font-weight: 300;
    }

    span.day {
      font-family: ${theme.font?.family.roboto};
      font-weight: 500;
      font-size: 1.75rem;
      text-transform: capitalize;
    }
  `}
`;

export const CurrentDayDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span.datails-label{
        font-family: ${theme.font?.family.poppins};
    }
    span.datails{
        font-family: ${theme.font?.family.roboto};
    }
  `}
`;

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.25rem;
    align-items: center;
  `}
`;

