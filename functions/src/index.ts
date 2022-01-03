import * as functions from 'firebase-functions'
import * as express from 'express'
import * as path from 'path'
import * as isbot from 'isbot'
import * as cors from 'cors'
import * as fs from 'fs'

const app = express()
app.use(cors({ origin: true }))
//req.originalUrl: /Services/

app.get('*', function (req, res, next) {
  const ID = new Date().getTime()
  const info = (msg: unknown) => functions.logger.info(`${ID}:${msg}`)
  const error = (msg: unknown) => functions.logger.error(`${ID}:${msg}`)

  try {
    const isBot = isbot(req.get('user-agent'))
    info(`:${isBot ? 'bot' : 'user'}: ${req.get('user-agent')}\nreq.originalUrl: ${req.originalUrl}\n`)

    if (isBot) {
      const isLastFile = req.originalUrl.split('/').splice(-1, 1)[0].includes('.')
      const amountSubfolders = req.originalUrl.split('/').length - (req.originalUrl.endsWith('/') || isLastFile ? 2 : 1)
      if (amountSubfolders > 1) return next({ status: 404 })

      //
      const cPath = [__dirname, '..', 'app', 'dist']
      if (req.originalUrl !== '/') {
        const folder = req.originalUrl.split('/')[1]
        // const [, file] = req.originalUrl.split('/')
        switch (folder) {
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

      let file = req.originalUrl.split('/').splice(-1, 1)[0]
      if (!file || !file.includes('.')) file = 'index.html'

      info(`file: ${file}`)
      cPath.push(file)

      if (!fs.existsSync(path.resolve(...cPath))) return next({ status: 404 })

      res.sendFile(path.resolve(...cPath))
      info(`served: ${path.resolve(...cPath)}`)
    } else {
      const indexFile = path.resolve(__dirname, '..', 'app', 'build', 'index.html')
      info(`served: ${indexFile}`)

      if (!fs.existsSync(indexFile)) return next({ status: 404 })
      res.sendFile(indexFile)
    }
  } catch (e) {
    error(e)
    return next({ status: 500 })
  } finally {
    return next()
  }
})

app.use(function (err, req, res, next) {
  switch (err.error) {
    case 400:
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '400.html'))
      res.status(err.error)
      break

    case 403:
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '403.html'))
      res.status(err.error)
      break

    case 404:
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '404.html'))
      res.status(err.error)
      break

    case 422:
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '422.html'))
      res.status(err.error)
      break

    case 500:
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '500.html'))
      res.status(err.error)
      break
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.runWith({}).https.onRequest(app)
