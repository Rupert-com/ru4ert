import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import React, { FunctionComponent, useState } from 'react'

export const FILE = __filename
type IAboutProps = {}
type IAboutState = {}

export const About: FunctionComponent<IAboutProps> = props => {
  const [values, setState] = useState<IAboutState>({})

  return (
    <Container id="About" sx={{ mb: 1 }}>
      <Paper elevation={12} sx={{ p: 3 }}>
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt="Github overview Rupert Bogensperger"
                src="https://raw.githubusercontent.com/Rupert-com/github-stats/master/generated/overview.svg"
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
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
