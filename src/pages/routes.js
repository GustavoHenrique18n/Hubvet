import React from 'react'
import Home from './home/Home'
import SecondPage from './second-page/second-page'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const router = () => {

    return(
        <Router>
            <Switch>
                <Route path = "/painel" component = { SecondPage }/>
                <Route path = "/" component = { Home }/>
            </Switch>
        </Router>
    )
  }

  export default router;