import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin: 20px 20px;
  width: auto;

  @media screen and (${({ theme }) => theme.mobileButton}) {
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    margin: 0px 30px 15px 30px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (${({ theme }) => theme.mobileButton}) {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`;

export const Timesheets = styled.article`
  color: ${({ theme }) => theme.primaryGrey};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const VerticalLine = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.mobileButton}) {
    color: ${({ theme }) => theme.grey700};
    display: flex;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 18px;
  }
`;

export const Entries = styled.article`
  color: ${({ theme }) => theme.grey700};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;
