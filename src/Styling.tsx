import { Box, createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
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
    components: {
      MuiLink: {
        defaultProps: { rel: 'noopener' },
      },
      MuiButton: {
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
        defaultProps: { overflow: 'auto' },
      },
    },
  })

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
      {inputGlobalStyles}
      <Nav />
    </ThemeProvider>
  )
}
