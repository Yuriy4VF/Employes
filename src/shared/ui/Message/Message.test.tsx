import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Message } from "./Message";

describe("Message component", () => {
  it("renders the children prop correctly", () => {
    const { getByText } = render(<Message>Hello, World!</Message>);

    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders with correct styles", () => {
    const { container } = render(<Message>Styled Message</Message>);

    expect(container.firstChild).toHaveClass("message");
  });
});
