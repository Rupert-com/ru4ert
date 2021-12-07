import { Box } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'

export const FILE = __filename
type IProfileProps = {}
type IProfileState = {}

export const Profile: FunctionComponent<IProfileProps> = props => {
  const [values, setState] = useState<IProfileState>({})

  return <Box>{FILE}</Box>
}
