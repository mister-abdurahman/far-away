import React, { FormEvent, useState } from "react";
import { nanoid } from "nanoid";

function Form({ onAddItem }: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      id: nanoid(),
      packed: false,
    };
    onAddItem(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
