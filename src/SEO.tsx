import { Container, Paper, Typography } from '@mui/material'
import { default as React, FunctionComponent, useState } from 'react'
import Helmet from 'react-helmet'
type ISEOProps = {}
type ISEOState = {}

export const SEO: FunctionComponent<ISEOProps> = props => {
  const [values, setState] = useState<ISEOState>({})

  return (
    <>
      <Helmet>
        <title>Search Engine Optimization</title>
        <meta
          name="description"
          content="Rupert Bogensperger is a Full Stack Developer. He develops Backend and Frontend Applications."
        />
        <meta property="og:title" content="Rupert Bogensperger - Search Engine Optimization" />
        <meta
          property="og:description"
          content="Rupert Bogensperger is a Full Stack Developer. He develops Backend and Frontend Applications."
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Search Engine Optimization
      </Typography>
      <Container sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <article>
            <Typography variant="h2">What is Search Engine Optimization?</Typography>
            <Typography></Typography>
          </article>
        </Paper>
      </Container>
    </>
  )
  /**
   * What is SEO
   *
   * Why is SEO important
   *
   *
   */
}
