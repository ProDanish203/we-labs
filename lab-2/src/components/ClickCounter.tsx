import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => setCount((prev: number) => prev + 1)}
      >
        Count Up
      </button>
      <p className="text-xl text-center">
        Count: <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
};
