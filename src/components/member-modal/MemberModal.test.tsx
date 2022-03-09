import { render, screen, fireEvent } from "@testing-library/react";
import { MemberModal } from "./MemberModal";

describe("Close member modal", () => {
  const onClose = jest.fn();
  const handleAddButtonClick = jest.fn();

  it("Press cancel, onClose gets called", () => {
    render(<MemberModal handleAddButtonClick={handleAddButtonClick} isActive onClose={onClose} />);

    const cancel = screen.getByText("Cancel");
    fireEvent.click(cancel);
    expect(onClose).toBeCalled();
  });
});
