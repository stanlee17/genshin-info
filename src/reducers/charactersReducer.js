const initialState = {
  characters: [],
  characterDetails: {},
  filtered: [],
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return {
        ...state,
        characters: action.payload.characters,
      }
    case 'LOAD_CHARACTER_DETAILS':
      return {
        ...state,
        characterDetails: action.payload.characterDetails,
      }
    case 'FILTER_CHARACTERS':
      return {
        ...state,
        filtered: action.payload.filtered,
      }
    default:
      return { ...state }
  }
}

export default charactersReducer
