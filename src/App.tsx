import { useState } from "react";

import "./App.css";
import Pagination from "./Pagination";
import { Funnel } from "./content-blocks/types";
import FunnelOverview from "./FunnelOverview";
import MobilePreview from "./MobilePreview";
import UploadJson from "./UploadJson";

function App() {
  const [funnel, setFunnel] = useState<Funnel | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <main className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 h-full lg:max-w-[1000px] bg-white">
      <section className="h-full lg:order-3">
        <UploadJson funnel={funnel} setFunnel={setFunnel} />
      </section>
      <section className="h-full m-auto lg:order-1">
        <MobilePreview funnel={funnel}>
          <FunnelOverview funnel={funnel} currentPageIndex={currentPageIndex} />
        </MobilePreview>
      </section>
      <section className="flex items-center min-w-24 lg:order-2">
        <Pagination
          currentPageIndex={currentPageIndex}
          setCurrentPageIndex={setCurrentPageIndex}
          funnel={funnel}
        />
      </section>
    </main>
  );
}

export default App;
