import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  margin: 188px auto 0 auto;
  max-width: 1024px;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    margin-top: 140px;
  }
`;
