import { useState } from 'react'
import './App.css'
import ScheduleListing from './Schedule/ScheduleListing'
import CourseListing from './CourseListing/CourseListing'
import { Course } from './Course'
import { TimeSlot } from './UF'

function App() {
  const [renderWin, setRenderWin] = useState('Courses')
  const [courseList, setCourseList] = useState<Course[]>([])
  const [colorMap, setColorMap] = useState<Map<string, string>>(
    new Map<string, string>(),
  )
  const [filteredTimes, setFilteredTimes] = useState<TimeSlot[]>([])

  //Determine if we're supposed to load CourseListing or ScheduleListing
  if (renderWin == 'Courses') {
    return (
      <CourseListing
        setRenderWin={setRenderWin}
        setCourseList={setCourseList}
        courseList={courseList}
        colorMap={colorMap}
        setColorMap={setColorMap}
        filteredTimes={filteredTimes}
        setFilteredTimes={setFilteredTimes}
      />
    )
  } else {
    return (
      <ScheduleListing
        setRenderWin={setRenderWin}
        courseList={courseList}
        colorMap={colorMap}
        setColorMap={setColorMap}
        filteredTimes={filteredTimes}
      />
    )
  }
}

export default App
