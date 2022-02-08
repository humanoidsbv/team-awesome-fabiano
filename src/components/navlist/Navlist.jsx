import * as Styled from './Navlist.styled.js';

const Navlist = () => {
    return (
        <Styled.Container>
        <Styled.MenuList>
            <li><a href="/">Timesheets</a></li>
            <li><a href="/">Team members</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Documents</a></li>
        </Styled.MenuList>
        </Styled.Container>
    );
}

export default Navlist