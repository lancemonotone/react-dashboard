import Header from '../global/Header'
import { Box } from '@mui/material'
import { mockBarData } from '../../data/mockData'
import BarChart from '../../components/charts/BarChart'

const Bar = () => {
  return (
      <>
        <Header title={ 'Bar Chart' }
                subtitle={ 'A cool Nivo chart' }/>
        <Box sx={ {
          height: '70vh',
        } }>
          <BarChart isDashboard={ false }
                    data={ mockBarData }/>
        </Box>
      </>
  )
}

export default Bar