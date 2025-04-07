import { Funnel } from "../content-blocks/types";
import FunnelPage from "./FunnelPage";

interface Props {
  funnel: Funnel | null;
  currentPageIndex: number;
}
function FunnelPages({ funnel, currentPageIndex }: Props) {
  if (!funnel) {
    return null;
  }

  if (!funnel.pages || funnel.pages.length === 0) {
    return null;
  }

  return <FunnelPage page={funnel.pages[currentPageIndex]} />;
}

export default FunnelPages;
