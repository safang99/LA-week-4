import React, { useState } from "react"

const ratings = [0, 20, 40, 60, 80, 100]
const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: ""
  })

  // const ratingOptions = [""].concat(ratings).map((rating) => {
  //   return(
  //     <option key={rating} value={rating}>{rating}</option>
  //   )
  // })

  const optionsArray = [""].concat(ratings)
  const ratingOptions = optionsArray.map(rating => {
    const starNumber = rating / 20
    let ratingPhrase = ""
    if (rating === "") {
      ratingPhrase = "Please choose a number of stars"
    }
    else if (rating === 20) {
      ratingPhrase = `${starNumber} star`
    } else {
      ratingPhrase = `${starNumber} stars`
    }

    return (
      <option key={rating} value={rating}>
        {ratingPhrase}
      </option>
    )
  })

  const onSubmitHandler = event => {
    event.preventDefault()
    props.onReviewSubmit(newReview)
    setNewReview({
      name: "",
      rating: "",
      content: ""
    })
  }


  const handleInputChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={newReview.name}>
        </input>

        <label htmlFor="rating">
          Rating:
          <select
            type="text"
            id="rating"
            name="rating"
            onChange={handleInputChange}
            value={newReview.rating}>
              {ratingOptions}
            </select>
        </label>

        <label htmlFor="content">Description</label>
        <textarea
          id="content"
          name="content"
          onChange={handleInputChange}
          value={newReview.content}
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}


export default ReviewForm
