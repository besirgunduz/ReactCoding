import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

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
  return (
    <div className="App">
      <Header />
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
