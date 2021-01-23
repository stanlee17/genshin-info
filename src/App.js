import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Characters from './components/Characters'
import CharacterDetails from './components/CharacterDetails'
import { Route, Switch } from 'react-router-dom'
import './scss/style.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Form />
            <Characters />
          </Route>
          <Route path="/characters/:name">
            <CharacterDetails />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
