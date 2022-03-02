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
    max-width: 560px;
    top: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.grey5};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  justify-content: space-between;
  padding: 33px 25px 0 20px;

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

export const AvatarWrapper = styled.div`
  color: ${({ theme }) => theme.grey6};
  display: flex;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  gap: 10px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export const InputFields = styled.div`
  margin-top: 20px;
`;

export const FullName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  gap: 20px;
`;

export const InputName = styled.div`
  color: ${({ theme }) => theme.grey5};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  width: 100%;
  margin-top: 20px;
`;

export const InputRegular = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  cursor: text;
  height: 40px;
  margin-top: 10px;
  padding: 13px 15px;
`;

export const InputBig = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey2};
  cursor: text;
  height: 80px;
  margin-top: 10px;
  padding: 13px 15px;

  @media screen and (${({ theme }) => theme.desktop}) {
    height: 70px;
  }
`;

export const MiddleFields = styled.div`
  padding: 0 20px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin: auto 20px 20px 20px;

  @media screen and (${({ theme }) => theme.desktop}) {
    margin: 40px 30px 30px 30px;
  }
`;
