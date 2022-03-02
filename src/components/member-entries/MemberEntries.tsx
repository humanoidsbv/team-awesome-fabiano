import { SecondaryHeader } from "../secondary-header";
import { MemberEntry } from "../member-entry";

export const MemberEntries = () => {
  return (
    <>
      <SecondaryHeader
        title="Team members"
        subtitle="1 Humanoids"
        buttonLabel="New Humanoid"
        buttonKind="primary"
        buttonIcon={true}
      />
      <MemberEntry />
    </>
  );
};
