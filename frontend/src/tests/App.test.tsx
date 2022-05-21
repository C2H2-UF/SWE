import { render, unmountComponentAtNode } from 'react-dom'

import App from '../App'

let container: any = null

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

describe(App, () => {
  it('loads default page', () => {
    render(<App />, container)
    expect(container.firstChild.className).toBe('CourseListing')
  })

  it('attempt change page w/o classes', () => {
    render(<App />, container)
    const button: Element = container.querySelector('button')

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(container.firstChild.className).toBe('CourseListing')
  })
})
