import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Components/Name.jsx'
import Description from './Components/Description.jsx'
import Price from './Components/Price.jsx'
import Image from './Components/Image.jsx'

const firstName = "Oussama Lamine";

import BasicExample from './Components/BootCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BasicExample/>
  <p>
    {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
  </p>
    </>
  )
}

export default App
