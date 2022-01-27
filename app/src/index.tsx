import React from 'react'
import { hydrate, render } from 'react-dom'

import reportWebVitals from './reportWebVitals'
import { Styling } from './Styling'

const rootElement = document.getElementById('root')

if (rootElement != null && rootElement.hasChildNodes()) {
  console.log('hydrate')
  hydrate(
    <React.StrictMode>
      <Styling />
    </React.StrictMode>,
    rootElement
  )
} else {
  console.log('render')
  render(
    <React.StrictMode>
      <Styling />
    </React.StrictMode>,
    rootElement
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
