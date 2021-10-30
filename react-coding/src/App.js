import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {
  const [name, setName] = useState("Beşir");
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(["Beşir", "Rıza", "Ahmet"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34290 });

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

      <hr />
      <br />

      <h1>Address</h1>
      <div>
        {address.title} {address.zip}
      </div>

      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 232526 })}
      >
        change the address
      </button>

      <Counter />
      <InputExample />
    </div>
  );
}

export default App;
