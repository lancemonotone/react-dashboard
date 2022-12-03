import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ( { span, title, subtitle, icon, value, currency = false } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box gridColumn={ `span ${ span }` }
             backgroundColor={ colors.primary[ 400 ] }
             display={ 'flex' }
             gap={ 1 }
             flexDirection={ 'row' }
             alignItems={ 'center' }
             justifyContent={ 'space-between' }
             borderRadius={ 1 }
             padding={ 2 }>

          <Box display={ 'flex' } height={ '100%' } flexDirection={ 'column' } alignItems={ 'start' } justifyContent={ 'space-between' }>

            { icon }

            <Typography variant={ 'h4' } color={ colors.grey[ 100 ] }>
              {/*format title with comma separators */ }
              { currency && '$' }{ title.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }
            </Typography>

            <Typography variant={ 'h6' } lineHeight={ 1 } color={ colors.green[ 500 ] }>
              { subtitle }
            </Typography>

          </Box>

          <Box display={ 'flex' } width={ '50%' } height={ '100%' } flexDirection={ 'column' } alignItems={ 'center' } justifyContent={ 'space-between' }>
            <ProgressCircle value={ value }/>
          </Box>

        </Box>
      </>
  )
}

export default StatBox