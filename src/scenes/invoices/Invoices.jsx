import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'
import Header from '../../components/Header'

const Invoices = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const currencyFormatter = new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
  } )

  const usdPrice = {
    type: 'number',
    width: 70,
    headerAlign: 'right',
    align: 'right',
    valueFormatter: ( { value } ) => currencyFormatter.format( value ),
    cellClassName: 'font-tabular-nums',
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'name', headerName: 'Name', cellClassName: 'name-column--cell' },
    { field: 'cost', headerName: 'Cost', ...usdPrice },
    { field: 'date', headerName: 'Date', type: 'date' },
    { field: 'phone', headerName: 'Phone' },
  ]
  return (
      <>
        <Header title={ 'Invoices' } subtitle={ 'List of invoice balances' }/>
        <Box height={ '65vh' }
             sx={ {
               marginBlockStart: 5,
               '& .MuiDataGrid-root': {
                 border: 'none',
               },
               '& .MuiDataGrid-cell': {
                 borderBlockEnd: 'none',
               },
               '& .name-column--cell': {
                 color: colors.green[ 300 ],
               },
               '& .MuiDataGrid-columnHeaders': {
                 backgroundColor: colors.blue[ 800 ],
                 borderBlockEnd: 'none',
               },
               '& .MuiDataGrid-virtualScroller': {
                 backgroundColor: colors.primary[ 400 ],
               },
               '& .MuiDataGrid-footerContainer': {
                 borderBlockStart: 'none',
                 backgroundColor: colors.blue[ 800 ],
               },
               '& .MuiDataGrid-columnSeparator--sideRight': {
                 color: 'transparent !important',
               },
               '& .MuiCheckbox-root': {
                 color: `${ colors.green[ 200 ] } !important`,
               },
             } }>
          <DataGrid checkboxSelection rows={ mockDataInvoices } columns={ columns }/>
        </Box>
      </>
  )
}

export default Invoices