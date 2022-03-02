import styled from "styled-components";

export const Container = styled.div`
  @media screen and (${({ theme }) => theme.desktop}) {
    background: rgba(75, 84, 100, 0.8);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 80;
  }
`;

export const MemberModal = styled.div`
  background-color: ${({ theme }) => theme.grey1};
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 90;

  @media screen and (${({ theme }) => theme.desktop}) {
    left: 50%;
    max-height: 436px;
    max-width: 560px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.grey5};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  justify-content: space-between;
  padding: 33px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    font-size: 24px;
    margin-bottom: 20px;
    padding: 30px 30px 0 30px;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
