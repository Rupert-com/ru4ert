import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react'
import Helmet from 'react-helmet'
import feratel from './@static/media/logo-feratel.svg'
import ubispaze from './@static/media/logo-ubispaze.png'
import teamABC from './@static/media/TeamABC.jpg'
import sixthEdition from './@static/media/Sixth-Edition-Vienna-1200x320.png'
import { useTheme } from '@mui/material/styles'

export const FILE = __filename
type IFormik = {}
type IRefenencesProps = {}
type IRefenencesState = {}

const CardMediaCus = styled(CardMedia)(({ theme }) => ({
  margin: 'auto',
  padding: 4,
  maxHeight: '100px',
  maxWidth: '100px',
  float: 'right',
  '&.MuiCardMedia-media': {
    objectFit: 'contain',
    width: 'auto',
  },
}))

export const Refenences: FunctionComponent<IRefenencesProps> = props => {
  const darkmode = useTheme().palette.mode === 'dark'
  const [values, setState] = useState<IRefenencesState>({})

  const items: {
    action?: ReactNode
    description: ReactNode
    name: ReactNode
    organisation: ReactNode
    status: ReactNode
    time: ReactNode
    tasks: ReactNode
    img?: ReactNode
  }[] = useMemo(
    () => [
      {
        name: 'Sixth Edition',
        description: `Sixth Edition is a Vienna luxury brand of fashion and leather goods. Its product lines include stylish handbags, ready-to-wear and accessories for unisex.`,
        time: 'since 2021',
        organisation: (
          <Link
            title="visit Sixth Edition"
            href="https://thesixthedition.com/"
            target="_blank"
            rel="nofollow"
          >
            Sixth Edition
          </Link>
        ),
        status: 'launched',
        tasks: 'database, web application, backend, server administration',
        img: (
          <CardMediaCus
            sx={{
              ...(darkmode
                ? {
                    '-webkit-filter': 'invert(100%)',
                    filter: 'invert(100%)',
                  }
                : {}),
            }}
            // @ts-ignore
            component="img"
            src={sixthEdition}
            alt="Sixth Edition Logo"
          />
        ),
      },
      {
        name: 'TeamABC',
        description: `Team ABC is a global venture capital fund for air, land and sea transportation and tourism innovation. Team ABC finds, supports and scales early-stage disruptive technology startups focused on increasing sustainability and digital transformation in travel and logistics. Combining years of senior executive experience in the travel industry with a deep understanding of venture building, the fund's team helps companies solving a clear industry problem reach a global market.`,
        time: '2021',
        organisation: (
          <Link
            title="visit TeamABC"
            href="https://teamabc.ventures/"
            target="_blank"
            rel="nofollow"
          >
            TeamABC
          </Link>
        ),
        status: 'launched',
        tasks: 'database, web application, backend, server administration',
        // @ts-ignore
        img: <CardMediaCus component="img" src={teamABC} alt="TeamABC Logo" />,
      },
      {
        name: 'ubispaze',
        description: `Ubispaze is a marketplace to list, search, reserve and pay for any type of spaze to store any of your belongings. All in a matter of minutes, anywhere in the world. 
    Ubispaze enables renters to monetize excess spaZes and users to reserve and pay in an easy and secure way. Ubispaze provides for both the renters and users a standardized, secure transaction at every touchpoint. 
    `,
        time: 'May 2020 - October 2020',
        organisation: 'ubispaze GmbH',
        status: 'pre-launch',
        tasks: 'database, web application, backend, business planning, server administration',
        // @ts-ignore
        img: <CardMediaCus component="img" src={ubispaze} alt="ubispaze Logo" />,
      },
      {
        name: 'ferjause',
        description: `ferjause is an intern project which aims to order fresh food from the local backers, daily.`,
        time: 'Summer 2019',
        organisation: (
          <Link
            title="visit feratel media technologies AG"
            href="https://www.feratel.at/"
            target="_blank"
            rel="nofollow"
          >
            feratel media technologies AG
          </Link>
        ),
        status: 'intern project',
        tasks: 'database, web application, backend',
        img: (
          //@ts-ignore
          <CardMediaCus component="img" src={feratel} alt=" feratel media technologies AGLogo" />
        ),
      },
      {
        name: 'ferauto',
        description: 'ferauto is an intern project which manages company vehicles.',
        time: 'Summer 2019',
        organisation: (
          <Link
            title="visit feratel media technologies AG"
            href="https://www.feratel.at/"
            target="_blank"
            rel="nofollow"
          >
            feratel media technologies AG
          </Link>
        ),
        status: 'intern project',
        tasks: 'database, web application, backend',
        img: (
          //@ts-ignore
          <CardMediaCus component="img" src={feratel} alt=" feratel media technologies AG Logo" />
        ),
      },
    ],
    [darkmode]
  )

  return (
    <>
      <Helmet>
        <title>Refenences</title>
        <meta
          name="description"
          content="Rupert Bogensperger worked for feratel media AG, TeamABC and for Sixth Edition. Further, he had an startup. ⭐"
        />
        <meta property="og:title" content="Rupert Bogensperger - About" />
        <meta
          property="og:description"
          content="Rupert Bogensperger worked for feratel media AG, TeamABC and for Sixth Edition. Further, he had an startup. ⭐"
        />
      </Helmet>
      <Container sx={{ my: 10, px: 2, mx: "auto" }}>
        <Typography variant="h1">Refenences</Typography>
        <Typography>
          I was responsible for all types of UI/UX design and front-end development, along with
          managing projects, planning sprints and coordinating sprints with other departments. I
          worked on six different websites throughout my career, each with a unique look and feel
          yet still tied together by their brand identity.
        </Typography>
      </Container>
      <Container sx={{ mb: 1 }} id="Refenences">
        <Card elevation={18} variant="elevation" sx={{ p: 3 }}>
          {items.map(({ action, description, name, organisation, status, time, tasks, img }) => (
            <article>
              <Card sx={{ mb: 2 }} id={'ref_' + name}>
                <CardHeader title={name} />
                <CardContent>
                  <Typography noWrap variant="subtitle1">
                    {organisation} &mdash; {status}
                  </Typography>
                  <Typography variant="caption" noWrap>
                    <time>{time}</time>
                  </Typography>
                  <Divider />
                  <Typography
                    gutterBottom
                    sx={{
                      my: 2,
                      '::after': {
                        content: '""',
                        clear: 'both',
                        display: 'table',
                      },
                    }}
                  >
                    {img}
                    {description}
                  </Typography>
                  <Typography variant="body2">Tasks: {tasks}</Typography>
                </CardContent>
                {action && <CardActions>{action}</CardActions>}
              </Card>
            </article>
          ))}
        </Card>
      </Container>
    </>
  )
}
