import { EventHandler, ChangeEvent } from "react";

export function Field({
  labelText,
  fieldType,
  onChange,
}: {
  labelText: string;
  fieldType: string;
  onChange: EventHandler<ChangeEvent>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {labelText}
      </label>
      <input
        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        type={fieldType}
        onChange={onChange}
      />
    </div>
  );
}
