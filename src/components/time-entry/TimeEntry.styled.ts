import styled, { css, ThemeConsumer } from "styled-components";

export const TimeEntry = styled.div`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey3};
  display: flex;
  height: 82px;
`;

export const LocationHoursWrapper = styled.div`
  align-items: center;
  border-left: 4px solid ${({ theme }) => theme.blue1};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0px 16px;
  width: 100%;
`;

export const WorkLocation = styled.p`
  color: ${({ theme }) => theme.grey6};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const TotalWorkHours = styled.div`
  align-items: flex-end;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const WorkHours = styled.p`
  color: ${({ theme }) => theme.grey6};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const WorkTime = styled.p`
  color: ${({ theme }) => theme.grey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;

export const TrashButton = styled.button`
  background-color: transparent;
  border: 1px dashed transparent;
  cursor: pointer;
  fill: ${({ theme }) => theme.grey5};
  padding: 0px 15px 0px 13px;

  :hover {
    border-color: ${({ theme }) => theme.grey4};

    svg {
      fill: ${({ theme }) => theme.red1};
    }
  }
`;
