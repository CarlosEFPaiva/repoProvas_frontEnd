import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background-color: #333333;
        color: #FFFFFF;
    }
`;

export default GlobalStyles;
