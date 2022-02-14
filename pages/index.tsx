import { ThemeProvider } from "styled-components";
import { Header } from "../src/components/header/Header";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { SecondaryHeader } from "../src/components/secondaryHeader/SecondaryHeader";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <SecondaryHeader />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
