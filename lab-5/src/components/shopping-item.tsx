export interface IShoppingItem {
  id: number;
  name: string;
  category: string;
  purchased: boolean;
}

export const ShoppingItem: React.FC<{
  item: IShoppingItem;
  togglePurchased: (id: number) => void;
  removeItem: (id: number) => void;
}> = ({ item, togglePurchased, removeItem }) => {
  return (
    <div className={`shopping-item ${item.purchased ? "purchased" : ""}`}>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-category">{item.category}</span>
      </div>
      <div className="item-actions">
        <button
          className={`toggle-button ${item.purchased ? "purchased" : ""}`}
          onClick={() => togglePurchased(item.id)}
        >
          {item.purchased ? "Purchased" : "Mark as Purchased"}
        </button>
        <button className="remove-button" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
