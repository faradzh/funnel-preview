import { ReactElement } from "react";

import ButtonBlock from "./ButtonBlock";
import ImageBlock from "./ImageBlock";
import ListBlock from "./ListBlock";
import TextBlock from "./TextBlock";
import { Block } from "./types";

export const BLOCKS_TYPES: Record<string, ({ block }: any) => ReactElement> = {
  text: TextBlock,
  image: ImageBlock,
  button: ButtonBlock,
  list: ListBlock,
} as const;

export function renderBlock(block: Block) {
  const BlockComponent = BLOCKS_TYPES[block.type];

  if (!BlockComponent) {
    return null;
  }

  return <BlockComponent key={block.id} block={block} />;
}
