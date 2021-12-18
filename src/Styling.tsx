import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { fontFamily } from '@mui/system'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { Nav } from './Nav'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    active: true
  }
}

export const Styling: FunctionComponent = props => {
  let theme = createTheme({})

  theme = createTheme({
    typography: {
      fontFamily: ['"Raleway"', 'sans-serif'].join(','),
    },

    components: {
      MuiLink: {
        defaultProps: { rel: 'noopener' },
      },
      MuiButton: {
        styleOverrides: { root: { textTransform: 'none' } },
        variants: [
          {
            props: { variant: 'active' },
            style: {
              color: 'green',
            },
          },
        ],
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          //
          root: {
            [theme.breakpoints.down('sm')]: {
              padding: 0,
            },
          },
          // },
        },
      },
      MuiTypography: {
        variants: [{ props: { variant: 'h1' }, style: { textAlign: 'center', fontWeight: '200' } }],
        defaultProps: { overflow: 'auto' },
      },
    },
  })

  theme = responsiveFontSizes(theme, { factor: 2.5 })

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '*': {
          scrollMarginTop: '120px',
        },
      }}
    />
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}
      <Nav />
    </ThemeProvider>
  )
}
