import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './components/01-useState/CounterApp'
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './components/02-useEffect/SimpleForm'
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook'
import { FocusScreen } from './components/04-useRef/FocusScreen'
// import { HookApp } from './HookApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FocusScreen />
  // </React.StrictMode>
)
