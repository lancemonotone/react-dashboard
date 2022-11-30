import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

// mui theme settings
export const themeSettings = ( mode ) => {
  const colors = tokens( mode )
  const fontFamilies = [ 'Source Sans Pro', 'sans-serif' ].join( ',' )
  return {
    palette: {
      mode,
      ...( mode === 'dark' ? {
        primary: {
          main: colors.primary[ 500 ],
        },
        secondary: {
          main: colors.green[ 500 ],
        },
        neutral: {
          dark: colors.grey[ 700 ],
          main: colors.grey[ 500 ],
          light: colors.grey[ 100 ],
        },
        background: {
          default: colors.primary[ 500 ],
        },
      } : {
        primary: {
          main: colors.primary[ 100 ],
        },
        secondary: {
          main: colors.green[ 500 ],
        },
        neutral: {
          dark: colors.grey[ 700 ],
          main: colors.grey[ 500 ],
          light: colors.grey[ 100 ],
        },
        background: {
          default: '#fcfcfc',
        },
      } ),
    },
    typography: {
      fontFamily: fontFamilies,
      fontSize: 12,
      h1: {
        fontFamily: fontFamilies,
        fontSize: 40,
      },
      h2: {
        fontFamily: fontFamilies,
        fontSize: 32,
      },
      h3: {
        fontFamily: fontFamilies,
        fontSize: 24,
      },
      h4: {
        fontFamily: fontFamilies,
        fontSize: 20,
      },
      h5: {
        fontFamily: fontFamilies,
        fontSize: 16,
      },
      h6: {
        fontFamily: fontFamilies,
        fontSize: 14,
      },
    },
  }
}

// context for color mode
export const ColorModeContext = createContext( {
  toggleColorMode: () => {
  },
} )

export const useMode = () => {
  const [ mode, setMode ] = useState( 'dark' )

  const colorMode = useMemo( () => ( {
    toggleColorMode: () => setMode( prevMode => ( prevMode === 'dark' ? 'light' : 'dark' ) ),
  } ), [] )

  const theme = useMemo( () => createTheme( themeSettings( mode ) ), [ mode ] )

  return [ theme, colorMode ]
}

export const tokens = mode => ( {
  ...( mode === 'dark' ? darkTokens : lightTokens ),
} )

// color design tokens
const darkTokens = {
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },
  primary: {
    100: '#d0d1d5',
    200: '#a1a4ab',
    300: '#727681',
    400: '#1f2a40',
    500: '#141b2d',
    600: '#101624',
    700: '#0c101b',
    800: '#080b12',
    900: '#040509',
  },
  green: {
    100: '#edfaf7',
    200: '#d2f3ea',
    300: '#b7ebde',
    400: '#82ddc5',
    500: '#4cceac',
    600: '#44b99b',
    700: '#399b81',
    800: '#2e7c67',
    900: '#256554',
  },
  red: {
    100: '#fbeded',
    200: '#f6d3d2',
    300: '#f1b9b7',
    400: '#e68480',
    500: '#db4f4a',
    600: '#c54743',
    700: '#a43b38',
    800: '#832f2c',
    900: '#6b2724',
  },
  blue: {
    100: '#f0f1ff',
    200: '#d9dbfe',
    300: '#c3c6fd',
    400: '#959bfc',
    500: '#6870fa',
    600: '#5e65e1',
    700: '#4e54bc',
    800: '#3e4396',
    900: '#33377b',
  },
}

const lightTokens = {
  grey: {
    100: '#141414',
    200: '#292929',
    300: '#3d3d3d',
    400: '#525252',
    500: '#666666',
    600: '#858585',
    700: '#a3a3a3',
    800: '#c2c2c2',
    900: '#e0e0e0',
  },
  primary: {
    100: '#040509',
    200: '#080b12',
    300: '#0c101b',
    400: '#f2f0f0',
    500: '#141b2d',
    600: '#434957',
    700: '#727681',
    800: '#a1a4ab',
    900: '#d0d1d5',
  },
  green: {
    100: '#256554',
    200: '#2e7c67',
    300: '#399b81',
    400: '#44b99b',
    500: '#4cceac',
    600: '#82ddc5',
    700: '#b7ebde',
    800: '#d2f3ea',
    900: '#edfaf7',
  },
  red: {
    100: '#6b2724',
    200: '#832f2c',
    300: '#a43b38',
    400: '#c54743',
    500: '#db4f4a',
    600: '#e68480',
    700: '#f1b9b7',
    800: '#f6d3d2',
    900: '#fbeded',
  },
  blue: {
    100: '#33377b',
    200: '#3e4396',
    300: '#4e54bc',
    400: '#5e65e1',
    500: '#6870fa',
    600: '#959bfc',
    700: '#c3c6fd',
    800: '#d9dbfe',
    900: '#f0f1ff',
  },
}