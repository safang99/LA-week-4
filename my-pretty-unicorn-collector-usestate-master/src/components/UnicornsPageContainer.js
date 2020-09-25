import React, { useState, useEffect } from "react";

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornsPageContainer = (props) => {
  const[unicorns, setUnicorns] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then(response => response.json())
    .then(unicornBodys => {
      setUnicorns(unicornBodys)
    })
  }, [])

  return(
    <div>
      <UnicornFormContainer />
      <UnicornIndexContainer unicorns={unicorns} />
    </div>
  )
}

export default UnicornsPageContainer
