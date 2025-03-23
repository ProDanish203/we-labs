import { IShoppingItem, ShoppingItem } from "./shopping-item";

export const ShoppingList: React.FC<{
  items: IShoppingItem[];
  togglePurchased: (id: number) => void;
  removeItem: (id: number) => void;
}> = ({ items, togglePurchased, removeItem }) => {
  return (
    <div className="shopping-list">
      {items.length === 0 ? (
        <p className="empty-list">Your shopping list is empty.</p>
      ) : (
        items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            togglePurchased={togglePurchased}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
};
