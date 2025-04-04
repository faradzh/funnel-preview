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
    <main className="flex space-x-10 h-full max-w-[1000px] bg-white">
      <section className="h-full">
        <MobilePreview funnel={funnel}>
          <FunnelOverview funnel={funnel} currentPageIndex={currentPageIndex} />
        </MobilePreview>
      </section>
      <section className="flex items-center min-w-24">
        <Pagination
          currentPageIndex={currentPageIndex}
          setCurrentPageIndex={setCurrentPageIndex}
          funnel={funnel}
        />
      </section>
      <section className="w-1/2 h-full">
        <UploadJson funnel={funnel} setFunnel={setFunnel} />
      </section>
    </main>
  );
}

export default App;
