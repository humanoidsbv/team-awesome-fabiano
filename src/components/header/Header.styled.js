import styled from 'styled-components';

export const Container = styled.div`
    background-color: #4F88EF;
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: start;
    }
`;

export const ToggleButton = styled.button`
        border: none;
        background-color: transparent;
        display: flex;
        padding: 10px 30px;
        margin-left: auto;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

export const Logo = styled.a`
        display: flex;
        color: #FFFFFF;
        text-decoration: none;
        font-family: bello;
        font-size: 26px;
        padding: 10px 30px;
`;

export const MenuList = styled.ul`
    background-color:#4F88EF;
    display: ${props => props.isActive ? "flex" : "none"};
    color: #FFFFFF;
    list-style: none;
    flex-direction: column;
    padding: 70px 0 0 0;
    margin: 0;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
    li {
        margin: 20px auto 20px auto;
        width: fit-content;
    }

   a {
    text-decoration: none;
    color: #FFFFFF;
    font-family: proxima nova;
    font-size: 24px;
    font-weight: 400;
    padding: 13px 20px;
   }

   a:hover {
    background-color: #1166A5;
    border-radius: 2px;
   }

   a:active {
    text-decoration: underline;
   }

   @media screen and (min-width: 1024px) {
    flex-direction: row;
    position: static;
    display: flex;
    padding: 0;
    z-index: 0;
    
    a {
        font-size: 14px;
        font-weight: 600;
    }
   }
`;

