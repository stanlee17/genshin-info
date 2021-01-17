import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import { Route, Switch } from 'react-router-dom'
import './scss/style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Form />
          <Characters />
        </Route>
        <Route path="/characters/:name">
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default App
