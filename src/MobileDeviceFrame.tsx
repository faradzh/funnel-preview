import React from "react";
import { Funnel } from "./content-blocks/types";
import { Braces } from "lucide-react";

interface Props {
  funnel: Funnel | null;
  children?: React.ReactNode;
}

function MobileDeviceFrame({ funnel, children }: Props): React.ReactElement {
  return (
    <div className="w-[375px] h-[690px] bg-[url('assets/mobile-preview.jpg')] m-auth bg-cover bg-top bg-repeat-round pt-18 px-6.5">
      {!funnel ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-gray-500 text-sm">
            <Braces size={100} className="text-gray-400 mb-2" />
          </h2>
          <p className="text-gray-500 text-sm">No data provided yet.</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default MobileDeviceFrame;
