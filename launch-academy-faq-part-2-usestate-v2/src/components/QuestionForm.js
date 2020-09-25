import React, { useState } from "react"

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })
  const [errors, setErrors] = useState("")

  const handleInputChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let status = true
    let requiredFields =["question", "answer"]
    requiredFields.forEach((field) => {
      if (newQuestion[field].trim() === "") {
        status = false
        setErrors("Something still need to be filled out")
      }
    })
    return status
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onSubmitHandler(newQuestion)
      clearForm()
    }
  }

  const clearForm = () => {
    setNewQuestion({
      question: "",
      answer: ""
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          name="question"
          value={newQuestion.question}
          onChange={handleInputChange}>
        </input>

        <label htmlFor="answer">Answer:</label>
        <input
          id="answer"
          name="answer"
          value={newQuestion.answer}
          onChange={handleInputChange}>
        </input>
        <div>
          <h3>{errors}</h3>
        </div>
        <div className="button-group">
          <input type="submit" value="Submit" />
          <button type="button" onClick={clearForm}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default QuestionForm
