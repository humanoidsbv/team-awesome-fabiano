import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/";
import { TimeEntries } from "../src/components/time-entries/";
import { PageContainer } from "../src/components/page-container/";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { getTimeEntries } from "../src/services/time-entries-api";
import * as Types from "../src/components/time-entries/TimeEntries.types";

export const getServerSideProps = async () => {
  const timeEntries = await getTimeEntries();

  return {
    props: {
      timeEntries,
    },
  };
};

interface HomepageProps {
  timeEntries: Types.TimeEntry[];
}

const Homepage = ({ timeEntries }: HomepageProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <PageContainer>
          <TimeEntries timeEntries={timeEntries} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
