import { TextB } from "./types";

interface Props {
  block: TextB;
}

const getTextAlignClass = (align: string) => {
  switch (align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "left":
    default:
      return "text-left";
  }
};

const TextBlock = ({ block }: Props) => (
  <div className={`my-4 px-4 ${getTextAlignClass(block.align)}`}>
    <p style={{ color: block.color || "#000000" }}>{block.text}</p>
  </div>
);

export default TextBlock;
