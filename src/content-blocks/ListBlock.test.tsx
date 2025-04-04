import { render, screen } from "@testing-library/react";

import ListBlock from "./ListBlock";

describe("ListBlock", () => {
  it("should render a list with the correct items", () => {
    const block = {
      id: "1",
      type: "list",
      items: [
        {
          id: "1",
          title: "Item 1",
          description: "Description 1",
          src: "https://medialibrary.com/image1.jpg",
        },
        {
          id: "2",
          title: "Item 2",
          description: "Description 2",
          src: "https:///medialibrary.com/image2.jpg",
        },
        {
          id: "3",
          title: "Item 3",
          description: "Description 3",
          src: "",
        },
      ],
    };

    render(<ListBlock block={block} />);

    block.items.forEach((item) => {
      const title = screen.getByText(item.title);
      const description = screen.getByText(item.description);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
