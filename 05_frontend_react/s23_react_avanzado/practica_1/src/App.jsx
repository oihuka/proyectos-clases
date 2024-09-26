import { useState, useEffect } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'

// Custom Hook
function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return currentTime
}

// Componente Timer
function Timer({ time }) {
  return <p>Hora actual: {time.toLocaleTimeString()}</p>
}

function App() {
  const currentTime = useCurrentTime()

  return (
    <>
      <h1>Reloj en tiempo real</h1>
      <Timer time={currentTime} />
      <Calculator />
    </>
  )
}

export default App
