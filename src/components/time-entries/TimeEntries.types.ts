import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
  handleAddButtonClick: (newTimeEntry: TimeEntryProps) => void;
}

export interface TimeEntryProps {
  date?: string;
  activity?: string;
  client: string;
  id?: number;
  startTimestamp: string;
  stopTimestamp: string;
}
