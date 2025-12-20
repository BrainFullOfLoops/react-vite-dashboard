import './App.css'
import { Header } from './Components/Header'
import { Clock, Quote, Weather } from './Components/Body'
import { useEffect, useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    document.body.className = toggle ? "dark" : "light"
  }, [toggle])
  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} />
        <Clock />
        <Weather />
        <Quote />
    </div>
  )
}

export default App



