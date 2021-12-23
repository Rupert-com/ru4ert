import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Link as MLink,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { About } from './About'
import { FullStackDevelopment } from './FullStackDevelopment'
import { Links } from './Links'
import { Refenences } from './Refenences'
import { Skills } from './Skills'
import Helmet from 'react-helmet'
import { SEO } from './SEO'
import { Services } from './Services'
import { styled } from '@mui/system'
import { DarkModeComponent } from './DarkModeComponent'

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.text.disabled,
    textDecoration: 'underline',
  },
}))

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

type INavProps = {
  updateDarkmode: (value: string, numberOfDays: Date) => void
  darkmode: boolean
}
type INavState = {}

const pages = [
  { name: 'Full Stack Development', path: '/FullStackDevelopment' },
  { name: 'Refenences', path: '/Refenences' },
  { name: 'Skills', path: '/Skills' },
  { name: 'SEO', path: '/SEO' },
  { name: 'Services', path: '/Services' },
]

export const App: FunctionComponent<INavProps> = ({ darkmode, updateDarkmode, ...other }) => {
  const [values, setState] = useState<INavState>({})

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box>
      <Router>
        <HideOnScroll {...other}>
          <AppBar>
            <Container maxWidth="xl">
              <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <Button href="/" title="Rupert Bogensperger" target="_self">
                    <Typography
                      variant="h6"
                      component="div"
                      noWrap
                      sx={{
                        color: 'primary.contrastText',
                        textDecoration: window.location.pathname === '/' ? 'underline' : 'none',
                      }}
                    >
                      Rupert Bogensperger
                    </Typography>
                  </Button>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
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
                      display: { md: 'block', lg: 'none' },
                    }}
                  >
                    {pages.map(({ name, path }) => (
                      <CusMenuItem
                        selected={window.location.pathname === path}
                        key={path}
                        onClick={handleCloseNavMenu}
                      >
                        <Link target="_self" to={path} title={name}>
                          <Typography textAlign="center">{name}</Typography>
                        </Link>
                      </CusMenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', lg: 'none' },
                  }}
                >
                  <Button href="/" title="Rupert Bogensperger" target="_self">
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        color: 'primary.contrastText',
                        textDecoration: window.location.pathname === '/' ? 'underline' : 'none',
                      }}
                    >
                      Rupert Bogensperger
                    </Typography>
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                      ml: 2,
                    },
                  }}
                >
                  {pages.map(({ name, path }) => (
                    <Button href={path} title={name} target="_self">
                      <Typography
                        sx={{
                          color: 'text.primary',
                          textDecoration: window.location.pathname === path ? 'underline' : 'auto',
                        }}
                      >
                        {name}
                      </Typography>
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0, ml: 1 }}>
                  <DarkModeComponent darkmode={darkmode} updateDarkmode={updateDarkmode} />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <main>
          <Helmet
            titleTemplate="%s - Rupert Bogensperger | Full Stack Developer"
            defaultTitle="Rupert Bogensperger | Full Stack Developer"
          >
            <meta
              name="description"
              content="Rupert Bogensperger | cross platform app development on mobile devices and enterprise. JavaScript, TypeScript, HTML and CSS are my main techniques to develop for web. Further, I use programming languages like python, C# or Kotlin that targets the JVM, Android, JavaScript and Native."
            />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content="https://ru4ert.com/maskable_icon_x512.png" />
            <meta
              property="og:title"
              content="Rupert Bogensperger | Full Stack Developer & IT Expert"
            />
            <meta
              property="og:description"
              content="Rupert Bogensperger | cross platform app development on mobile devices and enterprise. JavaScript, TypeScript, HTML and CSS are my main techniques to develop for web. Further, I use programming languages like python, C# or Kotlin that targets the JVM, Android, JavaScript and Native."
            />
            <meta property="og:type" content="website" />
          </Helmet>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
            <Route path="/Refenences" element={<Refenences />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/SEO" element={<SEO />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </main>
        <Links />
      </Router>
    </Box>
  )
}
