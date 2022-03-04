export interface MemberModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
  handleAddButtonClick: (newMemberEntry: MemberEntryProps) => void;
}

export interface MemberEntryProps {
  firstName: string;
  lastName: string;
  emailAddress: string;
  label: string;
  client: string;
  role: string;
  startingDate: string;
  id?: number;
}
