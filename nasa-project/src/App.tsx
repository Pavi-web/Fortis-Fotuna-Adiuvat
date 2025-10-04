import { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

export default function App() {
  const [name, setName] = useState<string>("Sree");

  return (
    <div className="app">
      <div className="container">
        <Header title="Fortis"/>
        <section className="card">
          <h2>Welcome, {name} 👋</h2>
          <p className="muted">This is a minimal starter app. Edit <code>src/styles.css</code> to style it.</p>

          <div style={{ marginTop: 16 }}>
            <label className="label">
              Change name:
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name..."
              />
            </label>
          </div>

          <hr />

          <div style={{ marginTop: 12 }}>
            <h3>Counter</h3>
            <Counter />
          </div>

          <hr />

          <div style={{ marginTop: 12 }}>
            <h3>Todos</h3>
            <Todos />
          </div>
        </section>

        <footer className="footer">Made with ❤️ — Edit and experiment freely</footer>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="row">
      <button className="btn" onClick={() => setCount((c) => c - 1)}>-</button>
      <div className="counter">{count}</div>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
