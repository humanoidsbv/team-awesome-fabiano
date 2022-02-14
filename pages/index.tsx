import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SecondaryHeader } from "../src/components/secondary-header/SecondaryHeader";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <SecondaryHeader />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
