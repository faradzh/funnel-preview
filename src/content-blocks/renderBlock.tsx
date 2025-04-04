import BLOCK_REGISTRY from "./BlockRegistry";
import { Block } from "./types";

export function renderBlock(block: Block) {
  const BlockComponent = BLOCK_REGISTRY[block.type];

  if (!BlockComponent) {
    return null;
  }

  return <BlockComponent key={block.id} block={block} />;
}
