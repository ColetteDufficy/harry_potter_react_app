import React from 'react';

const CharacterDetails = ({selectedCharacter}) => {
    return (
        <>
        <p>Character name: {selectedCharacter.name}</p>
        <p>House: {selectedCharacter.house}</p>
        <p>Species: {selectedCharacter.species}</p>
        <p>Ancestry: {selectedCharacter.ancestry}</p>
        {/* <p>Wand type: {selectedCharacter.wand}</p> */}
        </>
        
    )
}

export default CharacterDetails;