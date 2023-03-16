import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarConnected from "./components/NavBarConnected";
import ListPage from "./pages/ListPage";

import "./App.scss";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isConnected === false) {
      navigate("/");
    }
  }, [isConnected, navigate]);

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
      </Routes>
    </div>
  );
}

export default App;
