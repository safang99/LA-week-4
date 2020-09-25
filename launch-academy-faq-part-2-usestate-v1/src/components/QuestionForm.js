import React, { useState } from 'react';
import _ from 'lodash';
import ErrorList from "./ErrorList";

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["question", "answer"]
    requiredFields.forEach(field => {
      if (newQuestion[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onQuestionSubmitted(newQuestion)
    }
  }

  const clearForm = () => {
    event.preventDefault()
    setNewQuestion({
      question: "",
      answer: ""
    })
    setErrors({})
  }


  return(
    <div className="callout primary">
      <form onSubmit={onSubmitHandler}>
        <ErrorList errors={errors} />
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          name="question"
          type="text"
          value={newQuestion.question}
          onChange={handleInputChange}>
        </input>

        <label htmlFor="answer">Answer:</label>
        <input
          id="answer"
          name="answer"
          type="text"
          value={newQuestion.answer}
          onChange={handleInputChange}>
        </input>

        <input type="submit" value="Submit" />
        <button type="button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  )
}

export default QuestionForm
