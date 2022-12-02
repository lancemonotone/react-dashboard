import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { geoFeatures } from '../../data/mockGeoFeatures'

const GeographyChart = ( {
  isDashboard = false,
  data,
} ) => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
      <>
        <ResponsiveChoropleth
            data={ data }
            features={ geoFeatures.features }
            colors={ 'nivo' }
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
            margin={ { top: 0, right: 0, bottom: 0, left: 0 } }
            domain={ [ 0, 1000000 ] }
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={ isDashboard ? 40 : 150 }
            projectionTranslation={ !isDashboard ? [ 0.49, 0.6 ] : [ 0.5, 0.5 ] }
            projectionRotation={ [ 0, 0, 0 ] }
            // enableGraticule={ true }
            graticuleLineColor="#dddddd"
            borderWidth={ 1.5 }
            borderColor={ colors.primary[ 100 ] }
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
              {
                id    : 'gradient',
                type  : 'linearGradient',
                colors: [
                  {
                    offset: 0,
                    color : '#000',
                  },
                  {
                    offset: 100,
                    color : 'inherit',
                  },
                ],
              },
            ] }
            fill={ [
              {
                match: {
                  id: 'CAN',
                },
                id   : 'dots',
              },
              {
                match: {
                  id: 'CHN',
                },
                id   : 'lines',
              },
              {
                match: {
                  id: 'ATA',
                },
                id   : 'gradient',
              },
            ] }
            legends={ !isDashboard ? [
              {
                anchor       : 'bottom-left',
                direction    : 'column',
                justify      : true,
                translateX   : 20,
                translateY   : 0,
                itemsSpacing : 0,
                itemWidth    : 94,
                itemHeight   : 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.primary[ 100 ],
                itemOpacity  : 0.85,
                symbolSize   : 18,
                effects      : [
                  {
                    on   : 'hover',
                    style: {
                      itemTextColor: colors.primary[ 200 ],
                      itemOpacity  : 1,
                    },
                  },
                ],
              },
            ] : undefined }
        />
      </>
  )
}

export default GeographyChart