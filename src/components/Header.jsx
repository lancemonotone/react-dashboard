import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

const Header = ( { title, subtitle } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box sx={ { marginBlockEnd: 3 } }>
          <Typography variant={ 'h2' }
                      textTransform={ 'uppercase' }
                      color={ colors.grey[ 100 ] }
                      fontWeight={ 700 }
                      sx={ { marginBlockEnd: 1 } }>
            { title }
          </Typography>
          <Typography variant={ 'h5' }
                      color={ colors.green[ 400 ] }>
            { subtitle }
          </Typography>
        </Box>
      </>
  )
}

export default Header