import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import funnelMock from "./mocks/funnel.json";
import App from "./App";

describe("App", () => {
  it("renders and builds the blocks correctly", async () => {
    render(<App />);

    const file = new File([JSON.stringify(funnelMock)], "funnel.json", {
      type: "application/json",
    });

    const uploadInput = screen.getByTestId("jsonInput") as HTMLInputElement;

    await userEvent.upload(uploadInput, file);

    // assert that the file is uploaded
    expect(uploadInput.files?.[0]).toBe(file);

    // assert that funnel title is displayed
    expect(await screen.findByText("My awesome funnel")).toBeInTheDocument();

    // assert that funnel text block is displayed
    expect(await screen.getByText("Welcome!")).toBeInTheDocument();

    // assert that funnel image block is displayed
    expect(await screen.getByAltText("Welcome image")).toBeInTheDocument();

    // assert that funnel list block is displayed
    expect(await screen.getByText("Icecream")).toBeInTheDocument();

    // assert that funnel button block is displayed
    expect(await screen.getByText("Nice Menu!")).toBeInTheDocument();

    const nextBtn = await screen.getByRole("button", { name: /next page/i });

    await userEvent.click(nextBtn);

    // assert that next page is displayed
    expect(
      await screen.getByText("Thanks for stopping by!")
    ).toBeInTheDocument();
  });
});
