import { ResponsivePie } from '@nivo/pie'
import {
  useTheme,
} from '@mui/material'
import { tokens } from '../../theme'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const PieChart = ( {
  isDashboard = false,
  data,
} ) => {
  const theme  = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <ResponsivePie
          data={ data }
          margin={ {
            top   : 40,
            right : 80,
            bottom: 80,
            left  : 80,
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
          innerRadius={ 0.5 }
          padAngle={ 0.7 }
          cornerRadius={ 3 }
          activeOuterRadiusOffset={ 8 }
          borderWidth={ 1 }
          borderColor={ {
            from     : 'color',
            modifiers: [
              [
                'darker',
                0.2,
              ],
            ],
          } }
          arcLinkLabelsSkipAngle={ 10 }
          arcLinkLabelsTextColor={ `${ colors.primary[ 100 ] }` }
          arcLinkLabelsThickness={ 2 }
          arcLinkLabelsColor={ { from: 'color' } }
          arcLabelsSkipAngle={ 10 }
          arcLabelsTextColor={ {
            from     : 'color',
            modifiers: [
              [
                'darker',
                2,
              ],
            ],
          } }
          defs={ [
            {
              id        : 'dots',
              type      : 'patternDots',
              background: 'inherit',
              color     : 'rgba(255, 255, 255, 0.3)',
              size      : 4,
              padding   : 1,
              stagger   : true,
            },
            {
              id        : 'lines',
              type      : 'patternLines',
              background: 'inherit',
              color     : 'rgba(255, 255, 255, 0.3)',
              rotation  : -45,
              lineWidth : 6,
              spacing   : 10,
            },
          ] }
          // fill={ [
          //   {
          //     match: {
          //       id: 'ruby',
          //     },
          //     id   : 'dots',
          //   },
          //   {
          //     match: {
          //       id: 'c',
          //     },
          //     id   : 'dots',
          //   },
          //   {
          //     match: {
          //       id: 'go',
          //     },
          //     id   : 'dots',
          //   },
          //   {
          //     match: {
          //       id: 'python',
          //     },
          //     id   : 'dots',
          //   },
          //   {
          //     match: {
          //       id: 'scala',
          //     },
          //     id   : 'lines',
          //   },
          //   {
          //     match: {
          //       id: 'lisp',
          //     },
          //     id   : 'lines',
          //   },
          //   {
          //     match: {
          //       id: 'elixir',
          //     },
          //     id   : 'lines',
          //   },
          //   {
          //     match: {
          //       id: 'javascript',
          //     },
          //     id   : 'lines',
          //   },
          // ] }
          legends={ [
            {
              anchor       : 'bottom',
              direction    : 'row',
              justify      : false,
              translateX   : 0,
              translateY   : 56,
              itemsSpacing : 0,
              itemWidth    : 100,
              itemHeight   : 18,
              itemTextColor: `${ colors.primary[ 100 ] }`,
              itemDirection: 'left-to-right',
              itemOpacity  : 1,
              symbolSize   : 18,
              symbolShape  : 'circle',
              effects      : [
                {
                  on   : 'hover',
                  style: {
                    itemTextColor: `${ colors.primary[ 200 ] }`,
                  },
                },
              ],
            },
          ] }
      />
  )
}

export default PieChart