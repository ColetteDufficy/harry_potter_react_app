import React, { useEffect, useState } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetails from '../components/CharacterDetails';

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([]) // the useState argument needs to match the same data type
    const [selectedCharacter, setSelectedCharacter]= useState({})

    const getCharacters = () => {
        console.log("getting character data");
        fetch("https://hp-api.herokuapp.com/api/characters/") //fetch only returns a promise. NOT a data object. We can build in some if statements here in case the data is delayed in returning. JS is malking the promise
        .then( response =>  response.json()) // this is a callback that sits inside the ".then"
        // once a fetch function is called, it has to be followed by ".then". The response is an object, and is the result of the fetch's promise, but u need to wait for the promise to be fulfilled. Pending, then fulfilled.

        .then( data => setCharacters(data))  
        //data here, is the actual data that will come back when the promise is fulfilled
        //updating the characters array with ths new array of objects
    }


    const handleCharacterChange = (characterName) => {
        console.log(characterName);
        const foundCharacter = characters.find((character) => character.name === characterName)
        setSelectedCharacter(foundCharacter)
    } 




    useEffect(() => {
        getCharacters(); //calling the function that is defined above
    }, [])


    return (
        <>
            <h1>Welcome to the world of Harry Potter</h1>
            <h3>Choose a character from the drop down menu, to see more details!</h3>
            <CharacterSelector 
            characters={characters}
            handleCharacterChange={handleCharacterChange}
            />
            <CharacterDetails selectedCharacter={selectedCharacter}/>
        </>
    )
}

export default CharacterContainer;