const initialState = {
  characters: [],
  filtered: [],
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return {
        ...state,
        characters: action.payload.characters,
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
