import { Schedule } from '../Course'
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
