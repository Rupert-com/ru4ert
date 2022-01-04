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

    if (!isBot) {
      // const cPath = path.join(__dirname, '..', 'app', 'build', req.originalUrl === '/' ? 'index.html' : req.originalUrl)
      // const cPath = path.join(__dirname, '..', 'app', 'build', ...req.originalUrl.split("/"))
      const cPath = [__dirname, '..', 'app', 'build', ...req.originalUrl.split('/')]
      if (req.originalUrl !== '/' && fs.existsSync(path.join(...cPath))) {
        res.sendFile(path.join(...cPath))
      } else {
        res.sendFile(path.join(__dirname, '..', 'app', 'build', 'index.html'))
      }

      // if ((req.originalUrl.endsWith('/') || req.originalUrl.endsWith('/index.html')) && !req.originalUrl.includes('.')) {
      //   cPath.push('index.html')
      // } else {
      //   cPath.push()
      // }

      // res.sendFile(path.join(...cPath))
      return
    }

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

    if (!fs.existsSync(path.join(...cPath))) return next({ status: 404 })

    res.sendFile(path.join(...cPath))
    info(`served: ${path.join(...cPath)}`)
  } catch (e) {
    error(e)
    return next({ status: 500 })
  }
})

app.use(function (err, req, res, next) {
  switch (err.error) {
    case 400:
      res.status(err.error)
      res.sendFile(path.resolve(__dirname, '..', 'app', 'build', '400.html'))
      break

    case 403:
      res.status(err.error)
      res.sendFile(path.join(__dirname, '..', 'app', 'build', '403.html'))
      break

    case 404:
      res.status(err.error)
      res.sendFile(path.join(__dirname, '..', 'app', 'build', '404.html'))
      break

    case 422:
      res.status(err.error)
      res.sendFile(path.join(__dirname, '..', 'app', 'build', '422.html'))
      break

    case 500:
      res.status(err.error)
      res.sendFile(path.join(__dirname, '..', 'app', 'build', '500.html'))
      break
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.runWith({}).https.onRequest(app)
