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
        <title>Full-Stack-Development of Rupert Bogensperger</title>
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

      <Container sx={{ my: 10, px: 2, mx: "auto" }}>
        <Typography variant="h1">Full-Stack-Development</Typography>
        <Typography>
          Full-stack development is the process of creating a complete product, from back-end to
          front-end. This includes everything from the smart contract and app development to the
          user interface (UI) and utilising various tools to pull it all together. By creating a
          full-stack app, developers can more easily understand how each part of an application
          works. The goal is to create something that is not only functional but also aesthetically
          beautiful.
        </Typography>
      </Container>
      <Container id="FullStackDevelopment" sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <article>
            <Typography variant="h2">What is Full-Stack-Development?</Typography>
            <Grid container>
              <Grid item xs={12} sx={{ p: 2 }}>
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
