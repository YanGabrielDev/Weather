import { styled, css, DefaultTheme } from "styled-components";
type KeysThemeProp = {
  [key: string]: (theme: DefaultTheme) => ReturnType<typeof css>;
};

type ContainerProps = {
  color?: "pramaty" | "secondaty";
  fontSize?: "small" | "medium" | "large";
};

const colors: KeysThemeProp = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
};

const fontSizes: KeysThemeProp = {
  small: (theme) => css`
    font-size: ${theme.font?.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font?.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.font?.sizes.large};
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color = "primary", fontSize = "medium" }) => css`
    ${colors[color](theme)};
    ${fontSizes[fontSize](theme)};
  `}
`;
