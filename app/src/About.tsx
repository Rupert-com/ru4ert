import { Avatar, Badge, Box, CardMedia, Chip, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material'
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

const age = new Date(new Date().getTime() - new Date('09/23/2001').getTime()).getFullYear() - new Date(0).getFullYear()

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
        <title>Person</title>
        <meta name="description" content={`Rupert Bogensperger (m/${age}) originated in Austia does Full-Stack development. Rupert is a young, pasioned man willing to scale to the next level. Currently he works for Sixth Edition.`} />
        <meta property="og:title" content="Rupert Bogensperger - Person" />
        <meta property="og:image" content="https://ru4ert.com/rupert_neu.jpg" />
        <meta property="og:description" content={`Rupert Bogensperger (m/${age}) originated in Austia does Full-Stack development. Rupert is a young, pasioned man willing to scale to the next level. Currently he works for Sixth Edition.`} />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger
      </Typography>
      <Container id="About" sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <section>
            <Typography align="center" variant="h2" gutterBottom>
              Person
            </Typography>
            <Grid container>
              <Grid item xs={12} sx={{ pb: 2, textAlign: 'center' }}>
                <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<Chip label="Hover me!" color="info" />}>
                  <CusAvatar onMouseEnter={() => setState({ ...values, rupertImgsrc: 'rupert_alt.jpg' })} onMouseLeave={() => setState({ ...values, rupertImgsrc: 'rupert_neu.jpg' })} alt="Rupert Bogensperger" title="Rupert Bogensperger" src={values.rupertImgsrc} />
                </Badge>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5} sx={{ mb: 5 }}>
                  <Grid item xs={12} sx={{ mx: { lg: '30px' } }} borderBottom={'1px solid black'}>
                    <Typography align="justify">
                      Hey there! I'm Rupert Bogensperger, and I'm a full-stack developer. I was born in Salzburg, Austria{' '}
                      <Link
                        target="_blank"
                        title="St.Michael/Lungau"
                        rel="nofollow noopener noreferrer"
                        href="https://www.google.com/maps/place/5582+Sankt+Michael+im+Lungau/data=!4m2!3m1!1s0x4770db59fe6dfc6b:0xb6f0bc3eabbc6baf?sa=X&ved=2ahUKEwiFu5mJn-v3AhXMT8AKHR3gCBYQ8gF6BAhnEAE"
                      >
                        (St.Michael/Lungau)
                      </Link>{' '}
                      , where I also completed my secondary education. Back then, I was pretty active in snowboarding and judo competitions—and I'm still pretty active today! I'm a big fan of chess, 3D printing, riding my bike around town and playing with my cats. I've been
                      working as a developer for over three years now — the last two years in Vienna. I started out as a front-end developer but quickly moved into full-stack development because it's what I love most about coding: being able to work on different parts of the
                      process from start to finish.
                    </Typography>
                  </Grid>
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
                  <Image title="Github overview Rupert Bogensperger" alt="Github overview Rupert Bogensperger" src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/overview.svg" />
                </Box>
              </Grid>
              {/* {matches && <Divider orientation="vertical" flexItem />} */}
              <Grid item xs={12} sm={5}>
                <Box sx={{ textAlign: 'center' }}>
                  <Image title="Github language statistics Rupert Bogensperger" alt="Github language statistics Rupert Bogensperger" src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/languages.svg" />
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
  { key: 'languages', val: 'german (native) & english' },
  {
    key: 'current working position',
    val: (
      <p>
        Head of IT&nbsp;
        <Link target="_blank" title="Sixth Edition" rel="nofollow noopener noreferrer" href="https://thesixthedition.com/">
          @Sixth Edition
        </Link>
      </p>
    ),
  },
  {
    key: 'last attended school',
    val: (
      <Link target="_blank" rel="nofollow noopener noreferrer" title="TGM - Technologisches Gewerbemuseum" href="https://www.tgm.ac.at/tagesschule/">
        TGM - Technologisches Gewerbemuseum
      </Link>
    ),
  },
  {
    key: 'programming languages I tested',
    val: (
      <Typography noWrap>
        {['Assembler', 'Bash', 'C#', 'C++', 'CSS', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'Dart', 'PHP', 'Python', 'Typescript', 'Liquid', 'VBA'].map((it, index) => (
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
  {
    key: 'Current CV/Resume',
    val: (
      <Link rel="follow" title="skills and techniques" href="/Rupert_Bogensperger_CV.pdf">
        Rupert_Bogensperger_CV.pdf
      </Link>
    ),
  },
]
