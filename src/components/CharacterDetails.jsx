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
      <div className="character-details">
        <div className="character-details__icon">
          <img
            src={getCharactersIconURL(
              characterDetails.name.toLowerCase(),
              characterDetails.vision.toLowerCase(),
            )}
            alt={characterDetails.name}
          />
        </div>
        <div className="character-details__info">
          <h2 className="character-details__info-name">
            {characterDetails.name}
          </h2>
          <p className="character-details__info-desc">
            {characterDetails.description}
          </p>
          <h3 className="character-details_info-vision">
            {characterDetails.vision} • {characterDetails.weapon}
          </h3>
        </div>
      </div>
    )
  )
}

export default CharacterDetails
