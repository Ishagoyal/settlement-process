import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import PartyA from "./components/PartyA";
import PartyB from "./components/PartyB";
import "./App.css"; // Ensure you have some base styles defined here

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-200">
        <header className="p-4 bg-blue-500 text-white shadow">
          <nav className="container mx-auto flex justify-between items-center px-6 py-4">
            <div className="space-x-4">
              <Link
                to="/partyA"
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-150 ease-in-out"
              >
                Party A
              </Link>
            </div>
            <div className="space-x-4">
              <Link
                to="/partyB"
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-150 ease-in-out"
              >
                Party B
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow p-4 bg-gray-100">
          <Routes>
            <Route path="/partyA" element={<PartyA />} />
            <Route path="/partyB" element={<PartyB />} />
            <Route path="*" element={<Navigate to="/partyA" replace />} />{" "}
            {/* Redirects to Party A by default */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
