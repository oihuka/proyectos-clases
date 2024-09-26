import './App.css'
import Timer from './components/Timer/Timer'
import Calculator from './components/Calculator/Calculator'
import { useTime } from './customHooks/useTime'

const App = () => {
  const { date } = useTime()

  return (
    <div className='app-container'>
      <div className='timer-container'>
        <Timer date={date} />
      </div>
      <Calculator />
    </div>
  )
}

export default App
