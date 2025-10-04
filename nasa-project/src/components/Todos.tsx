import { useState } from "react";

type Todo = { id: number; text: string; done: boolean };

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  function addTodo() {
    if (!value.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: value.trim(), done: false };
    setTodos((t) => [newTodo, ...t]);
    setValue("");
  }

  function toggle(id: number) {
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  }

  function remove(id: number) {
    setTodos((t) => t.filter((x) => x.id !== id));
  }

  return (
    <div>
      <div className="todo-input-row">
        <input
          className="input"
          placeholder="Add a todo and press Add"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="btn" onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <li className="muted">No todos yet — add one!</li>}
        {todos.map((t) => (
          <li key={t.id} className={`todo-item ${t.done ? "done" : ""}`}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className="todo-text">{t.text}</span>
            </label>
            <button className="btn small" onClick={() => remove(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
