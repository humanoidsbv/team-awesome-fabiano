import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: "Proxima Nova";
        src: url("/fonts/proxima-nova/proxima-nova-regular.ttf");
    }

    @font-face {
        font-family: "Bello Script";
        src: url("/fonts/bello-script.ttf");
    }
`;

export default GlobalStyle;
