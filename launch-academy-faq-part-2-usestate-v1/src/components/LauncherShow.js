import React, { useState, useEffect } from "react";

const LauncherShow = props => {
  const [currentLauncher, setCurrentLauncher] = useState({
    id: "",
    name: "",
    bio: ""
  })
  useEffect(() => {
    fetch(`/api/v1/launcher/${props.match.params.id}`)
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
      setCurrentLauncher(launcherBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div>
      <h3>{currentLauncher.name}</h3>
      <p>{currentLauncher.bio}</p>
    </div>
  )
}

export default LauncherShow
