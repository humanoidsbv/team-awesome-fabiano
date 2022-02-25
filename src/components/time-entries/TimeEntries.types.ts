export interface TimeEntry {
  client: string;
  stopTimestamp: string;
  id: number;
  startTimestamp: string;
  activity: string;
}

export interface ModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
  handleAddButtonClick: (newTimeEntry) => void;
}

export interface TimeEntryProps {
  date?: string;
  activity?: string;
  client: string;
  id?: number;
  startTimestamp: string;
  stopTimestamp: string;
  setTimeEntries?: () => void;
}
