import "./App.css";
import PartyA from "./components/PartyA";
import PartyB from "./components/PartyB";

function App() {
  return (
    <div className="App flex justify-center items-start h-screen p-10">
      <div className="flex gap-8">
        {" "}
        <PartyA />
        <PartyB />
      </div>
    </div>
  );
}

export default App;
