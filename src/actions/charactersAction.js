import axios from 'axios'
import { getCharactersURL } from '../api'

export const loadCharacters = () => async (dispatch) => {
  const charactersData = await axios.get(getCharactersURL)

  dispatch({
    type: 'FETCH_CHARACTERS',
    payload: {
      characters: charactersData.data,
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
