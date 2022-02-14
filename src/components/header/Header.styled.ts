import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 100vw;

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
  color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  padding: 10px 30px;
  text-decoration: none;
`;

export const MenuList = styled.ul<{ isActive: boolean }>`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  bottom: 0;
  color: ${({ theme }) => theme.backgroundPrimary};
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  left: 0;
  list-style: none;
  margin: 0;
  padding-top: 70px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  li {
    margin: 20px auto 20px auto;
    width: fit-content;
  }

  a {
    color: ${({ theme }) => theme.backgroundPrimary};
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 24px;
    font-weight: 400;
    padding: 13px 20px;
    text-decoration: none;

    :hover {
      background-color: ${({ theme }) => theme.backgroundSecondaryHover};
      border-radius: 2px;
    }

    :active {
      text-decoration: underline;
    }
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    display: flex;
    flex-direction: row;
    padding: 0;
    position: static;
    z-index: 0;

    a {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  height: 70px;
  justify-content: start;
  width: 100vw;
`;
