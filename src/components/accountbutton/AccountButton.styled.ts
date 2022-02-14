import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;

  @media screen and (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 20px;
  display: flex;
  height: 40px;
  width: 148px;
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 36px;
  margin-left: auto;
  margin-right: 2px;
  width: 36px;
`;

export const HumanoidsLogo = styled.img`
  align-items: center;
  display: flex;
  height: 10px;
  margin-left: 15px;
  margin-right: auto;
  width: 80px;
`;

export const ArrowDownIcon = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 16px;
`;
