import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../actions/charactersAction'
import { getCharactersIconURL } from '../api'

const Characters = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCharacters())
  }, [dispatch])

  const { characters } = useSelector((state) => state.characters)

  return (
    <div className="characters">
      {characters.map((character, index) => (
        <div className="character" key={index}>
          <img
            src={getCharactersIconURL(
              character.name.toLowerCase(),
              character.vision.toLowerCase(),
            )}
            alt={character.name}
            className="character__icon"
          />
          <h4 className="character__name">
            {character.name === 'Traveler'
              ? `${character.name} (${character.vision})`
              : character.name}
          </h4>
        </div>
      ))}
    </div>
  )
}

export default Characters
