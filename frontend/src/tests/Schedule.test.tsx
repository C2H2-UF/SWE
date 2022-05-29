import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'

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

describe('ScheduleListing', () => {
  it('loads defaults', () => {
    render(scheduleListing, container)

    expect(screen.getByRole('img').childElementCount).toBe(0)
  })
})
