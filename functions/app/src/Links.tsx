import { Avatar, Box, Card, Container, Grid, Link, Paper, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import instagram, { ReactComponent as Instagram } from './@static/media/instagram.svg'
import github, { ReactComponent as Github } from './@static/media/github.svg'
import thingiverse, { ReactComponent as Thingiverse } from './@static/media/Thingiverse.svg'
import linkedIn, { ReactComponent as LinkedIn } from './@static/media/linkedIn.svg'
import whatsApp, { ReactComponent as WhatsApp } from './@static/media/whatsapp.svg'
import email, { ReactComponent as Email } from './@static/media/email.svg'
import stackOverflow, { ReactComponent as StackOverflow } from './@static/media/stackOverflow.svg'
import { green } from '@mui/material/colors'

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

const items = [
  {
    href: 'https://www.instagram.com/ru4ert/',
    icon: (
      <object
        //@ts-ignore
        alt="rupert Instagram"
        title="rupert Instagram"
        data={instagram}
        type="image/svg+xml"
      />
    ),
    title: 'Instagram',
  },
  {
    href: 'https://github.com/Rupert-com',
    //@ts-ignore
    icon: <object alt="rupert Github" title="rupert Github" data={github} type="image/svg+xml" />,
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
      <object alt="rupert linkedIn" title="rupert linkedIn" data={linkedIn} type="image/svg+xml" />
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
    icon: <object alt="rupert Email" title="rupert Email" data={email} type="image/svg+xml" />,
    title: 'Email',
  },
  {
    href: 'https://stackoverflow.com/users/11123801/ru4ert',
    icon: (
      <object
    //@ts-ignore
        alt="rupert Stack-Overflow"
        title="rupert Stack-Overflow"
        data={stackOverflow}
        type="image/svg+xml"
      />
    ),
    title: 'Stack-Overflow',
  },
]
