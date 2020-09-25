import React, { useState, useEffect } from "react"

const LauncherShow = (props) => {
  const [selectedLauncher, setSelectedLauncher] = useState({
    id: "",
    name: "",
    bio: ""
  })

  useEffect(() => {
    fetch(`/api/v1/launcher/${props.match.params.id}`)
    .then(response => response.json())
    .then(launcherBody => {
      setSelectedLauncher(launcherBody)
    })

  })
  return(
    <div>
      <h2>{selectedLauncher.name}</h2>
      <p>{selectedLauncher.bio}</p>
    </div>
  )
}
export default LauncherShow
