import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'

export const FILE = __filename
type IFullStackDevelopmentProps = {}
type IFullStackDevelopmentState = {}

export const FullStackDevelopment: FunctionComponent<IFullStackDevelopmentProps> = props => {
  const [values, setState] = useState<IFullStackDevelopmentState>({})

  return (
    <Container id="FullStackDevelopment" sx={{ mb: 1 }}>
      <Paper elevation={12} sx={{ p: 3 }}>
        <Typography variant="h2">What is Full Stack Development?</Typography>
        <Grid container>
          <Grid item xs={12} sx={{ p: 2, textAlign: 'center' }}>
            <strong>Full Stack Development</strong> descripes coding on the&nbsp;
            <strong aria-describedby="#8888">Backend</strong>&nbsp; and the&nbsp;
            <strong aria-describedby="#9999">Frontend</strong> of a application.
          </Grid>
          <Grid item xs={12} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
              Frontend
            </Typography>
            <Typography id="9999" gutterBottom>
              All software applications which is execuded by client devices. Clients are
              Smartphones, Desktop or Browser. 📱
            </Typography>
            <Typography variant="h4" gutterBottom>
              Backend
            </Typography>
            <Typography id="8888" gutterBottom>
              All software which is execuded because a client requested it. Common examples are API
              Servers.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
