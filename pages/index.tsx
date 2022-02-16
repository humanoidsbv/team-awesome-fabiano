import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SecondaryHeader } from "../src/components/secondary-header/SecondaryHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import { PageContainer } from "../src/components/page-container/PageContainer";

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
