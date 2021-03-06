import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Expenses from './Pages/Expenses'

const Main = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Switch>
        <Route
          path="/expenses/:year"
          render={() => (
            <Expenses />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Home />
          )}
        />
      </Switch>
    </div>
  );
}
 
export default Main;