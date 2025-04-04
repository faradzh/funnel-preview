import { ButtonB } from "./types";

interface Props {
  block: ButtonB;
}

function ButtonBlock({ block }: Props) {
  return (
    <div className="my-4 px-4 flex justify-center">
      <button
        className="py-3 px-6 rounded-lg font-medium"
        style={{
          backgroundColor: block.bgColor || "#0076FF",
          color: block.color || "black",
        }}
      >
        {block.text}
      </button>
    </div>
  );
}

export default ButtonBlock;
