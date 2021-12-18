import {
  Box,
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
import React, { FunctionComponent, ReactComponentElement, ReactNode, useState } from 'react'
import feratel, { ReactComponent as Feratel } from './@static/media/logo-feratel.svg'
import teamABC from './@static/media/TeamABC.jpg'
import ubispaze from './@static/media/logo-ubispaze.png'

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
  const [values, setState] = useState<IRefenencesState>({})

  return (
    <Container sx={{ mb: 1 }} id="Refenences">
      <Card elevation={18} variant="elevation" sx={{ p: 3 }}>
        <Typography variant="h2" gutterBottom>
          Refenences
        </Typography>
        {items.map(({ action, description, name, organisation, status, time, tasks, img }) => (
          <Card sx={{ mb: 2 }} id={'ref_' + name}>
            <CardHeader title={name} />
            <CardContent>
              <Typography noWrap variant="subtitle1">
                {organisation} &mdash; {status}
              </Typography>
              <Typography variant="caption" noWrap>
                {time}
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
        ))}
      </Card>
    </Container>
  )
}

const items: {
  action?: ReactNode
  description: ReactNode
  name: ReactNode
  organisation: ReactNode
  status: ReactNode
  time: ReactNode
  tasks: ReactNode
  img?: ReactNode
}[] = [
  {
    name: 'TeamABC',
    description: '',
    time: '2021',
    organisation: (
      <Link href="https://teamabc.ventures/" target="_blank">
        TeamABC
      </Link>
    ),
    status: 'launched',
    tasks: 'database, web application, backend, server administration',
    // @ts-ignore
    img: <CardMediaCus component="img" src={teamABC} />,
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
    img: <CardMediaCus component="img" src={ubispaze} />,
  },
  {
    name: 'ferjause',
    description: `ferjause is an intern project which aims to order fresh food from the local backers, daily.`,
    time: 'Summer 2019',
    organisation: (
      <Link href="https://www.feratel.at/" target="_blank">
        feratel media technologies AG
      </Link>
    ),
    status: 'intern project',
    tasks: 'database, web application, backend',
    //@ts-ignore
    img: <CardMediaCus component="img" src={feratel} />,
  },
  {
    name: 'ferauto',
    description: 'ferauto is an intern project which manages company vehicles.',
    time: 'Summer 2019',
    organisation: (
      <Link href="https://www.feratel.at/" target="_blank">
        feratel media technologies AG
      </Link>
    ),
    status: 'intern project',
    tasks: 'database, web application, backend',
    //@ts-ignore
    img: <CardMediaCus component="img" src={feratel} />,
  },
]
