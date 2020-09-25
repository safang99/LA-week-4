import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import LauncherShow from "./LauncherShow"


const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {
    fetch('/api/v1/launchers')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(launcherBody => {
      setLaunchers(launcherBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const launcherList = launchers.map((launcher) => {

    return(
      <Link
        key={launcher.id}
        to={`/launchers/${launcher.id}`}
      >
        <li>
          {launcher.name}
        </li>
      </Link>
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
