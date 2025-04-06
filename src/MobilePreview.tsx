import React from "react";
import { Funnel } from "./content-blocks/types";
import { X } from "lucide-react";
import MobileSlider from "./MobileSlider";
import ContentWrapper from "./ContentWrapper";
import FunnelPage from "./FunnelPage";

interface Props {
  funnel: Funnel | null;
  setFullscreen(value: boolean): void;
}

function MobilePreview({ funnel, setFullscreen }: Props): React.ReactElement {
  return (
    <div className="fullscreen-overlay pt-10">
      <button className="absolute text-black top-1 right-1 cursor-pointer">
        <X size={30} onClick={() => setFullscreen(false)} />
      </button>
      <MobileSlider>
        {funnel?.pages?.map((page, index) => (
          <ContentWrapper funnel={funnel}>
            <FunnelPage page={page} key={index} />
          </ContentWrapper>
        ))}
      </MobileSlider>
    </div>
  );
}

export default MobilePreview;
