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
  const ID = new Date().getTime()
  functions.logger.info(`${ID}:Hello: ${req.get('user-agent')}\nreq.originalUrl: ${req.originalUrl}\n`)

  try {
    if (isbot(req.get('user-agent'))) {
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
      // } else {
      //   cPath.push('build')
      //   cPath.push(req.originalUrl)

      //   if (!fs.existsSync(path.resolve(...cPath))) {
      //    // res.sendStatus(404)
      //     res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '404.html'))
      //     return
      //   }
      // }
      res.sendFile(path.resolve(...cPath))
      functions.logger.info(`${ID}: served: ${path.resolve(...cPath)}`)
    } else {
      const indexFile = path.resolve(__dirname, '..', 'app', 'build', 'index.html')
      functions.logger.info(`${ID}: served: ${indexFile}`)
      res.sendFile(indexFile)
    }
  } catch (error) {
    functions.logger.error(error)
    // res.sendStatus(500)
    res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '500.html'))
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.runWith({}).https.onRequest(app)
