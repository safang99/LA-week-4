import React, { useState, useEffect } from "react";
import UnicornTile from "./UnicornTile"

const UnicornIndexContainer = ({unicorns}) => {


  const listOfUnicorns = unicorns.map((unicorn) => {
    return(
      <UnicornTile
        key={unicorn.id}
        name={unicorn.unicornName}
      />
    )
  })


  return(
    <ul>
      {listOfUnicorns}
    </ul>
  )
}

export default UnicornIndexContainer
