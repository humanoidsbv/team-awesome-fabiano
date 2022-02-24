import styled from "styled-components";

export const Container = styled.div`
  @media screen and (${({ theme }) => theme.desktop}) {
    background: rgba(75, 84, 100, 0.8);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 80;
  }
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
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

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.grey700};
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

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

export const ClientActivity = styled.p`
  color: ${({ theme }) => theme.grey700};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  padding: 20px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    padding: 20px 30px 0 30px;
  }
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.grey700};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  padding: 20px 20px 0 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    padding: 20px 0px 0 30px;
  }
`;

export const InputBig = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  cursor: text;
  height: 40px;
  margin-top: 10px;
  padding: 13px 15px;

  :invalid {
    border: 1px solid ${({ theme }) => theme.primaryRed};
  }
`;

export const InputDate = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  cursor: text;
  height: 40px;
  margin-top: 10px;
  padding: 13px 15px;
  width: 100%;

  @media screen and (${({ theme }) => theme.desktop}) {
    width: 200px;
  }

  :invalid {
    border: 1px solid ${({ theme }) => theme.primaryRed};
  }
`;

export const FromTo = styled.p`
  color: ${({ theme }) => theme.grey700};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  padding-left: 20px;
  padding-top: 20px;
`;

export const InputSmall = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  cursor: text;
  height: 40px;
  margin-top: 10px;
  padding: 13px 15px;
  width: 100px;

  @media screen and (${({ theme }) => theme.desktop}) {
    width: 80px;
  }

  :invalid {
    border: 1px solid ${({ theme }) => theme.primaryRed};
  }
`;

export const FromToTotal = styled.div`
  display: flex;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
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

export const SumWorkTime = styled.div`
  color: ${({ theme }) => theme.grey700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 24px;
  padding-top: 18px;
`;
