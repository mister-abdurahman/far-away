import React from "react";
import { itemProps } from "./Item";

function Stats({ items }: any) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to pack for your next trip 🎉</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item: itemProps) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go 🚀</em>
      ) : (
        <em>
          {" "}
          ✔ You have {numItems} items on your list and you already packed{" "}
          {numPacked} ({percentage}%){" "}
        </em>
      )}
    </footer>
  );
}

export default Stats;
