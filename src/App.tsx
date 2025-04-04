import { useState } from "react";

import "./App.css";
import FunnelUpload from "./FunnelUpload";
import Pagination from "./Pagination";
import { Funnel } from "./content-blocks/types";
import FunnelOverview from "./FunnelOverview";
import MobilePreview from "./MobilePreview";

function App() {
  const [funnel, setFunnel] = useState<Funnel | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function handleFunnelChange(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const target = e.target as any;
        try {
          const json = JSON.parse(target?.result);
          setFunnel(json);
        } catch (_) {
          alert("Invalid JSON file");
        }
      };

      reader.readAsText(file);
    }
  }

  return (
    <main className="flex h-full w-[1000px] bg-white">
      {/* <section className="flex items-center mr-8">
        <img
          className="w-20 h-20 m-auto align-middle"
          src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
          alt="Perspective logo"
        />
      </section> */}
      <section className="w-1/2 h-full">
        <MobilePreview funnel={funnel}>
          <FunnelOverview funnel={funnel} currentPageIndex={currentPageIndex} />
        </MobilePreview>
      </section>
      <section className="w-1/2 h-full">
        <h1 className="text-2xl mb-6 text-black">Funnel Mobile Preview</h1>
        <div className="mb-4">
          <FunnelUpload onUpload={handleFunnelChange} />
        </div>
        {funnel && (
          <>
            <div>
              <div className="mb-4">
                <h2 className="text-xl text-black">{funnel.name}</h2>
              </div>
              <div className="mb-4">
                <Pagination
                  currentPageIndex={currentPageIndex}
                  setCurrentPageIndex={setCurrentPageIndex}
                  funnel={funnel}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
