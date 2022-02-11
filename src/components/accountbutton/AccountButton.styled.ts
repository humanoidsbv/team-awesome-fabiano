import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 30px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
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

export const ArrowDownIcon = styled.img`
  display: flex;
  margin-left: 16.42px;
`;
