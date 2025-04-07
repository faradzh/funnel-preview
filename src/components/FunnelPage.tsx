import { renderBlock } from "../content-blocks/renderBlock";
import { Block, Page } from "../content-blocks/types";

interface Props {
  page: Page;
}
function FunnelPage({ page }: Props) {
  if (!page) {
    return null;
  }

  return <>{page.blocks?.map((block: Block) => renderBlock(block))}</>;
}

export default FunnelPage;
