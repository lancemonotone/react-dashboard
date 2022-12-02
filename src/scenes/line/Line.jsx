import Header from '../global/Header'
import { Box } from '@mui/material'
import { mockLineData } from '../../data/mockData'
import LineChart from '../../components/charts/LineChart'

const Line = () => {
  return (
      <>
        <Header title={ 'Line Chart' }
                subtitle={ 'A cool Nivo chart' }/>
        <Box sx={ {
          height: '70vh',
        } }>
          <LineChart isDashboard={ false }
                     data={ mockLineData }/>
        </Box>
      </>
  )
}

export default Line