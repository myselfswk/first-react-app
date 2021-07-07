import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Demo.css';

function PokemonAPI() {

    const [num, setNum] = useState(1);
    const [pokemonName, setPokemonName] = useState();
    const [noOfMoves, setNoOfMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

            setPokemonName(
                res.data.forms[0].name
            )
            setNoOfMoves(
                res.data.moves.length
            )
        }

        getData();
    })
    
    return (
        <div className="App">
            <h1>Your Choose {num} Value</h1>

            <select value={num} onChange={(e) => {
                setNum(
                    e.target.value
                )
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="9">9</option>
            </select>

            <div>
                <h1>Pokemon Name: {pokemonName}</h1>
                <h1>Pokemon No of Moves: {noOfMoves}</h1>
            </div>
        </div>
    )
}

export default PokemonAPI;
