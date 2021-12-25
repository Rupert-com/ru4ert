import * as functions from 'firebase-functions'
import * as express from 'express'
import * as path from 'path'
import * as isbot from 'isbot'
import * as cors from 'cors'

const app = express()
app.use(cors({ origin: true }));

app.get('/*', async (req, res) => {
  if (isbot(req.get('user-agent'))) {
    functions.logger.info(`Hello bot: ${req.get('user-agent')}`)
    const cPath = [__dirname, '..', 'app', 'dist']

    switch (req.query.url) {
      case '/FullStackDevelopment':
        cPath.push('FullStackDevelopment')
        break
      case '/Refenences':
        cPath.push('Refenences')
        break
      case '/Skills':
        cPath.push('Skills')
        break
      case '/SEO':
        cPath.push('SEO')
        break
      case '/Services':
        cPath.push('Services')
        break
    }
    cPath.push('index.html')
    res.sendFile(path.resolve(...cPath))
  } else {
    functions.logger.info(`Hello user: ${req.get('user-agent')}`)
    res.sendFile(path.resolve(__dirname, '..', 'app', 'build', 'index.html'))
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.runWith({}).https.onRequest(app)
