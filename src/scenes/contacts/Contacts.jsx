import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    { field: 'name', headerName: 'Name', cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
    { field: 'phone', headerName: 'Phone' },
    { field: 'email', headerName: 'Email' },
    { field: 'address', headerName: 'Address' },
    { field: 'city', headerName: 'City' },
    { field: 'zipCode', headerName: 'Zip Code' },
  ]

  return (
      <>
        <Header title={ 'Contacts' } subtitle={ 'List of contacts for future reference' }/>
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
               '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                 color: `${ colors.grey[ 100 ] } !important`,
               },
             } }>
          <DataGrid rows={ mockDataContacts } columns={ columns } components={ { Toolbar: GridToolbar } }/>
        </Box>
      </>
  )
}

export default Contacts