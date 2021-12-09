import MenuIcon from '@mui/icons-material/Menu'
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
import { Links } from './Links'
import { Refenences } from './Refenences'
import { Skills } from './Skills'

export const FILE = __filename

const HideOnScroll: FunctionComponent<{
  children: React.ReactElement
}> = ({ children }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

type IAppProps = {}
type IAppState = {}

const pages = ['About', 'Refenences', 'Skills', 'Links']

export const App: FunctionComponent<IAppProps> = props => {
  const [values, setState] = useState<IAppState>({})
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="h1"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Rupert Bogensperger
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map(page => (
                    <MenuItem
                      selected={window.location.hash.substring(1) === page}
                      key={page}
                      onClick={handleCloseNavMenu}
                    >
                      <Link href={`#${page}`}>
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="h1"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                Rupert Bogensperger
              </Typography>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  typography: 'body1',
                  '& > :not(style) + :not(style)': {
                    ml: 2,
                  },
                }}
              >
                {pages.map(page => (
                  <Button href={`#${page}`}>
                    <Typography sx={{ color: 'background.paper' }}>{page}</Typography>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}></Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <About />
      <Refenences />
      <Skills />
      <Links />
    </Box>
  )
}
