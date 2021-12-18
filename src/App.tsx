import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { FunctionComponent, useState } from 'react'
import { About } from './About'
import { FullStackDevelopment } from './FullStackDevelopment'
import { Links } from './Links'
import { Refenences } from './Refenences'
import { Skills } from './Skills'

export const FILE = __filename

type IAppProps = {}
type IAppState = {}

export const App: FunctionComponent<IAppProps> = props => {
  const [values, setState] = useState<IAppState>({})

  return (
    <>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Full Stack Developer
      </Typography>
      <About />
      <FullStackDevelopment />
      <Refenences />
      <Links />
      <Skills />
    </>
  )
}
