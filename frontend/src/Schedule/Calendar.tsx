import { Table, TableBody } from '@material-ui/core'
import { TableContainer, TableHead } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Schedule } from '../Course'
import { periodList } from '../UF'
import { GenerateHeader } from '../GenerateTable/GenerateHeader'
import { GenerateOnline } from '../GenerateTable/GenerateOnline'
import { GenScheduleDisplay } from '../GenerateTable/GenScheduleDisplay'

function Calendar(
  // Reference for schedule calendar:
  // https://github.com/Luc-Olsthoorn/Registr/blob/master/server/src/client/Calendar.js
  props: {
    schedule: Schedule
    colorMap: Map<string, string>
    scheduleNum: number
  },
) {
  let rowNum: number = props.schedule.template.ONLINE.length + 15
  let rowHeight: number = 84.45 / rowNum
  
  //Return a single sample schedule
  return (
    <GenScheduleDisplay
      schedule={props.schedule}
      colorMap={props.colorMap}
      height={rowHeight}
      num={props.scheduleNum}
    />
  )
}

export default Calendar

/*
    <GenScheduleDisplay
      schedule={props.schedule}
      colorMap={props.colorMap}
      height={rowHeight}
      num={props.scheduleNum}
    />
*/
/*
    <TableContainer
      component={Paper}
      style={{ maxHeight: '84.5vh', minHeight: '84.5vh' }}
    >
      <Table size="small">
        <TableHead>
          <GenerateHeader
            headerType={'schedule'}
            height={rowHeight}
            num={props.scheduleNum}
          />
        </TableHead>

        <TableBody>
          {periodList.map((row) => (
            <GenerateRow
              periodSlot={row}
              schedule={props.schedule}
              colorMap={props.colorMap}
              height={rowHeight}
            />
          ))}

          {props.schedule.template.ONLINE.map((courseID) => (
            <GenerateOnline
              courseID={courseID}
              color={props.colorMap.get(courseID)}
              height={rowHeight}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
*/
