import { styled, css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";
type KeysThemeProp = {
  [key: string]: (theme?: DefaultTheme) => ReturnType<typeof css>;
};


const colors: KeysThemeProp = {
  primary: (theme?: DefaultTheme) => css`
    background-color: ${theme?.colors.primary};
  `,
};

const fontSizes: KeysThemeProp = {
  small: (theme) => css`
    font-size: ${theme?.font?.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme?.font?.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme?.font?.sizes.large};
  `,
};

const buttonRounded: KeysThemeProp = {
  full: () => css`
    border-radius: 50%;
  `,
  medium: () => css`
    font-size: "0.25rem";
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, color = "primary", fontSize = "medium", rounded = "medium" }) => css`
   border: none ;
   color: ${theme.colors.text};
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
  ${colors[color](theme)};
    ${fontSizes[fontSize](theme)};
    ${buttonRounded[rounded]()};

    svg{
        width: 22px;
        height: 30px;
    }
  `}
`;
