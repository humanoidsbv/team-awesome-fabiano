import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey3};
  display: flex;
  height: 160px;
`;

export const Wrapper = styled.div`
  border-left: 4px solid ${({ theme }) => theme.blue1};
  border-radius: 3px;
  width: 100%;
`;

export const Avatar = styled.div`
  padding-left: 16px;
  height: 50%;
  display: flex;
  align-items: center;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
