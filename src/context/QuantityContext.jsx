import { createContext, useContext, useState } from "react"

// 1. Create context
// This creates a "global store"
export const QuantityContext = createContext()

// 2. Create Provider Component
// This component will wrap our app and provide data
export const QuantityProvider = ({ children }) => {
  // create state (global state)
  const [quantity, setQuantity] = useState(0)

  // function to increase quantity by 1
  const increment = () => {
    setQuantity(quantity + 1)
  }

  // function to decrease quantity by 1
  const decrement = () => {
    setQuantity(quantity - 1)
  }

  return (
    <QuantityContext.Provider value={{ quantity, increment, decrement }}>
      {children}
    </QuantityContext.Provider>
  )
}

// custom hook
export const useQuantity = () => {
    return useContext(QuantityContext)
}
