import { useState } from 'react'
import { CustomCounterProps } from './types'

const CustomCounter = ({ initialValue }: CustomCounterProps) => {
  const [value, setValue] = useState(initialValue || 0)

  const increment = () => setValue((prevValue) => prevValue + 1)

  const decrement = () => setValue((prevValue) => prevValue - 1)

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default CustomCounter
