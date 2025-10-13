// TaskList.js
import { useState } from "react";

export function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChange={onChangeTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => onChange({ ...task, text: e.target.value })}
          className="border border-gray-300 rounded-lg px-2 py-1"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="ml-2 bg-green-500 text-white px-2 py-1 rounded-lg"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span
          className={task.done ? "line-through text-gray-500" : ""}
          onClick={() => onChange({ ...task, done: !task.done })}
        >
          {task.text}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-lg"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
      <div className="flex items-center gap-2">{taskContent}</div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded-lg"
      >
        Delete
      </button>
    </li>
  );
}
