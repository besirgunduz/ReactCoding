import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Beşir");
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(["Beşir", "Rıza", "Ahmet"]);

  return (
    <div className="App">
      <h1>Benim adım {name}</h1>
      <h2>Yaşım {age}</h2>

      <button onClick={() => setName("Rıza")}>Click</button>
      <button onClick={() => setAge(25)}>Click2</button>

      <hr />
      <br />

      <h1>Friends</h1>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add new friend
      </button>
    </div>
  );
}

export default App;
