import React, { useState } from "react";
import { Redirect } from "react-router-dom"

const NewMovieForm = props => {
  const [movieTitle, setMovieTitle] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const onTitleChange = event => {
    setMovieTitle(event.target.value)
  }

  const postNewMovie = () => {
    event.preventDefault()
    fetch("/api/v1/movies", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({ title: movieTitle })
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.errors) {
          console.log("error in the body")
        } else {
          setShouldRedirect(true)
        }
  })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
    return <Redirect to='/movies' />
  }

  return (
    <form onSubmit={postNewMovie}>
      <label>
        Movie Title
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={movieTitle}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default NewMovieForm
