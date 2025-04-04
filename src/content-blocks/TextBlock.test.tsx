import { render, screen } from "@testing-library/react";

import TextBlock from "./TextBlock";

describe("TextBlock", () => {
  it("should render correctly", () => {
    render(
      <TextBlock
        block={{
          id: "1",
          type: "text",
          text: "Welcome",
          align: "left",
          color: "#000000",
        }}
      />
    );
    const textElement = screen.getByText("Welcome");
    expect(textElement).toBeInTheDocument();
    expect(textElement.parentElement).toHaveClass("text-left");
    expect(textElement).toHaveStyle({ color: "#000000" });
  });
});
