import React, { useState } from "react";

export interface itemProps {
  id: string;
  description: string;
  quantity: number;
  packed: boolean;
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
}

function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}: itemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
