import { useState } from "react"
import Button from "./ui/button"

const Counter = () => {
  // count -> name of state
  // setCount -> function to modify state
  // 0 -> initial value of state
  const [count, setCount] = useState(0)

  // function to handle increment
  const increment = () => {
    setCount(count + 1)
  }

  // function to handle decrement
  const decrement = () => {
    setCount(count - 1)
  }

  // function to handle reset
  const reset = () => {
    setCount(0)
  }

  // function to handle increment by value
  const incrementByValue = (value) => {
    setCount(count + value)
  }

  return (
    <div className="border border-gray-400 p-6 shadow rounded-xl w-fit m-10">
      <h1 className="text-center font-medium">Counter App</h1>

      <p className="text-center mt-4 font-medium">{count}</p>

      <div className="space-x-4 mt-6">
        <Button onClick={increment}>Add</Button>

        <Button onClick={decrement}>Subtract</Button>

        <Button onClick={reset}>Reset</Button>

        <Button onClick={() => incrementByValue(10)}>Increment By value</Button>
      </div>
    </div>
  )
}
export default Counter
