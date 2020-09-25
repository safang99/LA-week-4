import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom" //hint-hint

import UnicornsPageContainer from "./UnicornsPageContainer"

const App = () => {

  return(
    <BrowserRouter>
      <Route exact path="/unicorns" component={UnicornsPageContainer}/>
    </BrowserRouter>
  )
}

export default App
