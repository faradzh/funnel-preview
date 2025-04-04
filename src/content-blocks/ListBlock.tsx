import { useState } from "react";

import { ListB } from "./types";

interface Props {
  block: ListB;
}
function ListBlock({ block }: Props) {
  return (
    <ul className="my-4 px-4">
      {block.items.map((item) => {
        const [iconError, setIconError] = useState(false);

        return (
          <li
            key={item.id}
            className="flex items-center mb-4 border rounded-lg p-3 shadow-sm"
          >
            {item.src && !iconError ? (
              <div className="mr-3 w-10 h-10 flex items-center justify-center">
                <img
                  src={item.src}
                  alt="item icon"
                  className="w-10 h-10"
                  onError={() => setIconError(true)}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
            ) : item.src ? (
              <div className="mr-3 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-500 font-bold text-xs">
                  {item.title.charAt(0)}
                </span>
              </div>
            ) : null}
            <div>
              <h3 className="font-bold text-black text-left">{item.title}</h3>
              <p className="text-sm text-gray-600 text-left">
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListBlock;
