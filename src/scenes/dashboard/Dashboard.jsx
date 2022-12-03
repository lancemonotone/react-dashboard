import Header from '../global/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockBarData, mockGeographyData, mockLineData, mockPieData } from '../../data/mockData'
import { mockTransactions } from '../../data/mockData'
import {
  DownloadOutlined,
} from '@mui/icons-material'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import BarChart from '../../components/charts/BarChart'
import GeographyChart from '../../components/charts/GeographyChart'
import StatBoxes from './StatBoxes'
import ChartBox from './ChartBox'
import RecentTransactions from './RecentTransactions'

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

          {/* 4 StatBoxes */ }
          <StatBoxes/>

          {/* Revenue Chart */ }
          <ChartBox chartData={ {
            columns : 8,
            rows    : 2,
            title   : 'Revenue Generated',
            subtitle: '$59,342.32',
            chart   : <LineChart isDashboard={ true } data={ mockLineData }/>,
          } }/>

          {/* Recent Transactions */ }
          <RecentTransactions/>

          {/* 3 ChartBoxes */ }
          <ChartBox chartData={ {
            columns: 4,
            rows   : 2,
            title  : 'Campaign',
            chart  : <PieChart isDashboard={ true } data={ mockPieData }/>,
          } }/>

          <ChartBox chartData={ {
            columns: 4,
            rows   : 2,
            title  : 'Sales Quantity',
            chart  : <BarChart isDashboard={ true } data={ mockBarData }/>,
          } }/>

          <ChartBox chartData={ {
            columns: 4,
            rows   : 2,
            title  : 'Traffic By Country',
            chart  : <GeographyChart isDashboard={ true } data={ mockGeographyData }/>,
          } }/>

        </Box>
      </>
  )
}

export default Dashboard