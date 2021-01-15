const initialState = {
  characters: [],
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return {
        ...state,
        characters: action.payload.characters,
      }
    default:
      return { ...state }
  }
}

export default charactersReducer
