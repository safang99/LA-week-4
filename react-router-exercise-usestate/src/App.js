import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Greeting from "./components/Greeting"
import Goodbye from "./components/Goodbye"
import NavBar from "./components/NavBar"
import CustomGreeting from "./components/CustomGreeting"

const App = props => {
  return(
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
  )
}

export default App
