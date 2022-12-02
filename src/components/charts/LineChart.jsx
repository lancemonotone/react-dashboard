import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = ( {
  isDashboard = false,
  data,
} ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <ResponsiveLine
          data={ data }
          curve={ 'catmullRom' }
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
          enableGridX={ false }
          enableGridY={ false }
          margin={ {
            top   : 50,
            right : 110,
            bottom: 50,
            left  : 60,
          } }
          xScale={ { type: 'point' } }
          yScale={ {
            type   : 'linear',
            min    : 'auto',
            max    : 'auto',
            stacked: true,
            reverse: false,
          } }
          yFormat=" >-.2f"
          axisTop={ null }
          axisRight={ null }
          axisBottom={ {
            orient        : 'bottom',
            tickSize      : 5,
            tickPadding   : 5,
            tickRotation  : 0,
            legend        : isDashboard ? undefined : 'transportation',
            legendOffset  : 36,
            legendPosition: 'middle',
          } }
          axisLeft={ {
            orient        : 'left',
            tickValues    : 5,
            tickSize      : 5,
            tickPadding   : 5,
            tickRotation  : 0,
            legend        : isDashboard ? undefined : 'count',
            legendOffset  : -40,
            legendPosition: 'middle',
          } }
          pointSize={ 10 }
          pointColor={ { theme: 'background' } }
          pointBorderWidth={ 2 }
          pointBorderColor={ { from: 'serieColor' } }
          pointLabelYOffset={ -12 }
          useMesh={ true }
          legends={ [
            {
              anchor           : 'bottom-right',
              direction        : 'column',
              justify          : false,
              translateX       : 100,
              translateY       : 0,
              itemsSpacing     : 0,
              itemDirection    : 'left-to-right',
              itemWidth        : 80,
              itemHeight       : 20,
              itemOpacity      : 0.75,
              symbolSize       : 12,
              symbolShape      : 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects          : [
                {
                  on   : 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity   : 1,
                  },
                },
              ],
            },
          ] }
      />
  )
}

export default LineChart