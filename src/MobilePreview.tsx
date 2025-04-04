import React from "react";
import { Funnel } from "./content-blocks/types";

interface Props {
  funnel: Funnel | null;
  children: React.ReactNode;
}

function MobilePreview({ funnel, children }: Props): React.ReactElement {
  return (
    <div className="w-[375px] h-[690px] bg-[url('assets/mobile-preview.jpg')] m-auth bg-cover bg-top bg-repeat-round pt-18 px-6.5">
      <div
        className="overflow-y-auto h-[565px] z-10 bg-white scrollbar-none"
        style={{ backgroundColor: funnel?.bgColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default MobilePreview;
