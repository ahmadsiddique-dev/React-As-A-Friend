// AddTask.js
import { useState } from "react";

export function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-1 w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
