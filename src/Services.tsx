import { Container, Paper, Typography } from '@mui/material'
import { default as React, FunctionComponent, useState } from 'react'
import Helmet from 'react-helmet'

export const FILE = __filename
type IServicesProps = {}
type IServicesState = {}

export const Services: FunctionComponent<IServicesProps> = props => {
  const [values, setState] = useState<IServicesState>({})

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="Rupert Bogensperger is a Full Stack Developer. He develops Backend and Frontend Applications."
        />
        <meta property="og:title" content="Rupert Bogensperger - Services" />
        <meta
          property="og:description"
          content="Rupert Bogensperger is a Full Stack Developer. He develops Backend and Frontend Applications."
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Services
      </Typography>
      <Container sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          {[
            { headline: '3D - Printing' },
            { headline: 'Webside developing' },
            { headline: 'IT Consulting' },
          ].map(({ headline }) => (
            <article>
              <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
                <Typography variant="h2" gutterBottom>
                  {headline}
                </Typography>
              </Paper>
            </article>
          ))}
        </Paper>
      </Container>
    </>
  )
}
