import { ReactElement } from "react";

import ButtonBlock from "./ButtonBlock";
import ImageBlock from "./ImageBlock";
import ListBlock from "./ListBlock";
import TextBlock from "./TextBlock";

const BLOCK_REGISTRY: Record<string, ({ block }: any) => ReactElement> = {
  text: TextBlock,
  image: ImageBlock,
  button: ButtonBlock,
  list: ListBlock,
} as const;

export default BLOCK_REGISTRY;
