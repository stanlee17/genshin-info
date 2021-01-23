import axios from 'axios'
import { getCharactersURL, getCharacterDetails } from '../api'

export const loadCharacters = () => async (dispatch) => {
  const charactersData = await axios.get(getCharactersURL)

  dispatch({
    type: 'FETCH_CHARACTERS',
    payload: {
      characters: charactersData.data,
    },
  })
}

export const loadCharacterDetails = (name) => async (dispatch) => {
  const characterDetailsData = await axios.get(getCharacterDetails(name))

  dispatch({
    type: 'LOAD_CHARACTER_DETAILS',
    payload: {
      characterDetails: characterDetailsData.data,
    },
  })
}

export const filterCharacters = (characters, name) => (dispatch) => {
  dispatch({
    type: 'FILTER_CHARACTERS',
    payload: {
      filtered:
        name &&
        characters.filter(
          (character) =>
            character.name.toUpperCase().indexOf(name.toUpperCase()) > -1,
        ),
    },
  })
}
