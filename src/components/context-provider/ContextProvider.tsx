import React, { createContext, useState } from "react";

import * as Types from "../time-entries/TimeEntries.types";
import * as TeamMemberTypes from "../member-entries/MemberEntries.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntryProps[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntryProps[]>>,
    teamMembers: TeamMemberTypes.MemberEntryProps[],
    setTeamMembers: React.Dispatch<React.SetStateAction<TeamMemberTypes.MemberEntryProps[]>>,
  ];
}

export const StoreContext = createContext({} as StoreContextProps);

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    timeEntries: useState<Types.TimeEntryProps[]>([]),
    teamMembers: useState<TeamMemberTypes.MemberEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
