import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ( { span, title, subtitle, icon, progress, increase, progressCircleSize = '40' } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box gridColumn={ span }
             backgroundColor={ colors.primary[ 400 ] }
             display={ 'flex' }
             flexDirection={ 'column' }
             alignItems={ 'center' }
             justifyContent={ 'center' }
             borderRadius={ 1 }>

          <Box display={ 'flex' } flexDirection={ 'column' } alignItems={ 'center' } justifyContent={ 'space-between' }>

            { icon }

            <Typography variant={ 'h4' } color={ colors.grey[ 100 ] }>
              { title }
            </Typography>

          </Box>

          <Box>
            <ProgressCircle progress={ progress } size={ progressCircleSize }/>
          </Box>

          <Box display={ 'flex' } justifyContent={ 'space-between' }>

            <Typography variant={ 'h5' } color={ colors.green[ 500 ] }>
              { subtitle }
            </Typography>

            <Typography variant={ 'h5' } fontStyle={ 'italic' } color={ colors.green[ 500 ] }>
              { increase }
            </Typography>

          </Box>

          {/*</Box>*/ }

        </Box>
      </>
  )
}

export default StatBox