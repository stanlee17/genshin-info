import React, { useEffect } from 'react'
import { loadCharacterDetails } from '../actions/charactersAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharactersIconURL } from '../api'

const CharacterDetails = () => {
  const { name } = useParams()

  const dispatch = useDispatch()

  const { characterDetails } = useSelector((state) => state.characters)
  console.log(characterDetails)

  useEffect(() => {
    dispatch(loadCharacterDetails(name))
  }, [dispatch, name])

  return (
    Object.keys(characterDetails).length && (
      <div className="char-details">
        <div className="char-details__info">
          <img
            src={getCharactersIconURL(
              characterDetails.name.toLowerCase(),
              characterDetails.vision.toLowerCase(),
            )}
            className="char-details__info-icon"
            alt={characterDetails.name}
          />
          <div className="char-details__info-vision">
            <h2>{characterDetails.name}</h2>
            <h3>{characterDetails.vision}</h3>
          </div>
        </div>
        <div className="char-details__overview">
          <h2>{characterDetails.name} Overview</h2>
          <p>{characterDetails.description}</p>
        </div>
      </div>
    )
  )
}

export default CharacterDetails
