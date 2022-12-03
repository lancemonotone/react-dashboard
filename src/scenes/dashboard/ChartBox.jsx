import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import { tokens } from '../../theme'

const ChartBox = ( { chartData } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box backgroundColor={ colors.primary[ 400 ] }
             borderRadius={ 1 }
             gridColumn={ `span ${ chartData.columns }` }
             gridRow={ `span ${ chartData.rows }` }>

          <Box display={ 'flex' }
               alignItems={ 'center' }
               justifyContent={ 'space-between' }
               padding={ 2 }
               paddingBlockEnd={ 0 }>

            <Box display={ 'flex' } flexDirection={ 'column' } alignItems={ 'start' }>

              <Typography variant={ 'h5' } color={ colors.grey[ 100 ] }>
                { chartData.title }
              </Typography>

              { chartData.subtitle && <Typography variant={ 'h2' } color={ colors.green[ 500 ] }>
                { chartData.subtitle }
              </Typography> }

            </Box>

            <IconButton>
              <DownloadOutlined sx={ { color: colors.green[ 500 ] } }/>
            </IconButton>

          </Box>

          <Box height={ '80%' } marginBlockStart={ -2 }>
            { chartData.chart }
          </Box>
        </Box>
      </>
  )
}

export default ChartBox