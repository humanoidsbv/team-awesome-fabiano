import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  padding: 0px 10px;
`;

export const DateWorkTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 20px 0;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.grey700};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  width: auto;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    font-size: 24px;
  }
`;
