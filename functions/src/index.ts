import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

export const index = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase index and hot!')
})
// import * as functions from 'firebase-functions'
// import * as util from '../../shared/util'

// exports.addMessage = functions.https.onRequest((request, response) => {
//   util.helloWorld()
//   response.send('Hello from Firebase!')
// })
