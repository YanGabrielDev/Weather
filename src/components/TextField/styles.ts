import { css, styled } from "styled-components";

export const InputContainer = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.main};
    display: flex;
    width: 100%;
    max-width: 400px;
    gap: 0.5rem;
    border-radius: 1.5rem;
    align-items: center;
    svg {
      color: ${theme.colors.text};
    }
  `}
`;

export const InputText = styled.input`
  ${({ theme }) => css`
    border: none;
    color: ${theme.colors.text};
    outline: none;
    background-color: transparent;
    font-family: ${theme.font?.family.roboto};
    font-weight: 300;
    font-size: ${theme.font?.sizes.medium};
    width: 100%;
  `}
`;
