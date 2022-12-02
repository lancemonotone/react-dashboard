import Header from '../../components/Header'
import { Box } from '@mui/material'
import { mockPieData } from '../../data/mockData'
import PieChart from '../../components/charts/PieChart'

const Pie = () => {
  return (
      <>
        <Header title={ 'Pie Chart' }
                subtitle={ 'A cool Nivo chart' }/>
        <Box sx={ {
          height: '70vh',
        } }>
          <PieChart isDashboard={ false }
                    data={ mockPieData }/>
        </Box>
      </>
  )
}

export default Pie