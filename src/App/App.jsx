import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from '../Nav/Nav'
import Work from '../Work/Work'

// styles
import './App.scss'

const App = () => {
  return (
    <main>
      <BrowserRouter>

          <Nav/>

          <Switch>

            <Route path="/work">
              <Work/>
            </Route>

            <Route path="/about">
              <p>about</p>
            </Route>

            <Route path="/resume">
              <p>resume</p>
            </Route>

            {/* project pages here */}

            <Redirect from="/" exact to="/work" />
          </Switch>

      </BrowserRouter>
    </main>

  );
}

export default App;
