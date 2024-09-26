import React, { useRef, useState } from 'react'

function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [firstNumber, setFirstNumber] = useState(null)
  const [lastResult, setLastResult] = useState(null)
  const [history, setHistory] = useState([])
  const inputRef = useRef(null)

  const handleNumberInput = (e) => {
    setCurrentNumber(e.target.value)
  }

  const handleOperationSelect = (e) => {
    setOperation(e.target.value)
    setFirstNumber(parseFloat(currentNumber))
    setCurrentNumber('')
    inputRef.current.focus()
  }

  const handleCalculate = () => {
    const secondNumber = parseFloat(currentNumber)
    let result

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case '*':
        result = firstNumber * secondNumber
        break
      case '/':
        result = firstNumber / secondNumber
        break
      default:
        result = 'Operación no válida'
    }

    setLastResult(result)
    setHistory([...history, result].sort((a, b) => a - b))
    setCurrentNumber('')
    setOperation('')
    setFirstNumber(null)
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>Calculadora Simple</h2>
      <input
        type='number'
        value={currentNumber}
        onChange={handleNumberInput}
        ref={inputRef}
      />
      <select
        value={operation}
        onChange={handleOperationSelect}
        disabled={!currentNumber && !firstNumber}
      >
        <option value=''>Selecciona operación</option>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <button onClick={handleCalculate} disabled={!operation || !currentNumber}>
        =
      </button>
      <p>Último resultado: {lastResult !== null ? lastResult : 'N/A'}</p>
      <h3>Historial de resultados:</h3>
      <ul>
        {history.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

export default Calculator
