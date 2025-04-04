import { render, screen } from "@testing-library/react";
import ImageBlock from "./ImageBlock";

describe("ImageBlock", () => {
  it("should render an image with the correct src and alt attributes", () => {
    const block = {
      id: "1",
      type: "image",
      src: "https://example.com/image.jpg",
      alt: "Example Image",
    };

    render(<ImageBlock block={block} />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", block.src);
    expect(img).toHaveAttribute("alt", block.alt);
  });
});
