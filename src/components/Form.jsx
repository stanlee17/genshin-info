import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterCharacters } from '../actions/charactersAction'

const Form = () => {
  const [query, setQuery] = useState()

  const dispatch = useDispatch()

  const { characters } = useSelector((state) => state.characters)

  const changeHandler = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    dispatch(filterCharacters(characters, query))
  }, [dispatch, query, characters])

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form__search"
        placeholder="Search for a character..."
        onChange={changeHandler}
      />
    </form>
  )
}

export default Form
