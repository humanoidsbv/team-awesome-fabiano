export interface ModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
  handleAddButtonClick: (newTimeEntry: TimeEntryProps) => void;
}

export interface TimeEntryProps {
  date: string;
  activity: string;
  client: string;
  id?: number;
  startTimestamp: string;
  stopTimestamp: string;
}

export interface ClientsProps {
  id: number;
  name: string;
}
