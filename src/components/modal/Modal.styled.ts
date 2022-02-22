import styled from "styled-components";

export const Container = styled.div`
  @media screen and (${({ theme }) => theme.desktop}) {
    background: rgba(75, 84, 100, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 80;
  }
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 90;
  position: fixed;
  top: 0;

  @media screen and (${({ theme }) => theme.desktop}) {
    max-width: 560px;
    max-height: 436px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Entry = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  color: ${({ theme }) => theme.grey700};
  padding: 33px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    font-size: 24px;
    padding: 30px 30px 0 30px;
    margin-bottom: 20px;
  }
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

export const ClientActivity = styled.p`
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.grey700};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    padding: 20px 30px 0 30px;
  }
`;

export const Date = styled.p`
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.grey700};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    padding: 20px 0px 0 30px;
  }
`;

export const InputBig = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  margin-top: 10px;
  cursor: text;
  padding: 13px 15px;
`;

export const FromTo = styled.p`
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.grey700};
  font-size: 14px;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputSmall = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  margin-top: 10px;
  width: 100px;
  cursor: text;
  padding: 13px 15px;
`;

export const FromToTotal = styled.div`
  display: flex;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: auto 10px 20px 10px;

  @media screen and (${({ theme }) => theme.desktop}) {
    margin: auto 30px 30px 30px;
  }
`;

export const DateFromTo = styled.div`
  @media screen and (${({ theme }) => theme.desktop}) {
    display: flex;
  }
`;
