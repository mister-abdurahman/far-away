import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
import { itemProps } from "./Item";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item: itemProps) {
    setItems((prev): any => [...prev, item]);
  }
  function handleDeleteItem(id: string) {
    setItems((prev): any => prev.filter((item: itemProps) => item.id !== id));
  }
  function handleToggleItem(id: string) {
    setItems((prev): any =>
      prev.map((item: itemProps) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

// DATE COUNTER
// export default function App() {
//   const [step, setStep] = useState(1)
//   const [count, setCount] = useState(0)

//   const date = new Date('july 6 2023')
//  date.setDate(date.getDate() + count)
//   return (
//     <div className="App">
//       <input type="range" min="1" max="10" value={step} onChange={(e)=>setStep(+e.target.value)}/>{step}<br/>
//      <button onClick={()=>{setCount(prev=>prev-step)}}>-</button><input type="number" value={count} onChange={(e)=> setCount(+e.target.value)}/><button onClick={()=>{setCount(prev=>prev+step)}}>+</button>
//      <p>
//        {count >= 1 ? <span>{count} days from now is {date.toDateString()}</span> : count === 0 ?
//        <span>Today's date is {date.toDateString()}</span> : <span>{Math.abs(count)} days ago was {date.toDateString()}</span>}
//       </p>
//     </div>
//   );
// }
