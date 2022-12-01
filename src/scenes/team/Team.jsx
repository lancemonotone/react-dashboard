import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import { AdminPanelSettingsOutlined } from '@mui/icons-material'
import { SecurityOutlined } from '@mui/icons-material'
import { LockOpenOutlined } from '@mui/icons-material'
import Header from '../../components/Header'

const Team = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone',
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 200,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      // align: 'center',
      // headerAlign: 'center',
      width: 150,
      renderCell: ( { row: { access } } ) => {
        return (
            <Box
                width={ '20%' }
                minWidth={ '6rem' }
                p={ 1 }
                display={ 'flex' }
                justifyContent={ 'flex-start' }
                borderRadius={ 1 }
                backgroundColor={
                  access === 'admin'
                      ? colors.green[ 700 ]
                      : colors.blue[ 700 ]
                }>
              { access === 'admin' && <AdminPanelSettingsOutlined/> }
              { access === 'manager' && <SecurityOutlined/> }
              { access === 'user' && <LockOpenOutlined/> }
              <Typography display={ 'flex' }
                          color={ colors.grey[ 100 ] }
                          sx={ {
                            marginInlineStart: '0.5rem',
                            cursor: 'default',
                          } }>
                { access.charAt( 0 ).toUpperCase() + access.slice( 1 ) }
              </Typography>
            </Box>
        )
      },
    },
  ]

  return (
      <>
        <Header title={ 'Team' } subtitle={ 'Manage the team members' }/>
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
             } }>
          <DataGrid rows={ mockDataTeam } columns={ columns }/>
        </Box>
      </>
  )
}

export default Team