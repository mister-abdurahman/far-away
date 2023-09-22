import React, { useState } from "react";
import Item, { itemProps } from "./Item";

function compare(a: itemProps, b: itemProps) {
  const descriptionA = a.description.toLowerCase();
  const descriptionB = b.description.toLowerCase();

  if (descriptionA < descriptionB) {
    return -1;
  }
  if (descriptionA > descriptionB) {
    return 1;
  }
  return 0;
}

function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAllItems,
}: any) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.sort(compare);
  }
  if (sortBy === "packed") {
    sortedItems = items.sort(
      (a: { packed: number }, b: { packed: number }) => a.packed - b.packed
    );
  }

  return (
    <div className="list">
      <ul key={Math.random()}>
        {sortedItems.map((item: itemProps) => (
          <Item
            id={item.id}
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
