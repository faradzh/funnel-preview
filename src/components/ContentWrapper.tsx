import React from "react";
import { Funnel } from "../content-blocks/types";
import { useIsMobile } from "../hooks";

interface Props {
  funnel: Funnel | null;
  children: React.ReactNode;
}

function ContentWrapper({ funnel, children }: Props): React.ReactElement {
  const isMobile = useIsMobile();

  const height = isMobile ? "h-[calc(100vh-40px)]" : "h-[565px]";

  return (
    <div
      className={`overflow-y-auto ${height} z-10 bg-white scrollbar-none`}
      style={{ backgroundColor: funnel?.bgColor }}
    >
      {children}
    </div>
  );
}

export default ContentWrapper;
