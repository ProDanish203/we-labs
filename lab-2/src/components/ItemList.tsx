const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

export const ItemList = () => {
  return (
    <div className="flex flex-col gap-y-1">
      {items.map((item: string, idx: number) => (
        <p key={idx} className="text-sm">
          {item}
        </p>
      ))}
    </div>
  );
};
