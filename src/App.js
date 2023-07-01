import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import styles from "./components/Card/Card.module.css";
import React, { useState } from "react";
import axios from 'axios';
import { Switch , Route } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx'
import Login from "./components/Login/Login.jsx"
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
          ? setCharacters([data, ...characters])
          :alert ("Ya reclutaste ese Personaje, no hay clones en este universo!!")
       }
       else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character)=> character.id !== +id))
  }


  const random = () => {
    let randomId = Math.ceil(Math.random() * 826)
    onSearch(randomId)
  }

  
  return (
    <div className={styles.fondo}>
      <div className="App">
        {/* <Nav onSearch={onSearch} random={random}/> */}
        <SearchBar onSearch={onSearch} random={random}/>
        <Cards characters={characters} onClose={onClose}/>
        
          <Route exact path="/" component={SearchBar}/>
           
          <Route exact path="/profile" component={Profile}/>

          {/* <Route exact path="/home" component={Home} /> */}
        
      </div>
    </div>
  );
}

export default App;