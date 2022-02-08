import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4F88EF;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: proxima nova;
    font-size: 24px;
    font-weight: 400;
    height: calc(100vh - 70px);
    list-style-type: none;
    text-align: center;
    text-decoration: none;
    padding: 13px 20px;
    margin: 0 auto 10px auto;
`;

export const MenuList = styled.ul`
   list-style: none;

   a {
     text-decoration: none;
   }
`;