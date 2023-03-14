import "./css/App.css";
import "./components/Nav/Nav.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  /*  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // data --> {}
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("Personaje ya existe");
      });
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };
  console.log(characters);
  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
