import { useState } from "react";

export const ShoppingInput: React.FC<{
  addItem: (name: string, category: string) => void;
}> = ({ addItem }) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("Fruits");

  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Meat",
    "Bakery",
    "Beverages",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addItem(name, category);
      setName("");
    }
  };

  return (
    <form className="shopping-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add item..."
        className="input-field"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select-field"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit" className="add-button">
        Add Item
      </button>
    </form>
  );
};
