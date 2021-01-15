import axios from 'axios'
import { getCharactersURL } from '../api'

export const loadCharacters = (name) => async (dispatch) => {
  const charactersData = await axios.get(getCharactersURL)

  dispatch({
    type: 'FETCH_CHARACTERS',
    payload: {
      characters: charactersData.data,
    },
  })
}
