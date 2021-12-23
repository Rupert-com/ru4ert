import * as functions from 'firebase-functions'
import * as express from 'express'
import * as path from 'path'
import * as isbot from 'isbot'
// import * as puppeteer from 'puppeteer'
// import * as fs from 'fs'

const app = express()
app.get('*', async (req, res) => {
  if (isbot(req.headers['user-agent'])) {
    const cPath = [__dirname, '..', 'app', 'build']

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
    res.sendFile(path.resolve(__dirname, '..', 'app', 'build', 'index.html'))
  }
})

// app.use(prerenderNode.set('prerenderToken', 'sg6OgFYXOciBsLArnyc4'))

export const index = functions.https.onRequest(app)
