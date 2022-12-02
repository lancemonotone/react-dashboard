import { useState } from 'react'
import '@fullcalendar/react/dist/vdom' // needed for FullCalendar's React components
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const Calendar = () => {

  const theme  = useTheme()
  const colors = tokens( theme.palette.mode )

  const [ currentEvents, setCurrentEvents ] = useState( [] )

  const handleDateClick = ( selected ) => {
    const title       = prompt( 'Please enter a title for your new event' )
    const calendarApi = selected.view.calendar
    calendarApi.unselect() // clear date selection

    if ( title ) {
      calendarApi.addEvent( {
        id    : `${ title }-${ selected.dateStr }`,
        start : selected.startStr,
        end   : selected.endStr,
        allDay: selected.allDay,
        title,
      } )
    }
  }

  const handleEventClick = ( selected ) => {
    if ( window.confirm( `Are you sure you want to delete ${ selected.event.title }?` ) ) {
      const calendarApi = selected.view.calendar
      calendarApi.unselect() // clear date selection
      calendarApi.getEventById( selected.event.id ).remove()
    }
  }

  function renderEventContent() {

  }

  const css = `
  :root {
    --fc-list-event-hover-bg-color: ${ colors.primary[ 700 ] };
    --fc-today-bg-color:${ colors.primary[ 700 ] };
    --fc-neutral-bg-color: ${ colors.primary[ 700 ] };
  }
  .fc-daygrid-dot-event {
    background-color: ${ colors.blue[ 700 ] };
    color: ${ colors.green[ 100 ] };
  }
  `

  return (
      <>
        <style>{ css }</style>
        <Header title={ 'Calendar' }
                subtitle={ 'Full events calendar' }/>
        <Box sx={ {
          display       : 'flex',
          justifyContent: 'space-between',
        } }>
          {/* calendar sidebar */ }
          <Box flex={ '1 1 20%' }
               backgroundColor={ colors.primary[ 400 ] }
               p={ 2 }
               borderRadius={ 1 }>
            <Typography variant={ 'h5' }>Events</Typography>
            <List>
              { currentEvents.map( ( event ) => (
                  <ListItem key={ event.id }
                            sx={ {
                              backgroundColor: colors.green[ 500 ],
                              marginBlock    : 1,
                              borderRadius   : 1,
                            } }>
                    <ListItemText primary={ event.title }
                                  secondary={
                                    <Typography>
                                      { formatDate( event.start,
                                          {
                                            year : 'numeric',
                                            month: 'short',
                                            day  : 'numeric',
                                          } ) }
                                    </Typography>
                                  }/>
                  </ListItem>
              ) ) }
            </List>
          </Box>

          {/* calendar */ }
          <Box flex={ '1 1 80%' }
               p={ 2 }>
            <FullCalendar
                contentHeight={ 'auto' }
                plugins={ [ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ] }
                headerToolbar={ {
                  start : 'prev,next,today',
                  center: 'title',
                  end   : 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                } }
                initialView={ 'dayGridMonth' }
                editable={ true }
                selectable={ true }
                selectMirror={ true }
                dayMaxEvents={ true }
                select={ handleDateClick }
                eventClick={ handleEventClick }
                eventsSet={ ( events ) => setCurrentEvents( events ) }
                initialEvents={ [
                  {
                    id   : '1',
                    title: 'Event Now',
                    start: new Date(),
                  },
                  {
                    id   : '2',
                    title: 'Event 1',
                    start: ( () => {
                      let result = new Date()
                      result.setDate( result.getDate() + 1 )
                      return result
                    } )(),
                  },
                ] }
            />
          </Box>

        </Box>
      </>
  )
}

export default Calendar