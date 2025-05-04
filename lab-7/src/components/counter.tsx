import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Counter</h2>

      <div className="text-6xl font-bold mb-8 text-blue-600">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
