import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';


const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  useEffect(() => {
    fetch("/api/v1/questions")
    .then(response => response.json())
    .then(questionsBody => {
      setQuestions(questionsBody)
    })
  }, [])

  const onSubmitHandler = (question) => {
    fetch("/api/v1/questions", {
      method: "POST",
      body: JSON.stringify(question)
    })
    .then(response => response.json())
    .then(questionBody => {
      setQuestions([...questions, questionBody])
    })
  }

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <div className="question-form">
        <QuestionForm onSubmitHandler={onSubmitHandler}/>
      </div>
    </div>
  )

}

export default FAQContainer;
