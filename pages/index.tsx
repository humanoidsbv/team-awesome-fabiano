import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/";
import { SecondaryHeader } from "../src/components/secondary-header/";
import { TimeEntries } from "../src/components/time-entries/";
import { PageContainer } from "../src/components/page-container/";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <SecondaryHeader />
        <PageContainer>
          <TimeEntries />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
