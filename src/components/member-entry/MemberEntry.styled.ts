import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey3};
  display: flex;
  height: 162px;
  margin: 20px 15px 0 15px;

  @media screen and (${({ theme }) => theme.desktop}) {
    height: 82px;
  }
`;

export const Wrapper = styled.div`
  border-left: 4px solid ${({ theme }) => theme.blue1};
  border-radius: 3px;
  width: 100%;

  @media screen and (${({ theme }) => theme.desktop}) {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
  }
`;

export const AvatarContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.grey3};
  display: flex;
  height: 50%;
  padding-left: 16px;

  @media screen and (${({ theme }) => theme.desktop}) {
    border-bottom: none;
    height: 100%;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const AvatarNameRole = styled.div`
  gap: 2px;
  padding-left: 20px;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.grey6};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.grey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;

export const AssignmentContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  padding-left: 16px;

  @media screen and (${({ theme }) => theme.desktop}) {
    height: 100%;
  }
`;

export const Client = styled.div`
  gap: 2px;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
  }
`;

export const Date = styled.div`
  gap: 2px;
  padding-left: 40px;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
  }
`;
