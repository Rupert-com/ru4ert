import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, width } from '@mui/system'
import austria, { ReactComponent as Austria } from './@static/media/austria.svg'

const CardMediaCus = styled(CardMedia)(({ theme }) => ({
  padding: 4,
  maxHeight: '100px',
  maxWidth: '100px',
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    margin: 'auto',
  },
  '&.MuiCardMedia-media': {
    objectFit: 'contain',
    width: 'auto',
  },
}))

const CusAvatar = styled(Avatar)(({ theme }) => ({
  height: 'auto',
  width: '25rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  cursor: 'pointer',
}))

const Image = styled('img')(({ theme }) => ({
  maxWidth: '360px',
  width: '100%',
  height: 'auto',
}))

export const FILE = __filename
type IAboutProps = {}
type IAboutState = {
  rupertImgsrc: 'rupert_neu.jpg' | 'rupert_alt.jpg'
}

export const About: FunctionComponent<IAboutProps> = props => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [values, setState] = useState<IAboutState>({
    rupertImgsrc: 'rupert_neu.jpg',
  })

  return (
    <Container id="About" sx={{ mb: 1 }}>
      <Paper elevation={12} sx={{ p: 3 }}>
        <Typography variant="h2">About</Typography>
        <Grid container>
          <Grid item xs={12} sx={{ p: 2, textAlign: 'center' }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={<Chip label="Hover me!" color="info" />}
            >
              <CusAvatar
                onMouseEnter={() => setState({ ...values, rupertImgsrc: 'rupert_alt.jpg' })}
                onMouseLeave={() => setState({ ...values, rupertImgsrc: 'rupert_neu.jpg' })}
                alt="Rupert Bogensperger"
                src={values.rupertImgsrc}
              />
            </Badge>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1.5} sx={{ mb: 5 }}>
              {items.map(({ key, val }) => (
                <>
                  <Grid item xs={12} sm={6}>
                    <Typography align={matches ? 'center' : 'right'}>{key}:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography align={matches ? 'center' : 'left'}>{val}</Typography>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom align="center">
              statistics
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box sx={{ textAlign: 'center' }}>
              <Image
                alt="Github overview Rupert Bogensperger"
                src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/overview.svg"
              />
            </Box>
          </Grid>
          {/* {matches && <Divider orientation="vertical" flexItem />} */}
          <Grid item xs={12} sm={5}>
            <Box sx={{ textAlign: 'center' }}>
              <Image
                alt="Github language statistics Rupert Bogensperger"
                src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/languages.svg"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

const items = [
  { key: 'name', val: 'Rupert Bogensperger' },
  {
    key: 'nationality',
    //@ts-ignore
    val: <CardMediaCus component="img" src={austria} />,
  },
  { key: 'born', val: '2001' },
  { key: 'languages', val: 'german (native), english' },
  { key: 'current working position', val: 'CTO @ Sixth Edition' },
  {
    key: 'last attended school',
    val: (
      <Link rel="noopener" target="_blank" href="https://www.tgm.ac.at/tagesschule/">
        TGM - Technologisches Gewerbemuseum
      </Link>
    ),
  },
]
