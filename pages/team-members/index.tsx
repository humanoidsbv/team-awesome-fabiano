import { ThemeProvider } from "styled-components";
import { Header } from "../../src/components/header";
import { MemberEntries } from "../../src/components/member-entries";
import { PageContainer } from "../../src/components/page-container";

import GlobalStyle from "../../styles/global";

const TeamMembers = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <PageContainer>
          <MemberEntries />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default TeamMembers;
