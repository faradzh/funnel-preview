import { Upload } from "lucide-react";

interface Props {
  onUpload(e: React.SyntheticEvent): void;
}
function FunnelUpload({ onUpload }: Props) {
  return (
    <label
      className="flex max-w-[300px] m-auto items-center justify-center text-white rounded-lg cursor-pointer py-2 px-4 text-center space-x-2 bg-blue-600"
      htmlFor="jsonInput"
    >
      <Upload size={20} />
      <span>Select FUNNEL JSON File</span>
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

export default FunnelUpload;
