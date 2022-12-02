import Header from '../global/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from '@mui/icons-material'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import BarChart from '../../components/charts/BarChart'
import GeographyChart from '../../components/charts/GeographyChart'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box display={ 'flex' } alignItems={ 'center' } justifyContent={ 'space-between' }>
          <Header title={ 'DASHBOARD' }
                  subtitle={ 'Welcome to your dashboard' }/>

          <Button sx={ {
            backgroundColor: colors.blue[ 700 ],
            color          : colors.grey[ 100 ],
            fontSize       : '.8rem',
            padding        : '1.2rem 2.4rem',
          } }>
            <DownloadOutlined sx={ { marginInlineEnd: 1.2 } }/>
            Download Reports
          </Button>

        </Box>

        <Box display={ 'grid' } gridTemplateColumns={ 'repeat( 12, 1fr)' } gridAutoRows={ '8.75rem' } gap={ '1.25rem' }>

          <StatBox span={ 'span 3' }
                   title={ '12,250' }
                   subtitle={ 'Emails Sent' }
                   progress={ 0.75 }
                   increase={ '+5.2%' }
                   icon={ <Email sx={ { fontSize: '2rem', color: colors.green[ 600 ] } }/> }/>

        </Box>
      </>
  )
}

export default Dashboard