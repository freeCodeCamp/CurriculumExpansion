import { ChangeEvent, EventHandler, useState } from 'react';
import './App.css';



function Field({ labelText,onChange }: { labelText: string,onChange: EventHandler<ChangeEvent> }) {
  return (
    <>
      <label>{labelText}  <input onChange={onChange}></input></label>
    </>
  );
}


export function App() {
  const [value, setValue] = useState("");
  function handleUpdateName(e: ChangeEvent)
  {
    setValue((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <div>
        <Field labelText='Name' onChange={handleUpdateName}/>
      </div>
      <div>
      <p id="name">{value}</p>
      </div>
    </>
  );
}
