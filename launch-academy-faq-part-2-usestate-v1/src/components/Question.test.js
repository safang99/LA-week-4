import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Question from "../../src/components/Question"

describe("Question", () => {
  let wrapper, onClickMock

  beforeEach(() => {
    wrapper = mount(
      <Question
        question={"What is your camp like?"}
        answer={"Pretty nice I guess"}
        selected={}
        handleClick={onClickMock}
      />
    )
  })

  it("should render a Question component that has an h5 with question text", () => {
    expect(wrapper.find("h5")).toBeDefined()
    expect(wrapper.find("h5").text()).toEqual("What is your camp like?")
  })
})
