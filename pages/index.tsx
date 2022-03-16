import { ThemeProvider } from "styled-components";
import { gql } from "@apollo/client";
import { Header } from "../src/components/header";
import { TimeEntries } from "../src/components/time-entries";
import { PageContainer } from "../src/components/page-container";
import { theme } from "../styles/theme";
import { StoreProvider } from "../src/components/context-provider/ContextProvider";

import GlobalStyle from "../styles/global";

import * as Types from "../src/components/time-entries/TimeEntries.types";
import client from "../apollo-client";

interface HomepageProps {
  timeEntries: Types.TimeEntryProps[];
  clients: Types.ClientsProps[];
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetTimeEntries {
        allTimeEntries {
          id
          activity
          client
          stopTimestamp
          startTimestamp
        }

        allClients {
          id
          name
        }
      }
    `,
  });

  return {
    props: {
      clients: data.allClients,
      timeEntries: data.allTimeEntries,
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
