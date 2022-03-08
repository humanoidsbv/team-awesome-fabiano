import { ThemeProvider } from "styled-components";
import { Header } from "../src/components/header/";
import { TimeEntries } from "../src/components/time-entries/";
import { PageContainer } from "../src/components/page-container/";
import { theme } from "../styles/theme";
import { getTimeEntries, getClients } from "../src/services/time-entries-api";
import { StoreProvider } from "../src/components/context-provider/ContextProvider";

import GlobalStyle from "../styles/global";

import * as Types from "../src/components/time-entries/TimeEntries.types";

interface HomepageProps {
  timeEntries: Types.TimeEntryProps[];
  clients: Types.ClientsProps[];
}

export const getServerSideProps = async () => {
  const timeEntries = await getTimeEntries();
  const clients = await getClients();

  return {
    props: {
      clients,
      timeEntries,
    },
  };
};

const Homepage = ({ clients, timeEntries }: HomepageProps) => {
  return (
    <>
      <StoreProvider>
        <GlobalStyle />
        <ThemeProvider {...{ theme }}>
          <Header />
          <PageContainer>
            <TimeEntries {...{ clients, timeEntries }} />
          </PageContainer>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default Homepage;
