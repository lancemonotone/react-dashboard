//

import { Box, Button, Typography, useTheme } from '@mui/material'
import { mockTransactions } from '../../data/mockData'
import { tokens } from '../../theme'

const RecentTransactions = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <Box gridColumn={ 'span 4' }
             gridRow={ 'span 2' }
             display={ 'flex' }
             flexDirection={ 'column' }
             gap={ 1 }>

          <Typography variant={ 'h5' }
                      color={ colors.grey[ 100 ] }
                      padding={ 2 }
                      backgroundColor={ colors.primary[ 400 ] }
                      borderRadius={ 1 }>
            Recent Transactions
          </Typography>
          <Box sx={ {
            overflowY: 'auto',
            display  : 'grid',
            gap      : 1,
          } }>
            { mockTransactions.map( ( transaction, index ) => (
                <Box key={ index }
                     display={ 'grid' }
                     gridTemplateColumns={ 'repeat( 3, 1fr)' }
                     alignItems={ 'center' }
                     justifyContent={ 'space-between' }
                     padding={ 2 }
                     backgroundColor={ colors.primary[ 400 ] }
                     borderRadius={ 1 }>


                  <Box display={ 'flex' } flexDirection={ 'column' } alignItems={ 'start' }>
                    <Typography variant={ 'h6' } color={ colors.green[ 500 ] }>
                      { transaction.txId }
                    </Typography>
                    <Typography variant={ 'h6' } color={ colors.grey[ 100 ] }>
                      { transaction.user }
                    </Typography>
                  </Box>

                  <Typography variant={ 'body2' } color={ colors.grey[ 100 ] }>
                    { transaction.date }
                  </Typography>

                  <Button variant={ 'contained' }
                          sx={ {
                            backgroundColor: colors.green[ 500 ],
                            // color            : colors.green[ 500 ],
                            marginInlineStart: 1.2,
                          } }>
                    { transaction.cost }
                  </Button>


                </Box>
            ) ) }

          </Box>

        </Box>
      </>
  )
}

export default RecentTransactions