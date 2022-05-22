import { PeriodSlot, days, periodList, TimeSlot } from '../UF'
import { Table, TableBody } from '@material-ui/core'
import { TableContainer, TableHead } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { GenerateCell } from './GenerateCell'
import { GenerateHeader } from '../GenerateTable/GenerateHeader'
import { GenerateOnline } from '../GenerateTable/GenerateOnline'
import { TableRow, TableCell } from '@material-ui/core'
import { Schedule } from '../Course'

export function GenScheduleDisplay(props: {
  schedule: Schedule
  colorMap: Map<string, string>
  height: number
  num: number
}) {
  let relHeight: string = props.height.toString() + 'vh'

  //convert schedule from map to array
  const scheduleArray: string[] = schedMapToArray(props.schedule)

  //Perhaps call the while async, so it doesn't hold up the rest if this takes a wee bit too long for slow PCs
  let spliceIndex: number = 0
  let rows: JSX.Element[] = []
  console.log(props.schedule.template)
  //Builds cells for non-online timeslots
  while (spliceIndex < 84) {
    let rowArray = scheduleArray.slice(spliceIndex, spliceIndex + 6)
    let rowIndex = spliceIndex / 6
    //console.log(rowIndex +": ", rowArray)

    console.log("before: " + spliceIndex)
    //Generate an array of cells for one row
    console.log(rowArray)
    let cellArr: JSX.Element[] = rowArray.map((course, index) => {
      if(course == "REMOVE"){
        return (<></>)
      }

      let i: number = spliceIndex+index
      let rowSize: number = 1
      console.log(course)
      //Account for multi-period class times
      while (course != "" && scheduleArray[i + 6] == course) {
        rowSize++
        scheduleArray[i + 6] = "REMOVE"
        i += 6
      }
      console.log(rowIndex + ": " + rowSize)
      return (
        <GenerateCell courseID={course} rowSpan={rowSize} colSpan={1} color={props.colorMap.get(course)} />
      )
    }) //End of non-online cell creation for this row
    spliceIndex += 6
    console.log("after: " + spliceIndex)

    //Add time display to row
    cellArr.splice(0,0,
      <TableCell scope="row" style={{ width: '12%', fontSize: '1.75vh' }}>
      <b>{periodList[rowIndex].period + ': '}</b>

      {periodList[rowIndex].time}
      </TableCell>
    )
    let newRow: JSX.Element = (
      <TableRow style={{ height: relHeight }}>{cellArr}</TableRow>
    )
    console.log(newRow)
    //add row to array of rows
    rows[rowIndex] = newRow
  }

  //Build online rows
  let onlineArray: JSX.Element[] = props.schedule.template.ONLINE.map(
    (courseID) => (
      <GenerateOnline
        courseID={courseID}
        color={props.colorMap.get(courseID)}
        height={props.height}
      />
    ),
  )

  rows.concat(onlineArray)
  
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

//Convert schedule from a map to a 1d array
//Every 14 indices represents one period/row (across the entire week)
//i.e. 0-13 represents Period 1 from 7:25-815 across the entire week
/*
      M  |[  0 - 13,
      T  |  14 - 27.
      W  |  28 - 41,
      R  |  42 - 55,
      F  |  56 - 69,
      S  |  70 - 83,
  ONLINE |  84 - end  ]
*/
function schedMapToArray(schedule: Schedule) {
  const scheduleArray: string[] = []
  let key: string = ''
  let value: string[] = []
  let index: number = 0

  for ([key, value] of Object.entries(schedule.template)) {
    let i: number = index
    value.forEach((course) => {
      scheduleArray[i] = course

      if (key == 'ONLINE') {
        i++
      } else {
        i += 6
      }
    })
    if(key!= 'ONLINE')
      index++
  }
  return scheduleArray
}
