import { PeriodSlot, days, periodList, TimeSlot } from '../UF'
import { TableCell } from '@material-ui/core'
import { GenerateCell } from './GenerateCell'
import { TableRow } from '@material-ui/core'
import { Schedule } from '../Course'

//Generate each row of the schedule
export function GenerateRow(props: {
  periodSlot: PeriodSlot
  schedule: Schedule
  colorMap: Map<string, string>
  height: number
}) {
  let cellArr: JSX.Element[] = []
  let relHeight: string = props.height.toString() + 'vh'
  //First column displays period number and time range.
  cellArr.push(
    <TableCell scope="row" style={{ width: '12%', fontSize: '1.75vh' }}>
      <b>{props.periodSlot.period + ': '}</b>

      {props.periodSlot.time}
    </TableCell>,
  )

  let key: string = ''
  for (key in props.schedule.template) {
    if (key != 'ONLINE') {
      let index: number
      if (props.periodSlot.period[0] == 'E') {
        index = parseInt(props.periodSlot.period[1]) + 10 //E1 -> 11, E2 -> 12, E3 -> 13
      } else {
        index = parseInt(props.periodSlot.period) - 1 //indicies[0-10] for sections [1-11]
      }
      cellArr.push(
        <GenerateCell
          courseID={(props.schedule.template as any)[key][index]}
          color={props.colorMap.get(
            (props.schedule.template as any)[key][index],
          )}
        />,
      )
    }
  }

  return <TableRow style={{ height: relHeight }}>{cellArr}</TableRow>
}

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
