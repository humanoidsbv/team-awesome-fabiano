import * as Styled from './Header.styled.js';

const Header = () => {
    return (
        <Styled.Container>
            <a href="/">team awesome</a>
            <button></button>
        <Styled.MenuList>
            <li><a href="/">Timesheets</a></li>
            <li><a href="/">Team members</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Documents</a></li>
        </Styled.MenuList>
            <canvas>account login</canvas>
            <button className="nav__accountbutton"></button>
        </Styled.Container>
    );
}

export default Header;