import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
      background-color: ${theme.grey2};
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
