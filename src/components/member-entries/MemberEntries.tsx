import React, { useState } from "react";

import { SecondaryHeader } from "../secondary-header";
import { MemberEntry } from "../member-entry";
import { MemberModal } from "../member-modal";

export const MemberEntries = () => {
  const [isMemberModalActive, setIsMemberModalActive] = useState(false);
  return (
    <>
      <SecondaryHeader
        title="Team members"
        subtitle="1 Humanoids"
        buttonLabel="New Humanoid"
        buttonKind="primary"
        buttonOnClick={() => setIsMemberModalActive(true)}
        buttonIcon={true}
      />
      <MemberEntry />
      <MemberModal isActive={isMemberModalActive} onClose={() => setIsMemberModalActive(false)} />
    </>
  );
};
