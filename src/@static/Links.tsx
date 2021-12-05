import { Box } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'

export const FILE = __filename
type IFormik = {}
type ILinksProps = {}
type ILinksState = {}

export const Links: FunctionComponent<ILinksProps> = props => {
  const [values, setState] = useState<ILinksState>({})

  return <Box>{FILE}</Box>
}
