import { renderBlock } from "./content-blocks/renderBlock";
import { Block, Funnel as FunnelI } from "./content-blocks/types";

interface Props {
  funnel: FunnelI | null;
  currentPageIndex: number;
}
function FunnelOverview({ funnel, currentPageIndex }: Props) {
  if (!funnel) {
    return null;
  }

  if (!funnel.pages || funnel.pages.length === 0) {
    return null;
  }

  return (
    <>
      {funnel.pages[currentPageIndex]?.blocks?.map((block: Block) =>
        renderBlock(block)
      )}
    </>
  );
}

export default FunnelOverview;
