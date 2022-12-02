import Header from '../global/Header'
import { Box } from '@mui/material'
import { mockGeographyData } from '../../data/mockData'
import GeographyChart from '../../components/charts/GeographyChart'

const Geography = () => {
  return (
      <>
        <Header title={ 'Geography Chart' }
                subtitle={ 'A cool Nivo chart' }/>
        <Box sx={ {
          height: '70vh',
        } }>

          <GeographyChart isDashboard={ false }
                          data={ mockGeographyData }/>
        </Box>
      </>
  )
}

export default Geography