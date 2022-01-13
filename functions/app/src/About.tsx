import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/system'
import React, { FunctionComponent, useState } from 'react'
import Helmet from 'react-helmet'
import austria from './@static/media/austria.svg'

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
  border: `0.15em solid ${theme.palette.primary.main}`,
}))

const Image = styled('img')(({ theme }) => ({
  maxWidth: '360px',
  width: '100%',
  height: 'auto',
}))

const age =
  new Date(new Date().getTime() - new Date('09/23/2001').getTime()).getFullYear() -
  new Date(0).getFullYear()

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
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content={`Rupert Bogensperger (m/${age}) originated in Austia is a Full-Stack-Developer. Currently he is working for Sixth Edition.`}
        />
        <meta property="og:title" content="Rupert Bogensperger - About" />
        <meta property="og:image" content="https://ru4ert.com/rupert_neu.jpg" />
        <meta
          property="og:description"
          content={`Rupert Bogensperger (m/${age}) originated in Austia is a Full-Stack-Developer. Currently he is working for Sixth Edition.`}
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - About
      </Typography>
      <Container id="About" sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <section>
            <Typography align="center" variant="h2" gutterBottom>
              Rupert Bogensperger
            </Typography>
            <Grid container>
              <Grid item xs={12} sx={{ pb: 2, textAlign: 'center' }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={<Chip label="Hover me!" color="info" />}
                >
                  <CusAvatar
                    onMouseEnter={() => setState({ ...values, rupertImgsrc: 'rupert_alt.jpg' })}
                    onMouseLeave={() => setState({ ...values, rupertImgsrc: 'rupert_neu.jpg' })}
                    alt="Rupert Bogensperger"
                    title="Rupert Bogensperger"
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
                    title="Github overview Rupert Bogensperger"
                    alt="Github overview Rupert Bogensperger"
                    src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/overview.svg"
                  />
                </Box>
              </Grid>
              {/* {matches && <Divider orientation="vertical" flexItem />} */}
              <Grid item xs={12} sm={5}>
                <Box sx={{ textAlign: 'center' }}>
                  <Image
                    title="Github language statistics Rupert Bogensperger"
                    alt="Github language statistics Rupert Bogensperger"
                    src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/languages.svg"
                  />
                </Box>
              </Grid>
            </Grid>
          </section>
        </Paper>
      </Container>
    </>
  )
}

const items = [
  { key: 'name', val: 'Rupert Bogensperger' },
  {
    key: 'nationality',
    //@ts-ignore
    val: <CardMediaCus title="austia" alt="austia" component="img" src={austria} />,
  },
  { key: 'age', val: `${age} years` },
  { key: 'languages', val: 'german (native), english' },
  {
    key: 'current working position',
    val: (
      <p>
        CTO&nbsp;
        <Link
          target="_blank"
          title="Sixth Edition"
          rel="nofollow noopener noreferrer"
          href="https://thesixthedition.com/"
        >
          @Sixth Edition
        </Link>
      </p>
    ),
  },
  {
    key: 'last attended school',
    val: (
      <Link
        target="_blank"
        rel="nofollow noopener noreferrer"
        title="TGM - Technologisches Gewerbemuseum"
        href="https://www.tgm.ac.at/tagesschule/"
      >
        TGM - Technologisches Gewerbemuseum
      </Link>
    ),
  },
  {
    key: 'programming languages I tested',
    val: (
      <Typography noWrap>
        {[
          'Assembler',
          'Bash',
          'C#',
          'C++',
          'CSS',
          'HTML',
          'Java',
          'JavaScript',
          'Kotlin',
          'PHP',
          'Python',
          'Typescript',
          'VBA',
        ].map((it, index) => (
          <>
            <strong>{it}</strong>,{index % 9 === 0 ? <br /> : ' '}
          </>
        ))}
      </Typography>
    ),
  },
  {
    key: 'View more skills and techniques',
    val: (
      <Link rel="follow" title="skills and techniques" href="/Skills">
        Skills
      </Link>
    ),
  },
]
