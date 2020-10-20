// const element = document.createElement('h1')
// element.innerText = "Hello World"
// const container = document.getElementById('root')
// container.appendChild(element)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<App />, container)