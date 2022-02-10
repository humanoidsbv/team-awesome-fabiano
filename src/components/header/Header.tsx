import * as Styled from "./Header.styled";
import CloseIcon from "../../../public/images/close.svg";
import Hamburger from "../../../public/images/hamburger.svg";
import React, { useState } from "react";
import { AccountButton } from "../accountbutton/AccountButton";

export const Header = (): React.ReactElement => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <Styled.Container>
      <Styled.Logo href="/">team awesome</Styled.Logo>
      <Styled.MenuList isActive={isActive}>
        <li>
          <a href="/">Timesheets</a>
        </li>
        <li>
          <a href="/">Team members</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Clients</a>
        </li>
        <li>
          <a href="/">Documents</a>
        </li>
      </Styled.MenuList>
      <Styled.ToggleButton onClick={handleClick}>
        {isActive ? <CloseIcon /> : <Hamburger />}
      </Styled.ToggleButton>
      <Styled.Accountbutton>
        <AccountButton />
      </Styled.Accountbutton>
    </Styled.Container>
  );
};
