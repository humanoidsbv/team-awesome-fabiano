import React, { createContext, useState } from "react";

import * as Types from "../time-entries/TimeEntries.types";
import * as Typesss from "../member-entries/MemberEntries.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntryProps[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntryProps[]>>,
    teamMembers: Typesss.MemberEntryProps[],
    setTeamMembers: React.Dispatch<React.SetStateAction<Typesss.MemberEntryProps[]>>,
  ];
}

export const StoreContext = createContext({} as StoreContextProps);

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    timeEntries: useState<Types.TimeEntryProps[]>([]),
    teamMembers: useState<Typesss.MemberEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
