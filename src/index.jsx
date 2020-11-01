import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.component'

export const render = () => {
  console.log('Initiating MapDirection')

  console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'development') {
    const forecastPageContent = document.getElementById('forecasts-page-content')

    console.log('Removing advertisement div...')
    forecastPageContent.removeChild(forecastPageContent.childNodes[1])

    const scriptReact = document.createElement('script')
    scriptReact.setAttribute('src', 'https://unpkg.com/react@17/umd/react.development.js')
    document.head.appendChild(scriptReact)

    const scriptReactDOM = document.createElement('script')
    scriptReactDOM.setAttribute('src', 'https://unpkg.com/react-dom@17/umd/react-dom.development.js')
    document.head.appendChild(scriptReactDOM)

    const scriptMap = document.createElement('script')
    scriptMap.setAttribute('href', 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css')
    scriptMap.setAttribute('rel', 'stylesheet')
    document.head.appendChild(scriptMap)

    const rootDiv = document.createElement('div')
    rootDiv.setAttribute('id', 'root')
    forecastPageContent.insertBefore(rootDiv, forecastPageContent.children[1])
  }
  ReactDOM.render(<App />, document.getElementById('root'))
}
