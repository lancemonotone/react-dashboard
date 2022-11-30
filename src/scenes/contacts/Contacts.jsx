import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left', flex: 0.5 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
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
                 backgroundColor: colors.blue[ 700 ],
                 borderBlockEnd: 'none',
               },
               '& .MuiDataGrid-virtualScroller': {
                 backgroundColor: colors.primary[ 400 ],
               },
               '& .MuiDataGrid-footerContainer': {
                 borderBlockStart: 'none',
                 backgroundColor: colors.blue[ 700 ],
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