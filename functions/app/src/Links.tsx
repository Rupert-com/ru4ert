import { Avatar, Box, Card, Container, Grid, Link, Paper, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import instagram from './@static/media/instagram.webp'
import github from './@static/media/github.webp'
import thingiverse, { ReactComponent as Thingiverse } from './@static/media/Thingiverse.svg'
import linkedIn from './@static/media/linkedIn.webp'
import whatsApp, { ReactComponent as WhatsApp } from './@static/media/whatsapp.svg'
import email from './@static/media/email.webp'
import stackOverflow from './@static/media/stackOverflow.webp'
import { green } from '@mui/material/colors'
import styled from 'styled-components'

export const FILE = __filename
type IFormik = {}
type ILinksProps = {}
type ILinksState = {}

export const Links: FunctionComponent<ILinksProps> = props => {
  const [values, setState] = useState<ILinksState>({})

  return (
    <footer>
      <Container sx={{ mb: 1 }} id="Links">
        <Card elevation={12} variant="elevation" sx={{ p: 3 }}>
          <Typography variant="h2" gutterBottom>
            Links
          </Typography>
          <nav>
            <Grid sx={{ m: 1 }} container>
              {items.map(({ href, icon, title }) => (
                <Grid item xs={4} md={1}>
                  <Link
                    href={href}
                    rel="me nofollow noopener noreferrer"
                    target="_blank"
                    underline="none"
                    title={`Visit Rupert's ${title}`}
                  >
                    <Avatar sx={{ bgcolor: 'inherit', m: 'auto' }} variant="rounded">
                      {icon}
                    </Avatar>
                    <Typography align="center">{title}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </nav>
        </Card>
      </Container>
    </footer>
  )
}
const Img = styled('img')(({ theme }) => ({
  height: 'auto',
  width: '100%',
}))

const items = [
  {
    href: 'https://www.instagram.com/ru4ert/',
    icon: (
      // <picture>
      <Img
        //@ts-ignore
        alt="rupert Instagram"
        title="rupert Instagram"
        src={instagram}
      />
      // </picture>
    ),
    title: 'Instagram',
  },
  {
    href: 'https://github.com/Rupert-com',
    //@ts-ignore
    icon: <Img alt="rupert Github" title="rupert Github" src={github} />,
    title: 'Github',
  },
  {
    href: 'https://www.thingiverse.com/rupiert/designs',
    //@ts-ignore
    icon: <Thingiverse alt="rupert Thingiverse" title="rupert Thingiverse" />,
    title: 'Thingiverse',
  },
  {
    href: 'https://at.linkedin.com/in/ru4ert',
    icon: (
      //@ts-ignore
      <Img alt="rupert linkedIn" title="rupert linkedIn" src={linkedIn} />
    ),
    title: 'linkedIn',
  },
  {
    href: 'https://wa.me/message/RSEKN2ONZFS7E1',
    //@ts-ignore
    icon: <WhatsApp alt="rupert WhatsApp" title="rupert WhatsApp" />,
    title: 'WhatsApp',
  },
  {
    href: 'mailto:rupertbogensperger21@gmail.com',
    //@ts-ignore
    icon: <Img alt="rupert Email" title="rupert Email" src={email} />,
    title: 'Email',
  },
  {
    href: 'https://stackoverflow.com/users/11123801/ru4ert',
    icon: (
      <Img
        //@ts-ignore
        alt="rupert Stack-Overflow"
        title="rupert Stack-Overflow"
        src={stackOverflow}
      />
    ),
    title: 'Stack-Overflow',
  },
]
