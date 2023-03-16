import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarConnected from "./components/NavBarConnected";

import "./App.scss";

function App() {
  const [isConnected, setIsConnected] = useState(true);
  return (
    <div className="App">
      {isConnected ? (
        <NavBar setIsConnected={setIsConnected} />
      ) : (
        <NavBarConnected setIsConnected={setIsConnected} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
