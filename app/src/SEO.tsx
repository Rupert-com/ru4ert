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
          content="Rupert Bogensperger is a Full-Stack-Developer. He develops Backend and Frontend Applications."
        />
        <meta property="og:title" content="Rupert Bogensperger - Search-Engine-Optimization" />
        <meta
          property="og:description"
          content="Rupert Bogensperger is a Full-Stack-Developer. He develops Backend and Frontend Applications."
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Search-Engine-Optimization
      </Typography>
      <Container sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3, mb: 3 }}>
          <article>
            <Typography variant="h2">What is Search-Engine-Optimization? </Typography>
            <Typography>
              Search-Engine-Optimization(SEO) describes the progress of optimising websites for
              search-engines. To put it simply, rewriting texts as well as structure your website
              properly and setting alt-Props and title-Props to your Links and Images. Further, the
              more complex part consists of analyzing user interactions and offering solutions to
              the search queries made by the user.
            </Typography>
          </article>
        </Paper>
        <Paper elevation={12} sx={{ p: 3, mb: 3 }}>
          <article>
            <Typography variant="h2">Why is Search-Engine-Optimization (SEO) important?</Typography>
            <Typography>
              Is Search-Engine-Optimization important is what most Web-Admins and Web- and
              Full-Stack-Developer ask. The simple answer is yes because you have to translate a
              user intend into a served solution.
            </Typography>
          </article>
        </Paper>
      </Container>
    </>
  )
}
