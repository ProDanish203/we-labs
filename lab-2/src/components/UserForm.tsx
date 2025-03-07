import { useState } from "react";

export const UserForm = () => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full outline-gray-400"
      />
      <p className="text-xl text-center">
        Name: <span className="font-semibold">{name}</span>
      </p>
    </div>
  );
};
