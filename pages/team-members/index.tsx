import { gql } from "@apollo/client";
import { Header } from "../../src/components/header";
import { MemberEntries } from "../../src/components/member-entries";
import { PageContainer } from "../../src/components/page-container";

import * as Types from "../../src/components/member-entries/MemberEntries.types";
import { StoreProvider } from "../../src/components/context-provider";

import { client } from "../../apollo-client";

interface TeamMembersProps {
  teamMembers: Types.MemberEntryProps[];
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetTeamMembers {
        allTeamMembers {
          client
          emailAddress
          firstName
          id
          label
          lastName
          role
          startingDate
        }
      }
    `,
  });

  return {
    props: {
      teamMembers: data.allTeamMembers,
    },
  };
};

const TeamMembers = ({ teamMembers }: TeamMembersProps) => (
  <StoreProvider>
    <Header />
    <PageContainer>
      <MemberEntries {...{ teamMembers }} />
    </PageContainer>
  </StoreProvider>
);

export default TeamMembers;
