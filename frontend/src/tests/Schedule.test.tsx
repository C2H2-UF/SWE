import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Container, render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ScheduleListing from '../Schedule/ScheduleListing'

let container: any = null

const mockfn = jest.fn()
const scheduleListing = (
  <ScheduleListing
    setRenderWin={mockfn}
    courseList={[]}
    colorMap={new Map<string, string>()}
    setColorMap={mockfn}
    filteredTimes={[]}
  />
)

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe(ScheduleListing, () => {
  it('loads defaults', () => {
    act(() => {
      render(scheduleListing, container)
    })
    const selCourse: Element | null = document.getElementById('loading')
    expect(selCourse?.childElementCount).toBe(0)
  })
})
