import {
  Box,
  useTheme,
  Typography,
} from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import { useState } from 'react'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  const [ expanded, setExpanded ] = useState( 'panel0' )

  const handleChange = ( panel ) => ( event, isExpanded ) => {
    setExpanded( isExpanded ? panel : false )
  }

  const accordionData = [
    {
      title  : 'What is the purpose of this app?',
      content: 'This app is a demo of the MUI v5 beta. It is a work in progress and will be updated as the beta progresses.',
    },
    {
      title  : 'What is the purpose of this app?',
      content: 'This app is a demo of the MUI v5 beta. It is a work in progress and will be updated as the beta progresses.',
    },
    {
      title  : 'What is the purpose of this app?',
      content: 'This app is a demo of the MUI v5 beta. It is a work in progress and will be updated as the beta progresses.',
    },
  ]

  return (
      <>
        <Header title={ 'FAQ' }
                subtitle={ 'Frequently asked questions' }/>

        { accordionData.map( ( item, index ) => (
            <Accordion key={ index }
                       disableGutters={ true }
                       expanded={ expanded === `panel${ index }` }
                       onChange={ handleChange( `panel${ index }` ) }
                       sx={ {
                         backgroundColor: `transparent`,
                       } }>

              <AccordionSummary
                  expandIcon={ <ExpandMoreIcon/> }
                  aria-controls={ `panel${ index }a-content` }
                  id={ `panel${ index }a-header` }
                  sx={ {
                    // backgroundColor: `${ colors.primary[ 500 ] }`,
                  } }>
                <Typography color={ colors.primary[ 100 ] }
                            variant={ 'h5' }>{ item.title }</Typography>
              </AccordionSummary>
              <AccordionDetails
                  sx={ {
                    color          : `${ colors.primary[ 900 ] }`,
                    backgroundColor: `${ colors.primary[ 100 ] }`,
                  } }>
                <Typography>
                  { item.content }
                </Typography>
              </AccordionDetails>
            </Accordion>
        ) ) }

        {/*<Accordion>*/ }
        {/*  <AccordionSummary expandIcon={ <ExpandMoreIcon/> }>*/ }
        {/*    <Typography color={ colors.blue[ 500 ] }*/ }
        {/*                variant={ 'h5' }>Important Question</Typography>*/ }
        {/*  </AccordionSummary>*/ }
        {/*  <AccordionDetails>*/ }
        {/*    <Typography>*/ }
        {/*      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/ }
        {/*    </Typography>*/ }
        {/*  </AccordionDetails>*/ }
        {/*</Accordion>*/ }
      </>
  )
}

export default FAQ