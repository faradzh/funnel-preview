import { render, screen } from "@testing-library/react";

import ButtonBlock from "./ButtonBlock";

describe("ButtonBlock", () => {
  it("should render correctly with provided colors", () => {
    render(
      <ButtonBlock
        block={{
          id: "1",
          type: "button",
          text: "Click Me",
          color: "#000000",
          bgColor: "#FFFFFF",
        }}
      />
    );

    const button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ color: "#000000" });
    expect(button).toHaveStyle({ backgroundColor: "#FFFFFF" });
  });

  it("should render correctly with default colors", () => {
    render(
      <ButtonBlock
        block={{
          id: "1",
          type: "button",
          text: "Click Me",
        }}
      />
    );

    const button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ color: "rgb(0, 0, 0)" });
    expect(button).toHaveStyle({ backgroundColor: "#0076FF" });
  });
});
