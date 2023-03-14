import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
// import { HookApp } from './HookApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm />
  // </React.StrictMode>
)
