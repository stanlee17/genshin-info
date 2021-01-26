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
        <div className="char-details__overview margin-bott-top-md">
          <h1>{characterDetails.name} Overview</h1>
          <p>{characterDetails.description}</p>
        </div>
        <h1 className="margin-bott-top-md">
          {characterDetails.name} Skill Talents
        </h1>
        <div className="char-details__skills">
          {characterDetails.skillTalents.map((skill) => (
            <div className="char-details__skills-content">
              <h2>{skill.name}</h2>
              <h3>{skill.unlock}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        <h1 className="margin-bott-top-md">
          {characterDetails.name} Passive Talents
        </h1>
        <div className="char-details__passive">
          {characterDetails.passiveTalents.map((passive) => (
            <div className="char-details__passive-content">
              <h2>{passive.name}</h2>
              <h3>{passive.unlock}</h3>
              <p>{passive.description}</p>
            </div>
          ))}
        </div>
        <h1 className="margin-bott-top-md">
          {characterDetails.name} Constellations
        </h1>
        <div className="char-details__constellations">
          {characterDetails.constellations.map((constellation) => (
            <div className="char-details__constellations-content">
              <h2>{constellation.name}</h2>
              <h3>{constellation.unlock}</h3>
              <p>{constellation.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default CharacterDetails
