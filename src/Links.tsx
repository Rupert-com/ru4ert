import { Avatar, Box, Card, Container, Grid, Link, Paper, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { ReactComponent as Instagram } from './@static/media/instagram.svg'
import { ReactComponent as Github } from './@static/media/github.svg'
import { ReactComponent as Thingiverse } from './@static/media/Thingiverse.svg'
import { ReactComponent as LinkedIn } from './@static/media/linkedIn.svg'
import { ReactComponent as WhatsApp } from './@static/media/whatsapp.svg'
import { ReactComponent as Email } from './@static/media/email.svg'
import { ReactComponent as StackOverflow } from './@static/media/stackOverflow.svg'
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
                  <Link href={href} target="_blank" underline="none">
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
  { href: 'https://www.instagram.com/ru4ert/', icon: <Instagram />, title: 'Instagram' },
  { href: 'https://github.com/Rupert-com', icon: <Github />, title: 'Github' },
  {
    href: 'https://www.thingiverse.com/rupiert/designs',
    icon: <Thingiverse />,
    title: 'Thingiverse',
  },
  {
    href: 'https://at.linkedin.com/in/ru4ert',
    icon: <LinkedIn />,
    title: 'linkedIn',
  },
  {
    href: 'https://wa.me/message/RSEKN2ONZFS7E1',
    icon: <WhatsApp />,
    title: 'WhatsApp',
  },
  {
    href: 'mailto:rupertbogensperger21@gmail.com',
    icon: <Email />,
    title: 'Email',
  },
  {
    href: 'https://stackoverflow.com/users/11123801/ru4ert',
    icon: <StackOverflow />,
    title: 'Stack-Overflow',
  },
]
