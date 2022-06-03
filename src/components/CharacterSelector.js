import React from 'react';

const CharacterSelector = ({characters, handleCharacterChange}) => {

    const handleChange = (event) => {
        handleCharacterChange(event.target.value)
    }

    const characterOptions = characters.map ((character) => {
            return (
            <option key={character.name} value={character.name} >
                {character.name}
            </option>
            )
        })
    


    return (
        <select onChange={handleChange}>
            {characterOptions}
        </select>
    )
}

export default CharacterSelector;