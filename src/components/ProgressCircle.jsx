import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

const ProgressCircle = ( { progress = 0.75, size = '40' } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const angle = 360 * progress

  return (
      <>
        <Box sx={ {
          background  : `radial-gradient(${ colors.primary[ 400 ] }) 55%, transparent 56%),
          conicGradient(transparent 0deg, transparent ${ angle }deg, ${ colors.blue[ 500 ] } ${ angle }deg 360deg),
          ${ colors.green[ 500 ] }`,
          borderRadius: '50%',
          width       : `${ size }px`,
          height      : `${ size }px`,
        } }/>
      </>
  )
}

export default ProgressCircle