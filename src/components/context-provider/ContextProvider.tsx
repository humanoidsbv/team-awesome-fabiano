import React, { createContext, useState } from "react";

import * as Types from "../time-entries/TimeEntries.types";
import * as TeamMemberTypes from "../member-entries/MemberEntries.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntryProps[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntryProps[]>>,
  ];
  teamMembers: [
    teamMembers: TeamMemberTypes.MemberEntryProps[],
    setTeamMembers: React.Dispatch<React.SetStateAction<TeamMemberTypes.MemberEntryProps[]>>,
  ];
  clients: [
    clients: Types.ClientsProps[],
    setClients: React.Dispatch<React.SetStateAction<Types.ClientsProps[]>>,
  ];
}

export const StoreContext = createContext({} as StoreContextProps);

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    clients: useState<Types.ClientsProps[]>([]),
    teamMembers: useState<TeamMemberTypes.MemberEntryProps[]>([]),
    timeEntries: useState<Types.TimeEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
