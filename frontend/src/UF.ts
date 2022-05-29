const days: string[] = ['M', 'T', 'W', 'R', 'F', 'S']
export { days }

export interface TimeSlot {
  day: string
  period: number
}

export interface PeriodSlot {
  period: string
  time: string
}

const periodList: PeriodSlot[] = [
  {
    period: '01',
    time: ' 07:25 - 08:15',
  },
  {
    period: '02',
    time: ' 08:30 - 09:20',
  },
  {
    period: '03',
    time: ' 09:35 - 10:25',
  },
  {
    period: '04',
    time: ' 10:40 - 11:30',
  },
  {
    period: '05',
    time: ' 11:45 - 12:35',
  },
  {
    period: '06',
    time: ' 12:50 - 01:40',
  },
  {
    period: '07',
    time: ' 01:55 - 02:45',
  },
  {
    period: '08',
    time: ' 03:00 - 03:50',
  },
  {
    period: '09',
    time: ' 04:05 - 04:55',
  },
  {
    period: '10',
    time: ' 05:10 - 06:00',
  },
  {
    period: '11',
    time: ' 06:15 - 07:05',
  },
  {
    period: 'E1',
    time: ' 07:20 - 08:10',
  },
  {
    period: 'E2',
    time: ' 08:20 - 09:10',
  },
  {
    period: 'E3',
    time: ' 09:20 - 10:10',
  },
]
export { periodList }
