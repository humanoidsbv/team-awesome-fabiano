import * as Styled from './Header.styled.js';
import CloseIcon from '/Users/fabianovangool/Development/humanoidsbv/team-awesome-fabiano/public/images/close.svg';
import Hamburger from '/Users/fabianovangool/Development/humanoidsbv/team-awesome-fabiano/public/images/hamburger.svg';
import React, { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(!isActive);
    const toggleMenu = isActive ? <CloseIcon /> : <Hamburger />;

    return (
        <Styled.Container>
                <Styled.Logo href="/">
                    team awesome
                </Styled.Logo>
        <Styled.MenuList isActive={isActive}> 
            <li><a href="/">Timesheets</a></li>
            <li><a href="/">Team members</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Documents</a></li>
        </Styled.MenuList>
            <Styled.ToggleButton onClick={handleClick}>
            {toggleMenu}
            </Styled.ToggleButton>
        </Styled.Container>
    );
}

export default Header;