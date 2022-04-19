import React from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import "./style.css"
import { useState, useEffect } from "react";

export default function App() {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")

  const getAllPokemons = () =>{
    axios 
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res =>{
        setPokelist(res.data.results)
        console.log(pokeList)
      })
      .catch(err =>{
        console.log(err)
      })
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  const changePokeName = event =>{
    setPokeName(event.target.value)
  }

  return (
    <div className="App">
    <select onChange={changePokeName}>
      <option value={""}>Nenhum</option>
      {pokeList.map(pokemon => {
        return (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        );
      })}
    </select>
    {pokeName && <PokeCard pokemon={pokeName} />}
  </div>
  )
}
