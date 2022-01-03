import * as functions from 'firebase-functions'
import * as express from 'express'
import * as path from 'path'
import * as isbot from 'isbot'
import * as cors from 'cors'
// import * as fs from 'fs'

const app = express()
app.use(cors({ origin: true }))
//req.originalUrl: /Services/
app.get('*', async (req, res) => {
  const isBot = isbot(req.get('user-agent'))
  const ID = new Date().getTime()
  functions.logger.info(`${ID}:${isBot ? 'bot' : 'user'}: ${req.get('user-agent')}\nreq.originalUrl: ${req.originalUrl}\n`)

  try {
    if (isBot) {
      // /Skills/index.html
      //      const file = req.originalUrl.split('/').splice(-1)[0]

      const cPath = [__dirname, '..', 'app', 'dist']
      if (req.originalUrl !== '/') {
        const file = req.originalUrl.split('/')[1]
        // const [, file] = req.originalUrl.split('/')
        switch (file) {
          case 'FullStackDevelopment':
            cPath.push('FullStackDevelopment')
            break
          case 'Refenences':
            cPath.push('Refenences')
            break
          case 'Skills':
            cPath.push('Skills')
            break
          case 'SEO':
            cPath.push('SEO')
            break
          case 'Services':
            cPath.push('Services')
            break
        }
      }
      cPath.push('index.html')
      res.sendFile(path.resolve(...cPath))
      functions.logger.info(`${ID}: served: ${path.resolve(...cPath)}`)
    } else {
      const indexFile = path.resolve(__dirname, '..', 'app', 'build', 'index.html')
      functions.logger.info(`${ID}: served: ${indexFile}`)
      res.sendFile(indexFile)
    }
  } catch (error) {
    functions.logger.error(error)
    res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '500.html'))
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.runWith({}).https.onRequest(app)
