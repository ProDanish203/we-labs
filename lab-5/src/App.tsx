import "./App.css";
import React, { useState } from "react";
import { ShoppingInput } from "./components/shopping-input";
import { IShoppingItem } from "./components/shopping-item";
import { ShoppingList } from "./components/shopping-list";

const App: React.FC = () => {
  const [items, setItems] = useState<IShoppingItem[]>([]);

  const addItem = (name: string, category: string) => {
    const newItem: IShoppingItem = {
      id: Date.now(),
      name,
      category,
      purchased: false,
    };
    setItems([...items, newItem]);
  };

  const togglePurchased = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Grocery Shopping List</h1>
      <ShoppingInput addItem={addItem} />
      <ShoppingList
        items={items}
        togglePurchased={togglePurchased}
        removeItem={removeItem}
      />
    </div>
  );
};

export default App;
