import { TableCell, Typography } from '@material-ui/core'

//Create a cell for the schedule display
export function GenerateCell(props: {
  courseID: string
  color: string | undefined
  rowSpan: number
  colSpan: number
}) {
  //let color: string | undefined = "white"
  let id: string = props.courseID
  
  if (props.courseID == 'reserved') {
    id = ''
  }
 
  return (
    <TableCell
      align="center"
      padding="none"
      scope="row"
      style={{
        width: '12%',
        height: '1vh',
        fontSize: 12,
        background: props.color,
      }}
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      onClick={() => {}}
      onMouseEnter={() => {}}
    >
      <Typography style={{ color: 'white' }}>{id}</Typography>
    </TableCell>
  )
}

export default GenerateCell

