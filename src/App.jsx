import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Topbar from './scenes/global/Topbar'
import DashboardSidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from './scenes/calendar'

function App() {
  const [ theme, colorMode ] = useMode()

  return (
      <ColorModeContext.Provider value={ colorMode }>
        <ThemeProvider theme={ theme }>
          <CssBaseline/>
          <ProSidebarProvider>
            <div className="app">
              <DashboardSidebar/>
              <main className="content">
                <Topbar/>
                <Box margin={ 2 }
                     justifyContent={ 'space-between' }
                     alignItems={ 'center' }>
                  <Routes>
                    <Route path="/" element={ <Dashboard/> }/>
                    <Route path="/team" element={ <Team/> }/>
                    <Route path="/invoices" element={ <Invoices/> }/>
                    <Route path="/contacts" element={ <Contacts/> }/>
                    <Route path="/bar" element={ <Bar/> }/>
                    <Route path="/form" element={ <Form/> }/>
                    <Route path="/line" element={ <Line/> }/>
                    <Route path="/pie" element={ <Pie/> }/>
                    <Route path="/faq" element={ <FAQ/> }/>
                    <Route path="/geography" element={ <Geography/> }/>
                    <Route path="/calendar" element={ <Calendar/> }/>
                  </Routes>
                </Box>
              </main>
            </div>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App