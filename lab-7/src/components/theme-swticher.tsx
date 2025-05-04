import React, { useState, useEffect } from "react";
import { Counter } from "./counter";

export const ThemeSwitcher: React.FC = () => {
  const themes = [
    { name: "Red", bgClass: "bg-red-100", buttonClass: "bg-red-500" },
    { name: "Green", bgClass: "bg-green-100", buttonClass: "bg-green-500" },
    { name: "Blue", bgClass: "bg-blue-100", buttonClass: "bg-blue-500" },
    { name: "Gray", bgClass: "bg-gray-100", buttonClass: "bg-gray-500" },
  ];

  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [containerStyle, setContainerStyle] = useState<string>(
    themes[0].bgClass
  );

  useEffect(() => {
    setContainerStyle(activeTheme.bgClass);
  }, [activeTheme]);

  return (
    <div
      className={`min-h-screen w-full ${containerStyle} transition-colors duration-300 flex flex-col items-center justify-center gap-20`}
    >
      <div className="w-full h-full flex items-center justify-center pt-20">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Theme Switcher
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setActiveTheme(theme)}
                className={`${
                  theme.buttonClass
                } text-white px-4 py-2 rounded-md transition-all duration-200 hover:opacity-90 ${
                  activeTheme.name === theme.name
                    ? "ring-4 ring-offset-2 ring-offset-white ring-gray-400"
                    : ""
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Counter />
      </div>
    </div>
  );
};
