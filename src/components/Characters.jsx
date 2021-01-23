import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../actions/charactersAction'
import { getCharactersIconURL } from '../api'
import { Link } from 'react-router-dom'

const Characters = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCharacters())
  }, [dispatch])

  const { characters, filtered } = useSelector((state) => state.characters)

  const charactersList = characters.map((character, index) => (
    <div className="character" key={index}>
      <Link
        to={
          character.name !== 'Traveler'
            ? `/characters/${character.name.toLowerCase()}`
            : `/characters/${character.name.toLowerCase()}-${character.vision.toLowerCase()}`
        }
      >
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
      </Link>
    </div>
  ))

  const filteredList =
    filtered &&
    filtered.map((character, index) => (
      <div className="character" key={index}>
        <Link
          to={
            character.name !== 'Traveler'
              ? `/characters/${character.name.toLowerCase()}`
              : `/characters/${character.name.toLowerCase()}-${character.vision.toLowerCase()}`
          }
        >
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
        </Link>
      </div>
    ))

  return (
    <div className="characters">{filtered ? filteredList : charactersList}</div>
  )
}

export default Characters
