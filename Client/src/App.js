import "./css/App.css";
import "./components/Nav/Nav.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "kalethabh@gmail.com";
  const password = "K1043637215";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logOut() {
    navigate("/");
  }

  const [characters, setCharacters] = useState([]);

  /*  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // data --> {}
        const { id } = data;
        const char = characters.find((char) => char.id === id);
        if (id) {
          if (char) return alert("Personaje ya existe");
          setCharacters([...characters, data]);
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav logout={logOut} onSearch={onSearch} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/detail/:detailId" element={<Detail />} />
        <Route exact path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
