import { useState } from "react";
import Link from "next/link";
import * as Styled from "./Header.styled";

import CloseIcon from "../../../public/icons/close.svg";
import HamburgerIcon from "../../../public/icons/hamburger.svg";

import { AccountButton } from "../accountbutton";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Logo href="/">team awesome</Styled.Logo>
        <Styled.MenuList data-cy="menulist" {...{ isActive }}>
          <li>
            <a href="/">Timesheets</a>
          </li>
          <li>
            <Link href="/team-members">
              <a href="/team-members">Team members</a>
            </Link>
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
        <Styled.ToggleButton data-cy="toggle" onClick={handleClick}>
          {isActive ? <CloseIcon /> : <HamburgerIcon />}
        </Styled.ToggleButton>
      </Styled.Wrapper>
      <AccountButton />
    </Styled.Container>
  );
};
