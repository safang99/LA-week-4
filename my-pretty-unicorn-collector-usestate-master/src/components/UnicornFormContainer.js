import React, { useState } from "react"


const UnicornFormContainer = (props) => {
 const [unicornData, setUnicornData] =useState({
   unicornName: "",
   description: ""
 })

 const handleInputChange = (event) => {
   setUnicornData({
     ...unicornData,
     [event.currentTarget.name]: event.currentTarget.value
   })
 }

  return(
    <div>
      <h3>Enter a unicorn here!</h3>
      <form>

        <label htmlFor="unicornName">Name:</label>
        <input
          id="unicornName"
          name="unicornName"
          value={unicornData.unicornName}
          onChange={handleInputChange}>
        </input>

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={unicornData.description}
          onChange={handleInputChange}>
        </input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default UnicornFormContainer
