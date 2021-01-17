import React from 'react'
import { useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { name } = useParams()

  return <div>{name}</div>
}

export default CharacterDetail
