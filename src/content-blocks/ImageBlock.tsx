import { useState } from "react";
import { ImageOff } from "lucide-react";

import { ImageB } from "./types";

interface Props {
  block: ImageB;
}
function ImageBlock({ block }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="my-4">
      {!imageError ? (
        <img
          src={block.src}
          alt={block.alt || "Image"}
          className="w-full h-auto"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full py-12 flex flex-col items-center justify-center bg-gray-100 rounded">
          <ImageOff size={48} className="text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm">
            {block.alt || "Image could not be loaded"}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            {block.src ? new URL(block.src).hostname : "Invalid source"}
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageBlock;
