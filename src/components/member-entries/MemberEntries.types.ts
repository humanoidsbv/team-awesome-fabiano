export interface MemberModalProps {
  children?: string;
  handleAddButtonClick: (newMemberEntry: MemberEntryProps) => void;
  isActive: boolean;
  onClose: () => void;
}

export interface MemberEntryProps {
  client: string;
  emailAddress: string;
  firstName: string;
  id?: number;
  label: string;
  lastName: string;
  role: string;
  startingDate: string;
}
