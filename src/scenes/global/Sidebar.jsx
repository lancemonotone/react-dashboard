//
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar, menuClasses } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import Tooltip from '@mui/material/Tooltip'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const DashboardSidebar = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar()
  const [ selected, setSelected ] = useState( 'Dashboard' )

  const sections = [
    {
      title: 'Dashboard',
      hideTitle: true,
      items: [
        {
          type: 'link',
          title: 'Dashboard',
          icon: <HomeOutlinedIcon/>,
          to: '/',
        } ],
    },
    {
      title: 'Data',
      items: [
        {
          title: 'Team',
          icon: <PeopleOutlinedIcon/>,
          to: '/team',
        },
        {
          title: 'Invoices',
          icon: <ReceiptOutlinedIcon/>,
          to: '/invoices',
        },
        {
          title: 'Contacts',
          icon: <ContactsOutlinedIcon/>,
          to: '/contacts',
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Form',
          icon: <PersonOutlinedIcon/>,
          to: '/form',
        },
        {
          title: 'FAQ',
          icon: <HelpOutlinedIcon/>,
          to: '/faq',
        },
        {
          title: 'Calendar',
          icon: <CalendarTodayOutlinedIcon/>,
          to: '/calendar',
        },
      ],
    },
    {
      title: 'Charts',
      items: [
        {
          title: 'Bar',
          icon: <BarChartOutlinedIcon/>,
          to: '/bar',
        },
        {
          title: 'Line',
          icon: <TimelineOutlinedIcon/>,
          to: '/line',
        },
        {
          title: 'Pie',
          icon: <PieChartOutlinedIcon/>,
          to: '/pie',
        },
        {
          title: 'Geography',
          icon: <MapOutlinedIcon/>,
          to: '/geography',
        } ],
    },
  ]

  const Item = ( { type, title, to, icon } ) => {
    const active = selected === title
    icon = !collapsed ? icon :
        <Tooltip title={ title } arrow placement={ 'top' }>
          <span>{ icon }</span>
        </Tooltip>

    return (
        <MenuItem active={ active }
                  onClick={ () => setSelected( title ) }
                  icon={ icon }
                  routerLink={ <Link to={ to }/> }>
          { !collapsed && <Typography>{ title }</Typography> }
        </MenuItem>
    )
  }

  return (
      <>
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
          <Sidebar backgroundColor={ 'transparent' }
                   rootStyles={ { minHeight: '100%' } }
                   collapsedWidth={ '100px' }
          >

            {/* Logo and menu icon*/ }
            <Box display="flex"
                 justifyContent={ !collapsed ? 'space-between' : 'center' }
                 alignItems="center"
                 p={ 2 }>
              { !collapsed && <Typography variant={ 'h3' } color={ colors.grey[ 100 ] }>ADMIN</Typography> }
              <IconButton onClick={ () => collapseSidebar() }>
                { !collapsed ? <ArrowBackIosOutlinedIcon/> : <MenuOutlinedIcon/> }
              </IconButton>
            </Box>

            {/* User */ }
            { !collapsed && (
                <Box paddingInline={ 2 }>
                  {/* Avatar */ }
                  <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' }>
                    <img src={ new URL( '../../assets/6776069.jpg', import.meta.url ).href }
                         alt={ 'profile user' }
                         width={ '100px' }
                         height={ '100px' }
                         style={ {
                           cursor: 'pointer',
                           borderRadius: '50%',
                           border: `1px solid ${ colors.green[ 700 ] }`,
                         } }
                    />
                  </Box>

                  {/* Name & Title */ }
                  <Box textAlign={ 'center' }>
                    <Typography variant={ 'h3' }
                                color={ colors.grey[ 100 ] }
                                fontWeight={ 'bold' }
                                sx={ { m: '10px 0 0 0' } }>
                      { 'Lance Monotone' }</Typography>

                    <Typography variant={ 'h5' }
                                color={ colors.green[ 500 ] }>
                      { 'CEO & Founder' }</Typography>
                  </Box>

                </Box>
            ) }

            {/* Menu */ }
            <Menu
                menuItemStyles={ {
                  icon: {
                    marginRight: '0',
                  },
                  button: ( { level, active, disabled } ) => {
                    return {
                      padding: ( !collapsed ) ? '0' : 'undefined',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      color: active ? colors.blue[ 500 ] : 'undefined',
                      '&:hover': {
                        color: colors.blue[ 500 ],
                        backgroundColor: 'transparent',
                      },
                    }
                  },
                } }>

              <Box display={ 'flex' }
                   flexDirection={ 'column' }
                   justifyContent={ !collapsed ? 'space-between' : 'center' }
                   p={ 2 }>

                { sections.map( ( section, i ) => {
                  return (
                      <div key={ i }>
                        { !section.hideTitle &&
                        <Typography
                            textAlign={ !collapsed ? 'start' : 'center' }
                            variant={ 'h6' }
                            color={ colors.green[ 500 ] }
                            marginBlockStart={ 2 }>
                          { section.title }
                        </Typography> }

                        { section.items.map( ( item, i ) => {
                          return ( <Item key={ i } { ...item }/> )
                        } ) }
                      </div>
                  )
                } ) }

              </Box>
            </Menu>
          </Sidebar>
        </Box>
      </>
  )
}

export default DashboardSidebar