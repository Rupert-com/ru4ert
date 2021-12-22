import * as functions from 'firebase-functions'
import express = require('express')
import path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'))
})

export const index = functions.https.onRequest(app)
