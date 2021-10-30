import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import { useState } from "react";

const friends = [
  {
    id: 1,
    name: "Rıdvan",
  },
  {
    id: 2,
    name: "Eshat",
  },
  {
    id: 3,
    name: "Zeyni",
  },
];

function App() {
  const [name, setName] = useState("Beşir");
  const [age, setAge] = useState(28);

  console.log(name, age);

  return (
    <div className="App">
      <Header />

      <h1>Benim adım {name}</h1>
      <h2>Yaşım {age}</h2>

      <button onClick={() => setName("Rıza")}>Click</button>
      <button onClick={() => setAge(25)}>Click2</button>

      <User
        name="Beşir"
        surname="Gündüz"
        isLoggedIn={true}
        age={28}
        friends={friends}
      />
    </div>
  );
}

export default App;
