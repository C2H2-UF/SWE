import { days, TimeSlot } from '../UF'
import { TableCell } from '@material-ui/core'
import { TableRow } from '@material-ui/core'

export function FilterRow(props: {
  filteredTimes: TimeSlot[]
  period: string
  handleCellClick: (event: any) => void
}) {
  let cellArr: JSX.Element[] = []
  let periodIndex = 0
  if (props.period[0] == 'E') {
    periodIndex = parseInt(props.period[1]) + 10 //E1 -> 11, E2 -> 12, E3 -> 13
  } else {
    periodIndex = parseInt(props.period) - 1 //indicies[0-10] for sections [1-11]
  }
  //First column displays period number and time range.
  cellArr.push(
    <TableCell
      align="center"
      style={{ padding: 0, background: 'lightcyan', fontSize: 11 }}
    >
      {props.period}
    </TableCell>,
  )
  days.map((value: string, key: number) => {
    let backgroundColor = 'white'
    const timeSlot: TimeSlot = {
      day: value,
      period: periodIndex,
    }

    props.filteredTimes.forEach((ts: TimeSlot) => {
      if (ts.day == timeSlot.day && ts.period == timeSlot.period) {
        backgroundColor = 'gray'
        return true
      }
    })

    cellArr.push(
      <TableCell
        onClick={props.handleCellClick}
        style={{
          width: '12%',
          height: '3vh',
          padding: 0,
          background: backgroundColor,
        }}
      />,
    )
  })

  return <TableRow>{cellArr}</TableRow>
}
