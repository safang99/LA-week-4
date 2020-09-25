import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"

import TwitterFeed from "./TwitterFeed"
import Tweet from "./Tweet"

Enzyme.configure({ adapter: new Adapter() })

describe("TwitterFeed", () => {
  let wrapper, onClickMock
  let data = [
    {
      id: 1,
      text: "This doesn't look like Kansas",
      user: {
        name: "Todo",
        profile_image_url:
          "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
      }
    }
  ]

  beforeEach(() => {
    onClickMock = jest.fn()
      wrapper = mount(
          <TwitterFeed data={data} />
      )
  })

  //YOUR TEST CODE HERE
  it("should mount with selected tweet set to null", () => {
    expect(wrapper.find(Tweet).props().className).toEqual("")
  })

  it("should mount with selected tweet set to null", () => {
    expect(wrapper.find("p").text()).toBe("This doesn't look like Kansas")
  })

  it("should change the className prop when clicked", () => {
    const priorClassName = wrapper.find(Tweet).props().className

    act(() => {
      wrapper
        .find(Tweet)
        .props()
        .handleClick()
    })
    wrapper.update()
    expect(wrapper.find(Tweet).props().className).not.toEqual(priorClassName)
  })
})
