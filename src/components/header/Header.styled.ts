import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #4f88ef;
  display: flex;
  height: 70px;
  width: 100vw;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: start;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: auto;
  padding: 10px 30px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.a`
  color: #ffffff;
  display: flex;
  font-family: bello;
  font-size: 26px;
  padding: 10px 30px;
  text-decoration: none;
`;

export const MenuList = styled.ul<{ isActive: boolean }>`
  background-color: #4f88ef;
  bottom: 0;
  color: #ffffff;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 70px 0 0 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  li {
    margin: 20px auto 20px auto;
    width: fit-content;
  }

  a {
    color: #ffffff;
    font-family: proxima nova;
    font-size: 24px;
    font-weight: 400;
    padding: 13px 20px;
    text-decoration: none;

    :hover {
      background-color: #1166a5;
      border-radius: 2px;
    }

    :active {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1024px) {
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
  background-color: #4f88ef;
  display: flex;
  height: 70px;
  justify-content: start;
  width: 100vw;
`;
