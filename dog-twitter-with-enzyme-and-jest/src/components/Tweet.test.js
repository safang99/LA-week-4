import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import Tweet from "./Tweet"

Enzyme.configure({ adapter: new Adapter() })

describe("Tweet", () => {
  let wrapper, onClickMock
  let data = {
      id: 1,
      text: "This doesn't look like Kansas",
      user: {
        name: "Todo",
        profile_image_url:
          "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
      }
    }

    beforeEach(() => {
      wrapper = mount(
        <Tweet
          key={data.id}
          tweet={data}
          handleClick={onClickMock}
          className="selected"
        />
      )
    })

    it("should render the HTML tags we expect", () => {
      expect(wrapper.find('p')).toBeDefined()
    })

    it("should render the p element with the text from props we expect", () => {
      expect(wrapper.find('p').text()).toBe("This doesn't look like Kansas")
    })

    it("should render the HTML tags we expect", () => {
      expect(wrapper.find('img')).toBeDefined()
    })

    it("should render the img element with the text from props we expect", () => {
      expect(wrapper.find('img').props()["src"]).toBe("http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg")
    })

    it("should render the HTML tags we expect", () => {
      expect(wrapper.find('span')).toBeDefined()
    })

    it("should render the span element with the text from props we expect", () => {
      expect(wrapper.find('span').text()).toBe("Todo")
    })
})
