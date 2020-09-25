import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import LauncherShow from "./LauncherShow"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {
    fetch("/api/v1/launchers")
    .then(response => response.json())
    .then(launchersBody => {
      setLaunchers(launchersBody)
    })
  }, [])

  const launcherList = launchers.map((launcher) => {
    return(
      <li key={launcher.id}>
        <Link
          to={`/launchers/${launcher.id}`}>
          {launcher.name}
        </Link>
      </li>
    )
  })

  return(
    <div>
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
