import { ThemeProvider } from "styled-components";
import { Header } from "../../src/components/header";
import { MemberEntries } from "../../src/components/member-entries";
import { PageContainer } from "../../src/components/page-container";
import { getMemberEntries } from "../../src/services/team-members-api";

import GlobalStyle from "../../styles/global";

import * as Types from "../../src/components/member-entries/MemberEntries.types";

interface TeamMembersProps {
  teamMembers: Types.MemberEntryProps[];
}

export const getServerSideProps = async () => {
  const teamMembers = await getMemberEntries();

  return {
    props: {
      teamMembers,
    },
  };
};

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageContainer>
        <MemberEntries {...{ teamMembers }} />
      </PageContainer>
    </>
  );
};

export default TeamMembers;
