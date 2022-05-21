import { PeriodSlot, days, periodList, TimeSlot } from '../UF'
import { TableCell } from '@material-ui/core'
import { GenerateCell } from './GenerateCell'
import { GenerateHeader } from '../GenerateTable/GenerateHeader'
import { GenerateRow } from '../GenerateTable/GenerateRow'
import { GenerateOnline } from '../GenerateTable/GenerateOnline'
import { TableRow } from '@material-ui/core'
import { Schedule } from '../Course'

export function GenScheduleDisplay(props: {
    schedule: Schedule
    colorMap: Map<string, string>
    height: number
    num: number
}){
    let relHeight: string = props.height.toString() + 'vh'

    const scheduleArray: string[] = []
    let key:string = ""
    let value:string[] = []
    let createIndex: number = 0

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
    for ([key, value] of Object.entries(props.schedule.template)) {
       let i: number = createIndex 
       value.forEach((course)=>{
            scheduleArray[i] = course;

            if(key == "ONLINE"){i++}
            else{i += 14;}
       })
       createIndex++
    }

    //Perhaps call the while async, so it doesn't hold up the rest if this takes a wee bit too long for slow PCs
    let spliceIndex: number = 0
    let rows: JSX.Element[] = []

    //Builds cells for non-online timeslots
    while(spliceIndex < 84){
        let rowArray = scheduleArray.splice(spliceIndex, spliceIndex+14)
        let rowIndex = spliceIndex/14;

        let cellArr: JSX.Element[] = rowArray.map((course)=>{
            let i: number = spliceIndex
            let rowSize: number = 1;

            //Account for multi-period class times
            while(scheduleArray[i+14] == course){
                rowSize++
                scheduleArray[i+14] = ""
                i += 14
            }

            spliceIndex++

            //NEED TO ADD ROW SIZE IN HERE
            return (
                <GenerateCell
                    courseID={course}
                    color={props.colorMap.get(course)}
                />
            )
        })//End of non-online cell creation for this row

        let newRow: JSX.Element = 
            <TableRow style={{ height: relHeight }}>{cellArr}</TableRow>

        //add row to array of rows
        rows[rowIndex] = newRow
    }

    //Build online rows
    while(spliceIndex < scheduleArray.length){
        
    }





    
}