import { useState } from "react";
import "./App.css";

import Pagination from "./Pagination";
import { Funnel } from "./content-blocks/types";
import UploadJson from "./UploadJson";
import MobileDeviceFrame from "./MobileDeviceFrame";
import ContentWrapper from "./ContentWrapper";
import FunnelPages from "./FunnelPages";
import MobilePreview from "./MobilePreview";

import { useIsMobile } from "./hooks";

function App() {
  const [funnel, setFunnel] = useState<Funnel | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <main className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 h-full lg:max-w-[1000px] bg-white">
      <section className="h-full lg:order-3">
        <UploadJson
          funnel={funnel}
          setFunnel={setFunnel}
          setFullscreen={setFullscreen}
        />
      </section>
      <section className="hidden md:block h-full m-auto lg:order-1">
        <MobileDeviceFrame funnel={funnel}>
          <ContentWrapper funnel={funnel}>
            <FunnelPages funnel={funnel} currentPageIndex={currentPageIndex} />
          </ContentWrapper>
        </MobileDeviceFrame>
      </section>
      <section className="hidden md:flex items-center min-w-24 lg:order-2">
        <Pagination
          currentPageIndex={currentPageIndex}
          setCurrentPageIndex={setCurrentPageIndex}
          funnel={funnel}
        />
      </section>
      {isMobile && fullscreen ? (
        <MobilePreview funnel={funnel} setFullscreen={setFullscreen} />
      ) : null}
    </main>
  );
}

export default App;
