import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryWhite};
  display: flex;
  flex-direction: column;
  height: 118px;
  justify-content: space-evenly;
  margin: 0;
  padding: 0 20px;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 30;
  width: 100%;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    height: 70px;
    padding: 0 30px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    margin-bottom: 0;
    padding: 0;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.primaryGrey};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const VerticalLine = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    color: ${({ theme }) => theme.grey700};
    display: flex;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.grey700};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;
