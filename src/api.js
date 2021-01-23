const base_url = 'https://api.genshin.dev'

export const getCharactersURL = `${base_url}/characters/all`

export const getCharacterDetails = (name) => {
  return `${base_url}/characters/${name}`
}

export const getCharactersIconURL = (name, vision) => {
  if (name === 'traveler') {
    return `${base_url}/characters/${name}-${vision}/icon`
  }

  return `${base_url}/characters/${name}/icon`
}
