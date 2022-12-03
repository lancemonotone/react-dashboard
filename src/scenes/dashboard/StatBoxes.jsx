import StatBox from '../../components/StatBox'
import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

const StatBoxes = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const statBoxes = [
    {
      title   : 12250,
      subtitle: 'Emails Sent',
      value   : 0.052,
      icon    : <Email sx={ { fontSize: '2rem', color: colors.green[ 600 ] } }/>,
    },
    {
      title   : 431225,
      currency: true,
      subtitle: 'Sales Obtained',
      value   : 0.21,
      icon    : <PointOfSale sx={ { fontSize: '2rem', color: colors.green[ 600 ] } }/>,
    },
    {
      title   : 32441,
      subtitle: 'New Clients',
      value   : .05,
      icon    : <PersonAdd sx={ { fontSize: '2rem', color: colors.green[ 600 ] } }/>,
    },
    {
      title   : 1325134,
      subtitle: 'Traffic Received',
      value   : .43,
      icon    : <Traffic sx={ { fontSize: '2rem', color: colors.green[ 600 ] } }/>,
    },
  ]

  return (
      <>
        { statBoxes.map( ( item, index ) => (
            <StatBox key={ index }
                     span={ item.span = 3 }
                     title={ item.title }
                     currency={ item.currency = false }
                     subtitle={ item.subtitle }
                     value={ item.value }
                     icon={ item.icon }/>

        ) ) }
      </>
  )
}

export default StatBoxes