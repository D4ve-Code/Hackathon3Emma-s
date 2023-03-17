import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarConnected from "./components/NavBarConnected";
import ListPage from "./pages/ListPage";
import axios from "axios";

import "./App.scss";

function App() {
  const [dataPhones, setDataPhones] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/phones").then((response) => {
      setDataPhones(response.data);
    });
  }, []);

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
        <Route
          path="/modify/:id"
          element={<Home isConnected={isConnected} />}
        />
        <Route
          path="/listpage"
          element={<ListPage dataPhones={dataPhones} />}
        />
      </Routes>
    </div>
  );
}

export default App;
