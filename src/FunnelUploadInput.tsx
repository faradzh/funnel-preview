import { Upload } from "lucide-react";

interface Props {
  onUpload(e: React.SyntheticEvent): void;
}
function FunnelUploadInput({ onUpload }: Props) {
  return (
    <label
      className="bg-[#247BA0] hover:bg-[#216887] text-white font-medium py-3 px-6 rounded-lg w-full mb-4 flex items-center justify-center space-x-2 cursor-pointer"
      htmlFor="jsonInput"
    >
      <Upload size={20} />
      <span>Upload JSON File</span>
      <input
        id="jsonInput"
        type="file"
        className="hidden"
        accept=".json"
        onChange={onUpload}
      />
    </label>
  );
}

export default FunnelUploadInput;
