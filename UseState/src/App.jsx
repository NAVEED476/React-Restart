import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UseModel from './components/UseState'
import Tutorials from './components/useeffect';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UseModel/>
      <Tutorials/>
    </div>
  )
}

export default App
