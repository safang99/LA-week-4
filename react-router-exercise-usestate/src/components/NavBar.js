import React from "react";
import { Switch, Route, Link } from "react-router-dom";


import Greeting from "./Greeting"
import Goodbye from "./Goodbye"
import CustomGreeting from "./CustomGreeting"

const NavBar = props => {
  return(
    <div className="row column">
      <div className="navbar">
        <Link to="/greeting">Greeting</Link>
      </div>
      <div className="navbar">
        <Link to="/goodbye">Goodbye</Link>
      </div>
      <div className="navbar">
        <Link to="/custom-greeting">Custom Greetings</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Classic Ron</h1>
      </div>
      <Switch>
        <Route path="/greeting" component={Greeting}/>
        <Route path="/goodbye" component={Goodbye}/>
        <Route path="/custom-greeting" component={CustomGreeting}/>
      </Switch>
    </div>
  )
}

export default NavBar
