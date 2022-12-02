// install (please make sure versions match peerDependencies)
import { ResponsiveBar } from '@nivo/bar'
import {
  useTheme,
} from '@mui/material'
import { tokens } from '../../theme'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const filteredKeys = ( data ) => Object.keys( data[ 0 ] ).filter( key => {
  return key !== 'country' && key.indexOf( 'Color' ) === -1
} )

const BarChart = ( {
  isDashboard,
  data, /* see data tab */
} ) => {
  const theme  = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <ResponsiveBar
          data={ data }
          keys={ ( () => filteredKeys( data ) )() }
          indexBy="country"
          margin={ {
            top   : 50,
            right : 130,
            bottom: 50,
            left  : 60,
          } }
          padding={ 0.3 }
          valueScale={ { type: 'linear' } }
          indexScale={ {
            type : 'band',
            round: true,
          } }
          colors={ { scheme: 'paired' } }
          theme={ {
            'background' : `transparent`,
            'textColor'  : `${ colors.primary[ 100 ] }`,
            'fontSize'   : 11,
            'axis'       : {
              'domain': {
                'line': {
                  'stroke'     : `${ colors.primary[ 300 ] }`,
                  'strokeWidth': 1,
                },
              },
              'legend': {
                'text': {
                  'fontSize': 12,
                  'fill'    : `${ colors.primary[ 100 ] }`,
                },
              },
              'ticks' : {
                'line': {
                  'stroke'     : `${ colors.primary[ 300 ] }`,
                  'strokeWidth': 1,
                },
                'text': {
                  'fontSize': 11,
                  'fill'    : `${ colors.primary[ 100 ] }`,
                },
              },
            },
            'grid'       : {
              'line': {
                'stroke'     : `${ colors.primary[ 300 ] }`,
                'strokeWidth': 1,
              },
            },
            'legends'    : {
              'title': {
                'text': {
                  'fontSize': 11,
                  'fill'    : `${ colors.primary[ 100 ] }`,
                },
              },
              'text' : {
                'fontSize': 11,
                'fill'    : `${ colors.primary[ 100 ] }`,
              },
              'ticks': {
                'line': {},
                'text': {
                  'fontSize': 10,
                  'fill'    : `${ colors.primary[ 100 ] }`,
                },
              },
            },
            'annotations': {
              'text'   : {
                'fontSize'      : 13,
                'fill'          : `${ colors.primary[ 100 ] }`,
                'outlineWidth'  : 2,
                'outlineColor'  : `${ colors.primary[ 100 ] }`,
                'outlineOpacity': 1,
              },
              'link'   : {
                'stroke'        : `${ colors.primary[ 900 ] }`,
                'strokeWidth'   : 1,
                'outlineWidth'  : 2,
                'outlineColor'  : `${ colors.primary[ 100 ] }`,
                'outlineOpacity': 1,
              },
              'outline': {
                'stroke'        : `${ colors.primary[ 900 ] }`,
                'strokeWidth'   : 2,
                'outlineWidth'  : 2,
                'outlineColor'  : `${ colors.primary[ 100 ] }`,
                'outlineOpacity': 1,
              },
              'symbol' : {
                'fill'          : `${ colors.primary[ 900 ] }`,
                'outlineWidth'  : 2,
                'outlineColor'  : `${ colors.primary[ 100 ] }`,
                'outlineOpacity': 1,
              },
            },
            'tooltip'    : {
              'container'     : {
                'background': `${ colors.grey[ 100 ] }`,
                'color'     : `${ colors.primary[ 900 ] }`,
                'fontSize'  : 12,
              },
              'basic'         : {},
              'chip'          : {},
              'table'         : {},
              'tableCell'     : {},
              'tableCellValue': {},
            },
          } }
          defs={ [
            {
              id        : 'dots',
              type      : 'patternDots',
              background: 'inherit',
              color     : '#38bcb2',
              size      : 4,
              padding   : 1,
              stagger   : true,
            },
            {
              id        : 'lines',
              type      : 'patternLines',
              background: 'inherit',
              color     : '#eed312',
              rotation  : -45,
              lineWidth : 6,
              spacing   : 10,
            },
          ] }
          fill={ [
            {
              match: {
                id: 'fries',
              },
              id   : 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id   : 'lines',
            },
          ] }
          borderColor={ {
            from     : 'color',
            modifiers: [
              [
                'darker',
                1.6,
              ],
            ],
          } }
          axisTop={ null }
          axisRight={ null }
          axisBottom={ {
            tickSize      : 5,
            tickPadding   : 5,
            tickRotation  : 0,
            legend        : isDashboard ? undefined : 'country',
            legendPosition: 'middle',
            legendOffset  : 32,
          } }
          axisLeft={ {
            tickSize      : 5,
            tickPadding   : 5,
            tickRotation  : 0,
            legend        : isDashboard ? undefined : 'food',
            legendPosition: 'middle',
            legendOffset  : -40,
          } }
          labelSkipWidth={ 12 }
          labelSkipHeight={ 12 }
          labelTextColor={ {
            from     : 'color',
            modifiers: [
              [
                'darker',
                1.6,
              ],
            ],
          } }
          legends={ [
            {
              dataFrom     : 'keys',
              anchor       : 'bottom-right',
              direction    : 'column',
              justify      : false,
              translateX   : 120,
              translateY   : 0,
              itemsSpacing : 2,
              itemWidth    : 100,
              itemHeight   : 20,
              itemDirection: 'left-to-right',
              itemOpacity  : 0.85,
              symbolSize   : 20,
              effects      : [
                {
                  on   : 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ] }
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={ function( e ) {return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue} }
      />
  )
}
export default BarChart