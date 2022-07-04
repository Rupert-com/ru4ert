import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Slide, Link as MLink, Toolbar, Typography, useScrollTrigger, Avatar } from '@mui/material'
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
import { Gravatar } from './util/Gravatar'
import { Certifications } from './Certifications'

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  '&.Mui-selected': {
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
  { name: 'Full-Stack-Development', path: '/FullStackDevelopment' },
  { name: 'Certifications & Documents', path: '/Certifications' },
  { name: 'Refenences', path: '/Refenences' },
  { name: 'Skills', path: '/Skills' },
  // { name: 'SEO', path: '/SEO' },
  // { name: 'Services', path: '/Services' },
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
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <Button href="/" title="Rupert Bogensperger" target="_self">
                    <Avatar src={Gravatar('me@ru4ert.com')} />
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
                <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                  <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
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
                      <CusMenuItem selected={window.location.pathname === path} key={path} onClick={handleCloseNavMenu}>
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
                          color: 'primary.contrastText',
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
          <Helmet titleTemplate="%s - Rupert Bogensperger | Full-Stack Development" defaultTitle="Rupert Bogensperger | Full-Stack Development">
            <meta
              name="description"
              content="Rupert Bogensperger | cross platform app development on mobile devices and enterprise. JavaScript, TypeScript, HTML and CSS are my main techniques to develop for web. Further, I use programming languages like python, C# or Kotlin that targets the JVM, Android, JavaScript and Native."
            />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content="https://www.gravatar.com/avatar/a98495ef27eacd246572b931ac8dd6dc?s=512&d=mp&r=g" />
            <meta property="og:title" content="Rupert Bogensperger | Full-Stack Development" />
            <meta
              property="og:description"
              content="Rupert Bogensperger | cross platform app development on mobile devices and enterprise. JavaScript, TypeScript, HTML and CSS are my main techniques to develop for web. Further, I use programming languages like python, C# or Kotlin that targets the JVM, Android, JavaScript and Native."
            />
            <meta property="og:type" content="website" />

            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: pages.map(({ name, path }, index) => ({
                  '@type': 'ListItem',
                  position: 1,
                  name: name,
                  item: `https://ru4ert.com${path}`,
                })),
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'http://www.schema.org',
                '@type': 'Person',
                name: 'Rupert Bogensperger',
                nationality: {
                  '@type': 'Country',
                  address: 'Austria',
                },
                givenName: 'Rupert',
                familyName: 'Bogensperger',
                jobTitle: 'Head of IT',
                url: 'https://ru4ert.com/',
                gender: 'male',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Nusswaldgasse, 23-25',
                  postOfficeBoxNumber: '1',
                  addressLocality: 'Vienna, Austria',
                  addressRegion: 'Vienna',
                  postalCode: '1190',
                  addressCountry: 'AT',
                },
                email: 'me@ru4ert.com',
                telephone: '+436601873938',
                birthDate: '2001-09-23',
                sameAs: ['https://www.instagram.com/ru4ert/', 'https://github.com/Rupert-com', 'https://www.thingiverse.com/rupiert/designs', 'https://at.linkedin.com/in/ru4ert', 'https://wa.me/message/RSEKN2ONZFS7E1', 'https://stackoverflow.com/users/11123801/ru4ert'],
                alumniOf: [
                  {
                    '@type': 'EducationalOrganization',
                    address: {
                      '@type': 'PostalAddress',
                      addressCountry: 'AT',
                      addressLocality: 'Vienna, Austria',
                      addressRegion: 'Vienna',
                      postalCode: '1200',
                      streetAddress: 'Wexstraße 19-23',
                    },
                    name: 'TGM - Technologisches Gewerbemuseum',
                  },
                  {
                    '@type': 'EducationalOrganization',
                    address: {
                      '@type': 'PostalAddress',
                      addressCountry: 'AT',
                      addressLocality: 'Salzburg, Austria',
                      addressRegion: 'Salzburg',
                      postalCode: '5760',
                      streetAddress: 'Almerstraße 33',
                    },
                    name: 'HTL Saalfelden',
                  },
                  {
                    '@type': 'EducationalOrganization',
                    address: {
                      '@type': 'PostalAddress',
                      addressCountry: 'AT',
                      addressLocality: 'Salzburg, Austria',
                      addressRegion: 'Salzburg',
                      postalCode: '5580',
                      postOfficeBoxNumber: 'A',

                      streetAddress: 'Lasabergweg 12',
                    },
                    name: 'Bundesgymnasium Tamsweg',
                  },
                ],
                knowsLanguage: [
                  {
                    '@type': 'Language',
                    name: 'English',
                    alternateName: 'en',
                  },
                  {
                    '@type': 'Language',
                    name: 'German',
                    alternateName: 'de',
                  },
                ],
                worksFor: {
                  '@type': 'Organization',
                  address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'AT',
                    addressLocality: 'Vienna, Austria',
                    addressRegion: 'Vienna',
                    postalCode: '1020 ',
                    streetAddress: 'Franz Hochedlingergasse 26/27',
                  },
                  funder: {
                    '@type': 'Person',
                    name: 'Aurelius Nöll',
                    givenName: 'Aurelius',
                    familyName: 'Nöll',
                    jobTitle: 'Founder',
                  },
                  contactPoint: [{ '@type': 'ContactPoint', email: 'hello@thesixthedition.com', contactType: 'customer service', availableLanguage: ['English', 'German'] }],
                  email: 'hello@thesixthedition.com',
                  name: 'Sixth Edition GmbH',
                },
                brand: {
                  '@type': 'Organization',
                  url: 'https://ru4ert.com',
                  email: 'rupertbogensperger21@gmail.com',
                  knowsLanguage: [
                    {
                      '@type': 'Language',
                      name: 'English',
                      alternateName: 'en',
                    },
                    {
                      '@type': 'Language',
                      name: 'German',
                      alternateName: 'de',
                    },
                  ],
                  logo: 'https://ru4ert.com/ru4ert.png',
                  brand: {
                    '@type': 'Brand',
                    name: 'ru4ert',
                    logo: 'https://www.gravatar.com/avatar/a98495ef27eacd246572b931ac8dd6dc?s=180&d=mp&r=g',
                  },
                },
              })}
            </script>
          </Helmet>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
            <Route path="/Refenences" element={<Refenences />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/SEO" element={<SEO />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Links />
      </Router>
    </Box>
  )
}
