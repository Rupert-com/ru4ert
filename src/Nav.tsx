import { Box } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { App } from './App'

type INavProps = {}
type INavState = {}

export const Nav: FunctionComponent<INavProps> = props => {
  const [values, setState] = useState<INavState>({})

  return (
    <Box>
      <App />
    </Box>
  )
}
