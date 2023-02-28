import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

а {
  text-decoration: none;
  color: inherit;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1 {
font-size: 32px;
}

h2 {
font-size: 24px;
}

h1 , h2 {
line-height: 1.22;
color: ${({ theme }) => theme.colors.secondaryTextColor};
background-color: ${({ theme }) => theme.colors.backgroundAndBorderColor};
text-align: center;
margin-bottom: 20px;
padding: 10px;
text-transform: uppercase;
}

button {
color: ${({ theme }) => theme.colors.buttonTextColor};
background-color: transparent;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
border-radius: 10px;
transition-property: color, background-color, box-shadow;
transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};

:hover, :focus {
  outline: none;
color: ${({ theme }) => theme.colors.secondaryTextColor};
background-color: ${({ theme }) => theme.colors.accentColor};
box-shadow: ${({ theme }) => theme.boxShadow};
}
}
`;
