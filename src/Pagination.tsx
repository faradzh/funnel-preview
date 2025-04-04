import { ChevronLeft, ChevronRight } from "lucide-react";
import { Funnel } from "./content-blocks/types";

interface Props {
  funnel: Funnel | null;
  currentPageIndex: number;
  setCurrentPageIndex(index: number): void;
}
function Pagination({ funnel, currentPageIndex, setCurrentPageIndex }: Props) {
  const fullPagesLength =
    funnel?.pages?.filter((page) => page.blocks?.length > 0).length ?? 0;

  function prevPage() {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  }

  function nextPage() {
    if (funnel && currentPageIndex < fullPagesLength - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  }

  if (!funnel?.pages || funnel.pages.length === 0 || fullPagesLength === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="bg-blue-600 text-white rounded-lg py-2 px-4 cursor-pointer"
        onClick={prevPage}
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-black">
        Page {currentPageIndex + 1} of {fullPagesLength}
      </span>
      <button
        className="bg-blue-600 text-white rounded-lg py-2 px-4 cursor-pointer"
        onClick={nextPage}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default Pagination;
