import { Fullscreen, ScanEye } from "lucide-react";

import FunnelUploadInput from "./FunnelUploadInput";
import { useIsMobile } from "../hooks";
import { Funnel } from "../content-blocks/types";

interface Props {
  funnel: Funnel | null;
  setFunnel: (funnel: Funnel) => void;
  setFullscreen: (fullscreen: boolean) => void;
}
function UploadJson({ funnel, setFunnel, setFullscreen }: Props) {
  const isMobile = useIsMobile();

  function handleFunnelChange(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const target = e.target as FileReader;
        try {
          if (!target?.result) {
            alert("Invalid JSON file");
            return;
          }
          const json = JSON.parse(target?.result as string);
          setFunnel(json);
          isMobile && setFullscreen(true);
        } catch (_) {
          alert("Invalid JSON file");
        }
      };

      reader.readAsText(file);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className="bg-blue-100 p-4 rounded-full mb-6">
          <ScanEye size={48} className="text-[#247BA0]" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Funnel Mobile Preview
        </h1>

        {funnel?.name && (
          <div className="mb-4">
            <h2 className="text-xl text-black">{funnel?.name}</h2>
          </div>
        )}

        <p className="text-gray-600 text-center mb-6">
          Upload a JSON file to preview your funnel. The app will automatically
          process and build the UI for you.
        </p>

        <FunnelUploadInput onUpload={handleFunnelChange} />

        <p className="text-sm text-gray-500 text-center mb-6">
          Supported format: .json files only
        </p>

        {funnel && isMobile ? (
          <button
            onClick={() => setFullscreen(true)}
            className="flex items-center text-white bg-[#F08080] rounded-lg py-2 px-4 cursor-pointer"
          >
            <Fullscreen size={20} className="mr-2" />
            <span>Preview</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default UploadJson;
