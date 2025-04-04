import { ScanEye } from "lucide-react";

import FunnelUploadInput from "./FunnelUploadInput";

function UploadJson({ funnel, setFunnel }: any) {
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

        <p className="text-sm text-gray-500 text-center">
          Supported format: .json files only
        </p>
      </div>
    </div>
  );
}

export default UploadJson;
