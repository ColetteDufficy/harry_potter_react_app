import React, { useState } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetails from '../components/CharacterDetails';

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([]) // the useState parameter needs to match the same data type
    const [selectedCharacter, setSelectedCharacter]= useState({})


    return (
        <>
        <h1>i am the Character container</h1>
        <CharacterSelector />
        <CharacterDetails />
        </>
    )
}

export default CharacterContainer;