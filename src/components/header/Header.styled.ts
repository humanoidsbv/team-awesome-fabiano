import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.blue1};
  display: flex;
  height: 70px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 50;

  @media screen and (${({ theme }) => theme.desktop}) {
    display: flex;
    justify-content: start;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  padding: 10px 30px;

  @media screen and (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.grey1};
  display: flex;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  padding: 10px 30px;
  text-decoration: none;
`;

export const MenuList = styled.ul<{ isActive: boolean }>`
  background-color: ${({ theme }) => theme.blue1};
  bottom: 0;
  color: ${({ theme }) => theme.grey1};
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  left: 0;
  list-style: none;
  margin-top: 70px;
  position: fixed;
  right: 0;
  top: 0;

  li {
    margin: 20px auto 20px auto;
    width: fit-content;
  }

  a {
    color: ${({ theme }) => theme.grey1};
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 24px;
    padding: 13px 20px;
    text-decoration: none;

    :hover {
      background-color: ${({ theme }) => theme.blue2};
      border-radius: 2px;
    }

    :active {
      text-decoration: underline;
    }
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    padding: 0;
    position: static;

    a {
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.blue1};
  display: flex;
  height: 70px;
  justify-content: start;
  width: 100vw;
`;
