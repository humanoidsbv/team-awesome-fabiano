import { Header } from "../../src/components/header";
import { MemberEntries } from "../../src/components/member-entries";
import { PageContainer } from "../../src/components/page-container";
import { getMemberEntries } from "../../src/services/team-members-api";

import * as Types from "../../src/components/member-entries/MemberEntries.types";
import { StoreProvider } from "../../src/components/context-provider";

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
      <StoreProvider>
        <Header />
        <PageContainer>
          <MemberEntries {...{ teamMembers }} />
        </PageContainer>
      </StoreProvider>
    </>
  );
};

export default TeamMembers;
