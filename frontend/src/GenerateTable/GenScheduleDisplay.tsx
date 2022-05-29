import { periodList } from '../UF'
import { Table, TableBody } from '@material-ui/core'
import { TableContainer, TableHead } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { GenerateCell } from './GenerateCell'
import { GenerateHeader } from '../GenerateTable/GenerateHeader'
import { TableRow, TableCell } from '@material-ui/core'
import { Schedule } from '../Course'

export function GenScheduleDisplay(props: {
  schedule: Schedule
  colorMap: Map<string, string>
  height: number
  num: number
}) {
  let relHeight: string = props.height.toString() + 'vh'
  const schedArr: JSX.Element[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  console.log('template: ', props.schedule.template)
  //Loop through each day in a schedule
  let day: string
  let column: string[]

  for ([day, column] of Object.entries(props.schedule.template)) {
    let period = 0
    let courses = column.map((period) => period)
    if (day == 'ONLINE') {
      courses.forEach((courseID) => {
        schedArr.push([
          <GenerateCell
            courseID={courseID}
            rowSpan={1}
            colSpan={6}
            color={props.colorMap.get(courseID)}
          />,
        ])
      })
    } else {
      //At each day, fill up all 14 subarrays in schedArr
      let skip = 0
      courses.forEach((course) => {
        let rowSpan = 1
        let i = period

        if (skip > 0) {
          skip--
          period++
          return
        } else {
          while (
            course != '' &&
            course != 'reserved' &&
            courses[i + 1] == course
          ) {
            rowSpan++
            console.log(i + ': ' + course)
            courses[i + 1] = 'DELETE'
            i++
            skip++
          }

          let cell: JSX.Element
          if (course == 'DELETE') {
            cell = <></> //Allows for overlaps from multi-period blocks
          } else {
            cell = (
              <GenerateCell
                courseID={course}
                rowSpan={rowSpan}
                colSpan={1}
                color={props.colorMap.get(course)}
              />
            )
          }

          //Add cell to that particular period row
          schedArr[period].push(cell)
          period++
        }
      })
    }
  }

  //console.log(schedArr)
  //Create rows with each subarray
  let rows: JSX.Element[] = []
  let period: number = 0

  schedArr.forEach((row) => {
    //console.log(period + ": ", row)
    let label: JSX.Element
    if (period < 14) {
      //Insert time slot label in leftmost column
      label = (
        <TableCell
          scope="row"
          style={{ width: '12%', height: '1vh', fontSize: '1.75vh' }}
        >
          <b>{periodList[period].period + ': '}</b>
          <span>{periodList[period].time}</span>
        </TableCell>
      )
    } else {
      //Add online
      label = (
        <TableCell
          align="center"
          padding="none"
          scope="row"
          style={{
            width: '12%',
            height: '1vh',
            fontSize: '1.75vh',
            background: 'white',
          }}
        >
          <b>{'Online: '}</b>
        </TableCell>
      )
    }

    row.unshift(label)
    rows.push(<TableRow style={{ height: relHeight }}>{row}</TableRow>)

    period++
  })

  //return
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: '84.5vh', minHeight: '84.5vh' }}
    >
      <Table size="small">
        <TableHead>
          <GenerateHeader
            headerType={'schedule'}
            height={props.height}
            num={props.num}
          />
        </TableHead>

        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  )
}
