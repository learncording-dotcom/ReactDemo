import { useState } from "react";
import "./index.css";

function Header() {
  return (
    <header>
      <h1>ReactJS Introduction.....</h1>
      <p>Learning the basics of React</p>
    </header>
  );
}

function Student({ name, course }) {
  return (
    <div className="card">
      <h2>Student Information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 5);
  }

  function decreaseCount() {
    setCount(count - 3);
  }

  return (
    <div className="card">
      <h2>Counter</h2>

      <p className="count">Current Count: {count}</p>

      <button onClick={increaseCount}>Increase</button>

      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function Greeting() {
  function showMessage() {
    alert("Welcome to my first ReactJS Project!");
  }

  return (
    <div className="card">
      <h2>Event Handling</h2>

      <button onClick={showMessage}>Show Message</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />

      <Student name="Tatenda" course="BCA" />

      <Counter />

      <Greeting />
    </div>
  );
}

export default App;
