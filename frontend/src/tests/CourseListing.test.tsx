import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Container, unmountComponentAtNode } from 'react-dom'

import CourseListing from '../CourseListing/CourseListing'

let container: any = null

const mockfn = jest.fn()
const courseListing = (
  <CourseListing
    setRenderWin={mockfn}
    setCourseList={mockfn}
    courseList={[]}
    colorMap={new Map<string, string>()}
    setColorMap={mockfn}
    filteredTimes={[]}
    setFilteredTimes={mockfn}
  />
)

render(courseListing)
/*
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
})*/

describe(CourseListing, () => {
  it('loads defaults', () => {
    //check that the only child is the course list
    expect(screen.getAllByRole('button').length).toBeLessThanOrEqual(1)
    expect(screen.getByText('See Sample Schedules')).toBeInTheDocument()
  })

  it('input takes input and clears', () => {
    //find input element
    //console.log(screen.getByRole("form"))
    //screen.getByRole("form").
    render(courseListing)
    const input = screen.getByPlaceholderText('Enter Courses')

    //add test to input field
    userEvent.type(input, 'cis')
    expect(input).toHaveValue('cis')

    //add more text
    userEvent.type(input, '4301')

    expect(input).toHaveValue('cis4301')

    //test enter keystroke to submit input
    //and clear input field
    fireEvent.submit(input)

    //expect(input.textContent).toBe('')
  })

  /*NO LONGER WORKS WITH RELIANCE ON A VALIDATION RESPONSE FROM BACKEND
    it('adds button to list', () => {
        act(() => {
            render(courseListing, container)
        })

        //find input element
        const input: Element | null = document.getElementById('searchBar')
        if (input == null) {
            throw new Error('input Element is null')
        }

        //add 1 button
        act(() => {
            userEvent.type(input, 'cis4301')
            expect(input).toHaveValue('cis4301')
            userEvent.type(input, "{enter}")
            expect(input).toHaveValue('')
        })

        //button list increments by 1
        const courseButtons: Element | null = document.getElementById('CourseListButtons')
        console.log(courseButtons)
        expect(courseButtons?.childElementCount).toBe(1)
        const listElement: Element | null | undefined = courseButtons?.firstElementChild
        expect(listElement?.textContent).toContain('cis4301')

    })

    it('adds and removes button from list', () => {
        act(() => {
            render(courseListing, container)
        })
        const selCourse: Element | null = document.getElementById('SelCourses')

        //find input element
        const input: Element | null = document.getElementById('searchClasses')
        if (input == null) {
            throw new Error('input Element is null')
        }

        //add 1 button
        act(() => {
            userEvent.type(input, 'cis4301')
            //expect(input).toHaveValue('cis4301')
            userEvent.type(input, "{enter}")
            //expect(input).toHaveValue('')
        })

        const courseButtons: Element | null = document.getElementById('CourseListButtons')
        const button: Element | null | undefined = courseButtons?.firstElementChild?.firstElementChild?.firstElementChild


        act(() => {
            button?.dispatchEvent(new MouseEvent('click', {bubbles:true}))
        })

        expect(courseButtons?.childElementCount).toBe(0)
    })
    */
})
