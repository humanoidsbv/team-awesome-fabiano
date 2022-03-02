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
  padding-left: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.grey3};
  height: 50%;
  display: flex;
  align-items: center;

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
  padding-left: 20px;
  gap: 2px;
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
  padding-left: 16px;
  height: 50%;
  display: flex;
  align-items: center;

  @media screen and (${({ theme }) => theme.desktop}) {
    height: 100%;
  }
`;

export const Client = styled.div`
  gap: 2px;
`;

export const Date = styled.div`
  padding-left: 40px;
  gap: 2px;
`;
