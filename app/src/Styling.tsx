import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { fontFamily } from '@mui/system'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { App } from './App'
import { getCookie, useCookie } from './util/CookieHandler'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    active: true
  }
}

export const Styling: FunctionComponent = props => {
  let theme = createTheme({})

  const [cDarkmodeCookie, updateDarkmode] = useCookie('darkmode', 'false')
  const darkmode = cDarkmodeCookie === 'true'

  theme = useMemo(() => {
    let cRVal = createTheme({
      typography: {
        fontFamily: ['"Raleway"', 'sans-serif'].join(','),
      },
      palette: {
        mode: darkmode ? 'dark' : 'light',
        ...(darkmode
          ? {
              primary: {
                main: '#00ff14',
                light: '#70ff5b',
                dark: '#00ca00',
                contrastText: '#00ff14',
              },
              secondary: { main: '#ff00ea', light: '#ff61ff', dark: '#c700b7' },
            }
          : {
              primary: { main: '#4eb30f', light: '#84e64c', dark: '#008200' },
              secondary: { main: '#78909c', light: '#a7c0cd', dark: '#4b636e' },
            }),
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
          variants: [
            {
              props: { variant: 'h1' },
              style: {
                textAlign: 'center',
                fontWeight: '200',
                paddingBottom: "2rem",
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3rem',
                },
              },
            },
            {
              props: { variant: 'h2' },
              style: {
                paddingBottom: "1.7rem",
                [theme.breakpoints.up('sm')]: {
                  fontSize: '2.5rem',
                },
              },
            },
            {
              props: { variant: 'h3' },
              style: {
                paddingBottom: "1.5rem",
                [theme.breakpoints.up('sm')]: {
                  fontSize: '2rem',
                },
              },
            },
          ],
          defaultProps: { overflow: 'auto' },
        },
      },
    })
    cRVal = responsiveFontSizes(cRVal, { factor: 6 })
    return cRVal
  }, [theme.breakpoints, darkmode])

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '*': {
          scrollMarginTop: '120px',
          textDecoration: 'auto',
        },
        'a:visited': {
          color: theme.palette.primary.main,
        },
      }}
    />
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}
      <App darkmode={darkmode} updateDarkmode={updateDarkmode} />
    </ThemeProvider>
  )
}
