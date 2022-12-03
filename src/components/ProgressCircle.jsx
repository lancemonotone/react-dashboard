import { useTheme, CircularProgress } from '@mui/material'
import { CircularProgressbar } from 'react-circular-progressbar'
import { tokens } from '../theme'

const ProgressCircle = ( { value = 0.75 } ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const angle = 100 * value

  console.log( angle )

  return (
      <>
        <CircularProgressbar value={ angle }
                             text={ `${ ( angle ).toFixed( 1 ) }%` }
                             styles={ {
                               path : {
                                 stroke: colors.green[ 500 ],
                               },
                               trail: {
                                 stroke: colors.blue[ 500 ],
                               },
                               text : {
                                 fontSize        : '1.5rem',
                                 fill            : colors.grey[ 100 ],
                                 dominantBaseline: 'middle',
                                 textAnchor      : 'middle',
                               },
                             } }
            // strokeWidth={ 5 }
            // background={ false }
            // backgroundPadding={ 2 }
        />

        {/*<CircularProgress variant={ 'determinate' }*/ }
        {/*                  value={ angle }*/ }
        {/*                  size={ size }*/ }
        {/*                  thickness={ 4 }*/ }
        {/*                  sx={ {*/ }
        {/*                    color: colors.blue[ 500 ],*/ }
        {/*                  } }/>*/ }
      </>
  )
}

export default ProgressCircle