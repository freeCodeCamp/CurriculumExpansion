import { EventHandler, ChangeEvent } from "react";

export function Field({ labelText,fieldType,onChange }: { labelText: string,fieldType:string, onChange: EventHandler<ChangeEvent> }) {
  return (
    <>
      <label>{labelText}  <input type={fieldType} onChange={onChange}/></label>
    </>
  );
}
