import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import Helmet from 'react-helmet'

export const FILE = __filename
type IFullStackDevelopmentProps = {}
type IFullStackDevelopmentState = {}

export const FullStackDevelopment: FunctionComponent<IFullStackDevelopmentProps> = props => {
  const [values, setState] = useState<IFullStackDevelopmentState>({})

  return (
    <>
      <Helmet>
        <title>Full-Stack-Development</title>
        <meta
          name="description"
          content="Rupert Bogensperger is a Full-Stack-Developer. He develops Backend and Frontend Applications."
        />
        <meta property="og:title" content="Rupert Bogensperger - Development" />
        <meta
          property="og:description"
          content="Rupert Bogensperger is a Full-Stack-Developer. He develops Backend and Frontend Applications."
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Full-Stack-Development
      </Typography>
      <Container id="FullStackDevelopment" sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <article>
            <Typography variant="h2">What is Full-Stack-Development?</Typography>
            <Grid container>
              <Grid item xs={12} sx={{ p: 2, textAlign: 'center' }}>
                <strong>Full-Stack-Development</strong> descripes coding on the&nbsp;
                <strong aria-describedby="#8888">Backend</strong>&nbsp; and the&nbsp;
                <strong aria-describedby="#9999">Frontend</strong> of a application.
              </Grid>
              <Grid item xs={12} sx={{ p: 2 }}>
                <Typography component="h3" variant="h4" gutterBottom>
                  Frontend
                </Typography>
                <Typography id="9999" gutterBottom>
                  All software applications which is execuded by client devices. Clients are
                  Smartphones, Desktop or Browser. 📱
                </Typography>
                <Typography component="h3" variant="h4" gutterBottom>
                  Backend
                </Typography>
                <Typography id="8888" gutterBottom>
                  All software which is execuded because a client requested it. Common examples are
                  API Servers.
                </Typography>
              </Grid>
            </Grid>
          </article>
        </Paper>
      </Container>
    </>
  )
}
