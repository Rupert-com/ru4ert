import { Box, createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { Nav } from './Nav'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    active: true
  }
}

export const Styling: FunctionComponent = props => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
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
          MuiTypography: {
            variants: [
              {
                props: { variant: 'h1' },
                style: {
                  overflow: 'auto',
                },
              },
            ],
          },
        },
      }),
    []
  )

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
