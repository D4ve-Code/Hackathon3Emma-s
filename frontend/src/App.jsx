import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarConnected from "./components/NavBarConnected";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";

import "./App.scss";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="App">
      {isConnected ? (
        <NavBarConnected setIsConnected={setIsConnected} />
      ) : (
        <NavBar setIsConnected={setIsConnected} />
      )}
      <Routes>
        <Route path="/" element={<Home isConnected={isConnected} />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
